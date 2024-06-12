import koffi from 'koffi'
import * as path from 'path'

type AcceptPlatform = 'win32' | 'linux' | 'darwin'

const plat = process.platform as AcceptPlatform

const libName: Record<AcceptPlatform, (d: string, l: string) => string> = {
  win32: (d, l) => path.join(d, `${l}.dll`),
  linux: (d, l) => path.join(d, `lib${l}.so`),
  darwin: (d, l) => path.join(d, `lib${l}.dylib`)
}

let win_dll_paths: string[] | null = null

export function loadLibrary(dir: string, lib: string) {
  if (plat === 'win32') {
    const kernel = koffi.load('kernel32.dll')
    if (!win_dll_paths) {
      kernel.func('int32 __stdcall SetDefaultDllDirectories(uint32)')(0x1000)
      win_dll_paths = []
    }
    if (!win_dll_paths.includes(dir)) {
      kernel.func('int32 __stdcall AddDllDirectory(str16)')(dir)
      win_dll_paths.push(dir)
    }
  }

  return koffi.load(libName[plat](dir, lib))
}
