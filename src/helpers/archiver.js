import AdmZip from 'adm-zip'

export async function archiveDirectory(output, sourceDir) {
  const zip = new AdmZip()
  zip.addLocalFolder(sourceDir)
  await zip.writeZipPromise(output)
  return output
}
