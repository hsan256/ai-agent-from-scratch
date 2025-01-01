import 'dotenv/config'
import { readdir } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const main = async () => {
  const evalName = process.argv[2] // Retrieve the argument passed
  const experimentsDir = join(__dirname, 'experiments')

  try {
    if (evalName) {
      const evalPath = join(experimentsDir, `${evalName}.eval.ts`)
      const evalFileUrl = pathToFileURL(evalPath).href // Convert to file:// URL
      await import(evalFileUrl)
    } else {
      const files = await readdir(experimentsDir)
      const evalFiles = files.filter((file) => file.endsWith('.eval.ts'))

      for (const evalFile of evalFiles) {
        const evalPath = join(experimentsDir, evalFile)
        const evalFileUrl = pathToFileURL(evalPath).href // Convert to file:// URL
        await import(evalFileUrl)
      }
    }
  } catch (error) {
    console.error(
      `Failed to run eval${evalName ? ` '${evalName}'` : 's'}:`,
      error
    )
    process.exit(1)
  }
}

main()
