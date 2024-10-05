import fs from 'fs'
import path from 'path'

export async function emptyDirectory(directoryPath) {
  const files = await fs.promises.readdir(directoryPath)

  for (const file of files) {
    const filePath = path.join(directoryPath, file)

    const isFile = await fs.promises.stat(filePath).then((stats) => stats.isFile())

    if (isFile) {
      await fs.promises.unlink(filePath)
    } else {
      await emptyDirectory(filePath)
      await fs.promises.rmdir(filePath)
    }
  }
}
