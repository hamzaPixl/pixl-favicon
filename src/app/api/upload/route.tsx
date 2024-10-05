import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import { v4 } from 'uuid'
import { generateFavicons } from '../../../helpers/favicon'
import { archiveDirectory } from '../../../helpers/archiver'

const UPLOAD_DIR_NAME = 'uploads'
const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? '', `public/${UPLOAD_DIR_NAME}`)

export const POST = async (req: NextRequest) => {
  const formData = await req.formData()
  const body = Object.fromEntries(formData)
  const file = (body.file as Blob) || null

  const cid = v4()

  if (!file) {
    return NextResponse.json({
      success: false,
      message: 'No file found',
    })
  }

  const fileObj = body.file as File
  if (!fileObj.type.includes('image') && !fileObj.type.includes('octet-stream')) {
    return NextResponse.json({
      success: false,
      message: 'Invalid file type',
    })
  }

  const buffer = Buffer.from(await file.arrayBuffer())
  const base_path = `${UPLOAD_DIR}/${cid}/`

  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR)
  }

  if (!fs.existsSync(base_path)) {
    fs.mkdirSync(base_path)
  }

  let fileName = fileObj.name
  switch (fileObj.type) {
    case 'image/png':
      fileName = 'image.png'
      break
    case 'image/jpeg':
      fileName = 'image.jpg'
      break
    case 'image/gif':
      fileName = 'image.gif'
      break
  }

  try {
    fs.writeFileSync(path.resolve(base_path, fileName), buffer)
    const processed = await generateFavicons(buffer, base_path, `${UPLOAD_DIR_NAME}/${cid}`)

    await archiveDirectory(`${UPLOAD_DIR}/${cid}/processed.zip`, `${UPLOAD_DIR}/${cid}/processed/`)

    return NextResponse.json({
      success: true,
      base: {
        content: buffer.toString('base64'),
        name: fileName,
        size: fileObj.size,
        type: fileObj.type,
      },
      processed,
      cid,
      zip_url: `/uploads/${cid}/processed.zip`,
      url: `/uploads/${cid}/${fileName}`,
    })
  } catch (e) {
    console.error(e)
    return NextResponse.json({
      success: false,
      message: 'Error generating favicons',
    })
  }
}
