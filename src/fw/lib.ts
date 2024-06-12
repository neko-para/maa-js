import koffi from 'koffi'

import { loadLibrary } from '../loader'

class LibraryHolder {
  lib: koffi.IKoffiLib
  funcs: Record<string, koffi.KoffiFunction>

  constructor(l: koffi.IKoffiLib) {
    this.lib = l
    this.funcs = {}
  }

  acquire(name: string, ret: koffi.IKoffiCType, args: koffi.IKoffiCType[]) {
    if (this.funcs[name]) {
      return this.funcs[name]
    } else {
      const f = this.lib.func(name, ret, args)
      this.funcs[name] = f
      return f
    }
  }
}

export let libFW: LibraryHolder
export let libTK: LibraryHolder

export function setup(path: string) {
  libFW = new LibraryHolder(loadLibrary(path, 'MaaFramework'))
  libTK = new LibraryHolder(loadLibrary(path, 'MaaToolkit'))
}
