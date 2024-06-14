import * as fwapi from '../api'
import {
  ImageBufferHandle,
  ImageListBufferHandle,
  StringBufferHandle,
  StringListBufferHandle
} from '../def'
import { DisposeHolder, holdDispose } from './dispose'

export class String {
  handleHolder: DisposeHolder<StringBufferHandle>

  get handle() {
    return this.handleHolder.handle
  }

  constructor(handle: StringBufferHandle | null = null) {
    if (handle) {
      this.handleHolder = holdDispose(handle)
    } else {
      this.handleHolder = holdDispose(fwapi.createStringBuffer(), fwapi.destroyStringBuffer)
    }
  }

  get empty(): boolean {
    return fwapi.isStringEmpty(this.handle) > 0
  }

  clear(): boolean {
    return fwapi.clearString(this.handle) > 0
  }

  set value(v: string) {
    fwapi.setString(this.handle, v)
  }

  get value(): string {
    return fwapi.getString(this.handle)
  }
}

export class StringList implements Iterable<String> {
  handleHolder: DisposeHolder<StringListBufferHandle>

  get handle() {
    return this.handleHolder.handle
  }

  constructor(handle: StringListBufferHandle | null = null) {
    if (handle) {
      this.handleHolder = holdDispose(handle)
    } else {
      this.handleHolder = holdDispose(fwapi.createStringListBuffer(), fwapi.destroyStringListBuffer)
    }
  }

  get empty(): boolean {
    return fwapi.isStringListEmpty(this.handle) > 0
  }

  clear(): boolean {
    return fwapi.clearStringList(this.handle) > 0
  }

  get size() {
    return fwapi.getStringListSize(this.handle)
  }

  at(index: number): String {
    return new String(fwapi.getStringListAt(this.handle, index))
  }

  append(value: string | String): boolean {
    if (typeof value === 'string') {
      const str = new String()
      str.value = value
      value = str
    }
    return fwapi.stringListAppend(this.handle, value.handle) > 0
  }

  remove(index: number): boolean {
    return fwapi.stringListRemove(this.handle, index) > 0
  }

  [Symbol.iterator](): Iterator<String> {
    const list = this
    let index = -1
    return {
      next() {
        index = index + 1
        if (index == list.size) {
          return {
            done: true,
            value: undefined
          }
        } else {
          return {
            done: false,
            value: list.at(index)
          }
        }
      }
    }
  }
}

export class Image {
  handleHolder: DisposeHolder<ImageBufferHandle>

  get handle() {
    return this.handleHolder.handle
  }

  constructor(handle: ImageBufferHandle | null = null) {
    if (handle) {
      this.handleHolder = holdDispose(handle)
    } else {
      this.handleHolder = holdDispose(fwapi.createImageBuffer(), fwapi.destroyImageBuffer)
    }
  }

  get empty(): boolean {
    return fwapi.isImageEmpty(this.handle) > 0
  }

  clear(): boolean {
    return fwapi.clearImage(this.handle) > 0
  }

  set encoded(v: Buffer) {
    fwapi.setImageEncoded(this.handle, v)
  }

  get encoded(): Buffer {
    return fwapi.getImageEncoded(this.handle)
  }
}

export class ImageList implements Iterable<Image> {
  handleHolder: DisposeHolder<ImageListBufferHandle>

  get handle() {
    return this.handleHolder.handle
  }

  constructor(handle: ImageListBufferHandle | null = null) {
    if (handle) {
      this.handleHolder = holdDispose(handle)
    } else {
      this.handleHolder = holdDispose(fwapi.createImageListBuffer(), fwapi.destroyImageListBuffer)
    }
  }

  get empty(): boolean {
    return fwapi.isImageListEmpty(this.handle) > 0
  }

  clear(): boolean {
    return fwapi.clearImageList(this.handle) > 0
  }

  get size() {
    return fwapi.getImageListSize(this.handle)
  }

  at(index: number): Image {
    return new Image(fwapi.getImageListAt(this.handle, index))
  }

  append(value: Buffer | Image): boolean {
    if (value instanceof Buffer) {
      const str = new Image()
      str.encoded = value
      value = str
    }
    return fwapi.imageListAppend(this.handle, value.handle) > 0
  }

  remove(index: number): boolean {
    return fwapi.imageListRemove(this.handle, index) > 0
  }

  [Symbol.iterator](): Iterator<Image> {
    const list = this
    let index = -1
    return {
      next() {
        index = index + 1
        if (index == list.size) {
          return {
            done: true,
            value: undefined
          }
        } else {
          return {
            done: false,
            value: list.at(index)
          }
        }
      }
    }
  }
}
