import { AdbControllerType, Bool, Size, StringView } from '../def'
import { libTK } from '../lib'

export function postFindDevice(): Bool {
  const f = libTK.acquire('MaaToolkitPostFindDevice', Bool, [])
  return f()
}

export function postFindDeviceWithAdb(adb: StringView): Bool {
  const f = libTK.acquire('MaaToolkitPostFindDeviceWithAdb', Bool, [StringView])
  return f(adb)
}

export function isFindDeviceCompleted(): Bool {
  const f = libTK.acquire('MaaToolkitIsFindDeviceCompleted', Bool, [])
  return f()
}

export async function waitForFindDeviceToComplete(): Promise<Size> {
  const f = libTK.acquire('MaaToolkitWaitForFindDeviceToComplete', Size, [])
  return new Promise<Size>(resolve => {
    f.async((err: unknown, res: Size) => {
      resolve(res)
    })
  })
}

export function getDeviceCount(): Size {
  const f = libTK.acquire('MaaToolkitGetDeviceCount', Size, [])
  return f()
}

export function getDeviceName(index: Size): StringView {
  const f = libTK.acquire('MaaToolkitGetDeviceName', StringView, [Size])
  return f(index)
}

export function getDeviceAdbPath(index: Size): StringView {
  const f = libTK.acquire('MaaToolkitGetDeviceAdbPath', StringView, [Size])
  return f(index)
}

export function getDeviceAdbSerial(index: Size): StringView {
  const f = libTK.acquire('MaaToolkitGetDeviceAdbSerial', StringView, [Size])
  return f(index)
}

export function getDeviceAdbControllerType(index: Size): AdbControllerType {
  const f = libTK.acquire('MaaToolkitGetDeviceAdbControllerType', AdbControllerType, [Size])
  return f(index)
}

export function getDeviceAdbConfig(index: Size): StringView {
  const f = libTK.acquire('MaaToolkitGetDeviceAdbConfig', StringView, [Size])
  return f(index)
}
