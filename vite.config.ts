import fs from 'node:fs'
import path from 'node:path'
import babel from '@rolldown/plugin-babel'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/** Folder sumber gambar unit. Berkas baru di sini langsung ikut terbaca. */
const IMAGE_DIR = 'public/images/iphone'
const VIRTUAL_ID = 'virtual:iphone-colors'
const RESOLVED_ID = '\0' + VIRTUAL_ID

/** Pola nama berkas: {generasi}_basic_{warna}.webp */
const FILE_PATTERN = /^(\d+)_basic_(.+)\.webp$/i

/**
 * Plugin pengindeks gambar warna iPhone.
 *
 * Vite tidak bisa membaca isi folder public saat aplikasi berjalan, jadi plugin
 * ini memindai folder gambar sekali lalu menyajikannya sebagai modul virtual.
 * Hasilnya: menambah berkas baru cukup dengan menaruh berkasnya di folder, dan
 * daftar warna ikut terbarui tanpa perlu mengubah kode.
 */
function iphoneColorsPlugin(): Plugin {
  const imageDir = path.resolve(process.cwd(), IMAGE_DIR)

  const readEntries = () => {
    let files: string[] = []
    try {
      files = fs.readdirSync(imageDir)
    } catch {
      return []
    }

    return files
      .filter((file) => FILE_PATTERN.test(file))
      .sort()
      .map((file) => {
        const match = FILE_PATTERN.exec(file)
        if (match === null) {
          return null
        }
        return {
          generation: match[1],
          color: match[2].toLowerCase(),
          url: `/images/iphone/${file}`,
        }
      })
      .filter((entry): entry is { generation: string; color: string; url: string } => entry !== null)
  }

  return {
    name: 'opendevice-iphone-colors',

    resolveId(id) {
      if (id === VIRTUAL_ID) {
        return RESOLVED_ID
      }
      return null
    },

    load(id) {
      if (id !== RESOLVED_ID) {
        return null
      }
      return `export const IPHONE_COLORS = ${JSON.stringify(readEntries())}`
    },

    configureServer(server) {
      server.watcher.add(imageDir)

      const onImageChange = (file: string) => {
        if (!file.replace(/\\/g, '/').includes(IMAGE_DIR)) {
          return
        }
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod !== undefined) {
          server.moduleGraph.invalidateModule(mod)
        }
        server.ws.send({ type: 'full-reload' })
      }

      server.watcher.on('add', onImageChange)
      server.watcher.on('unlink', onImageChange)
    },
  }
}

export default defineConfig({
  plugins: [
    iphoneColorsPlugin(),
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
  ],
})
