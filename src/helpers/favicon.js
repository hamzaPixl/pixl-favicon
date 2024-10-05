import path from 'path'
import favicons from 'favicons'
import fs from 'fs'
import { emptyDirectory } from './files.js'
import manifest from './manifest.json'
import { getFaviconRefs } from './tags.js'

export async function generateFavicons(base64, destination, base_destination) {
  const files = []
  const { images } = await favicons(base64, {
    path: '/favicon/',
    manifestMaskable: true,
    icons: {
      appleIcon: true,
      favicons: true,
      android: true,
      appleStartup: true,
    },
  })

  if (fs.existsSync(`${destination}/processed`)) {
    await emptyDirectory(`${destination}/processed`)
  } else {
    fs.mkdirSync(`${destination}/processed`)
  }

  if (fs.existsSync(`${destination}/processed/favicons`)) {
    await emptyDirectory(`${destination}/processed/favicons`)
  } else {
    fs.mkdirSync(`${destination}/processed/favicons`)
  }

  fs.writeFileSync(`${destination}/processed/manifest.json`, JSON.stringify(manifest, null, 2))
  files.push({ name: 'manifest.json', url: `${base_destination}/processed/manifest.json` })

  images.forEach((image) => {
    let basePath = `/processed/`
    let filePath = path.join(destination, basePath, image.name)
    if (!image.name.includes('.ico')) {
      basePath = `/processed/favicons/`
      filePath = path.join(destination, basePath, image.name)
    }
    fs.writeFileSync(filePath, image.contents)
    files.push({ name: image.name, url: `${base_destination}${basePath}${image.name}` })
  })

  return {
    manifest,
    files,
    tags: getFaviconRefs(manifest),
  }
}
