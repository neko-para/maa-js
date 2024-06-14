import koffi from 'koffi'

import {
  Bool,
  GlobalOption,
  GlobalOptionEnum,
  LoggingLevelEnum,
  OptionValue,
  OptionValueSize,
  StringView
} from '../def'
import { libFW } from '../lib'

export { GlobalOptionEnum, LoggingLevelEnum }

export function version(): StringView {
  const f = libFW.acquire('MaaVersion', StringView, [])
  return f()
}

export function setGlobalOption(key: GlobalOption, value: OptionValue): Bool {
  const f = libFW.acquire('MaaSetGlobalOption', Bool, [GlobalOption, OptionValue, OptionValueSize])
  switch (key) {
    case GlobalOptionEnum.LogDir:
      if (typeof value === 'string') {
        return f(key, value, value.length)
      } else {
        return 0
      }
    case GlobalOptionEnum.SaveDraw:
    case GlobalOptionEnum.Recording:
    case GlobalOptionEnum.ShowHitDraw:
    case GlobalOptionEnum.DebugMessage:
      if (typeof value === 'boolean') {
        return f(key, [value], 1)
      } else {
        return 0
      }
    case GlobalOptionEnum.StdoutLevel:
      if (typeof value === 'number') {
        return f(key, [value], 4)
      } else {
        return 0
      }
  }
  return 0
}
