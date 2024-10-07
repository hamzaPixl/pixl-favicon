import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

const UPLOAD_DIR_NAME = 'uploads'
const UPLOAD_DIR = path.resolve(process.env.ROOT_PATH ?? '', `public/${UPLOAD_DIR_NAME}`)

export const GET = async (req: NextRequest) => {
  const cid = req.url.split('/').pop()
  const base_path = `${UPLOAD_DIR}/${cid}/`

  if (!fs.existsSync(base_path)) {
    return NextResponse.json({
      success: false,
      message: 'No file found',
    })
  }

  const document = fs.readFileSync(path.resolve(base_path, 'document.json'))
  return NextResponse.json(JSON.parse(document.toString()))
}
