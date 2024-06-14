import koffi from 'koffi'

import {
  Bool,
  ImageBufferHandle,
  ImageListBufferHandle,
  Size,
  StringBufferHandle,
  StringListBufferHandle,
  StringView
} from '../def'
import { libFW } from '../lib'

export function createStringBuffer(): StringBufferHandle {
  const f = libFW.acquire('MaaCreateStringBuffer', StringBufferHandle, [])
  return f()
}

export function destroyStringBuffer(handle: StringBufferHandle): void {
  const f = libFW.acquire('MaaDestroyStringBuffer', koffi.types.void, [StringBufferHandle])
  f(handle)
}

export function isStringEmpty(handle: StringBufferHandle): Bool {
  const f = libFW.acquire('MaaIsStringEmpty', Bool, [StringBufferHandle])
  return f(handle)
}

export function clearString(handle: StringBufferHandle): Bool {
  const f = libFW.acquire('MaaClearString', Bool, [StringBufferHandle])
  return f(handle)
}

export function getString(handle: StringBufferHandle): StringView {
  const f = libFW.acquire('MaaGetString', koffi.pointer(koffi.types.void), [StringBufferHandle])
  const fs = libFW.acquire('MaaGetStringSize', Size, [StringBufferHandle])
  const ptr = f(handle)
  const len = fs(handle)
  return koffi.decode(ptr, koffi.array(koffi.types.char, len, 'String'))
}

export function setString(handle: StringBufferHandle, str: StringView): Bool {
  const f = libFW.acquire('MaaSetStringEx', Bool, [StringBufferHandle, StringView, Size])
  return f(handle, str, Buffer.byteLength(str, 'utf8'))
}

export function createStringListBuffer(): StringListBufferHandle {
  const f = libFW.acquire('MaaCreateStringListBuffer', StringListBufferHandle, [])
  return f()
}

export function destroyStringListBuffer(handle: StringListBufferHandle): void {
  const f = libFW.acquire('MaaDestroyStringListBuffer', koffi.types.void, [StringListBufferHandle])
  f(handle)
}

export function isStringListEmpty(handle: StringListBufferHandle): Bool {
  const f = libFW.acquire('MaaIsStringListEmpty', Bool, [StringListBufferHandle])
  return f(handle)
}

export function clearStringList(handle: StringListBufferHandle): Bool {
  const f = libFW.acquire('MaaClearStringList', Bool, [StringListBufferHandle])
  return f(handle)
}

export function getStringListSize(handle: StringListBufferHandle): Size {
  const f = libFW.acquire('MaaGetStringListSize', Size, [StringListBufferHandle])
  return f(handle)
}

export function getStringListAt(handle: StringListBufferHandle, index: Size): StringBufferHandle {
  const f = libFW.acquire('MaaGetStringListAt', StringBufferHandle, [StringListBufferHandle, Size])
  return f(handle, index)
}

export function stringListAppend(handle: StringListBufferHandle, value: StringBufferHandle): Bool {
  const f = libFW.acquire('MaaStringListAppend', Bool, [StringListBufferHandle, StringBufferHandle])
  return f(handle, value)
}

export function stringListRemove(handle: StringListBufferHandle, index: Size): Bool {
  const f = libFW.acquire('MaaStringListRemove', Bool, [StringListBufferHandle, Size])
  return f(handle, index)
}

export function createImageBuffer(): ImageBufferHandle {
  const f = libFW.acquire('MaaCreateImageBuffer', ImageBufferHandle, [])
  return f()
}

export function destroyImageBuffer(handle: ImageBufferHandle): void {
  const f = libFW.acquire('MaaDestroyImageBuffer', koffi.types.void, [ImageBufferHandle])
  f(handle)
}

export function isImageEmpty(handle: ImageBufferHandle): Bool {
  const f = libFW.acquire('MaaIsImageEmpty', Bool, [ImageBufferHandle])
  return f(handle)
}

export function clearImage(handle: ImageBufferHandle): Bool {
  const f = libFW.acquire('MaaClearImage', Bool, [ImageBufferHandle])
  return f(handle)
}

export function getImageWidth(handle: ImageBufferHandle): number {
  const f = libFW.acquire('MaaGetImageWidth', koffi.types.int32_t, [ImageBufferHandle])
  return f(handle)
}

export function getImageHeight(handle: ImageBufferHandle): number {
  const f = libFW.acquire('MaaGetImageHeight', koffi.types.int32_t, [ImageBufferHandle])
  return f(handle)
}

export function getImageType(handle: ImageBufferHandle): number {
  const f = libFW.acquire('MaaGetImageType', koffi.types.int32_t, [ImageBufferHandle])
  return f(handle)
}

export function getImageEncoded(handle: ImageBufferHandle): Buffer {
  const f = libFW.acquire('MaaGetImageEncoded', koffi.pointer(koffi.types.void), [
    ImageBufferHandle
  ])
  const fs = libFW.acquire('MaaGetImageEncodedSize', Size, [ImageBufferHandle])
  const ptr = f(handle)
  const len = fs(handle)
  return Buffer.from(
    koffi.decode(ptr, koffi.array(koffi.types.uint8_t, len, 'Typed')) as Uint8Array
  )
}

export function setImageEncoded(handle: ImageBufferHandle, buffer: Buffer): Bool {
  const f = libFW.acquire('MaaSetImageEncoded', Bool, [
    ImageBufferHandle,
    koffi.pointer(koffi.types.uint8_t),
    Size
  ])
  return f(handle, buffer, buffer.byteLength)
}

export function createImageListBuffer(): ImageListBufferHandle {
  const f = libFW.acquire('MaaCreateImageListBuffer', ImageListBufferHandle, [])
  return f()
}

export function destroyImageListBuffer(handle: ImageListBufferHandle): void {
  const f = libFW.acquire('MaaDestroyImageListBuffer', koffi.types.void, [ImageListBufferHandle])
  f(handle)
}

export function isImageListEmpty(handle: ImageListBufferHandle): Bool {
  const f = libFW.acquire('MaaIsImageListEmpty', Bool, [ImageListBufferHandle])
  return f(handle)
}

export function clearImageList(handle: ImageListBufferHandle): Bool {
  const f = libFW.acquire('MaaClearImageList', Bool, [ImageListBufferHandle])
  return f(handle)
}

export function getImageListSize(handle: ImageListBufferHandle): Size {
  const f = libFW.acquire('MaaGetImageListSize', Size, [ImageListBufferHandle])
  return f(handle)
}

export function getImageListAt(handle: ImageListBufferHandle, index: Size): ImageBufferHandle {
  const f = libFW.acquire('MaaGetImageListAt', ImageBufferHandle, [ImageListBufferHandle, Size])
  return f(handle, index)
}

export function imageListAppend(handle: ImageListBufferHandle, value: ImageBufferHandle): Bool {
  const f = libFW.acquire('MaaImageListAppend', Bool, [ImageListBufferHandle, ImageBufferHandle])
  return f(handle, value)
}

export function imageListRemove(handle: ImageListBufferHandle, index: Size): Bool {
  const f = libFW.acquire('MaaImageListRemove', Bool, [ImageListBufferHandle, Size])
  return f(handle, index)
}
