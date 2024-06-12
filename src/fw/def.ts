import koffi from 'koffi'

export const StringBufferHandle = koffi.pointer('MaaStringBufferHandle', koffi.opaque())
export type StringBufferHandle = { __brand: 'StringBufferHandle' }
export const ImageBufferHandle = koffi.pointer('MaaImageBufferHandle', koffi.opaque())
export type ImageBufferHandle = { __brand: 'ImageBufferHandle' }
export const StringListBufferHandle = koffi.pointer('MaaStringListBufferHandle', koffi.opaque())
export type StringListBufferHandle = { __brand: 'StringListBufferHandle' }
export const ImageListBufferHandle = koffi.pointer('MaaImageListBufferHandle', koffi.opaque())
export type ImageListBufferHandle = { __brand: 'ImageListBufferHandle' }

export const ResourceHandle = koffi.pointer('MaaResourceHandle', koffi.opaque())
export type ResourceHandle = { __brand: 'ResourceHandle' }
export const ControllerHandle = koffi.pointer('MaaControllerHandle', koffi.opaque())
export type ControllerHandle = { __brand: 'ControllerHandle' }
export const InstanceHandle = koffi.pointer('MaaInstanceHandle', koffi.opaque())
export type InstanceHandle = { __brand: 'InstanceHandle' }

export const Bool = koffi.alias('MaaBool', koffi.types.uint8_t)
export type Bool = number
export const Size = koffi.alias('MaaSize', koffi.types.uint64_t)
export type Size = number | bigint
export const NullSize = (1n << 64n) - 1n

export const StringView = koffi.alias('MaaStringView', koffi.types.string)
export type StringView = string

export const Status = koffi.alias('MaaStatus', koffi.types.int32_t)
export type Status = number

export const enum StatusEnum {
  Invalid = 0,
  Pending = 1000,
  Running = 2000,
  Success = 3000,
  Failed = 4000
}

export const LoggingLevel = koffi.alias('MaaLoggingLevel', koffi.types.int32_t)
export type LoggingLevel = number

export const enum LoggingLevelEnum {
  Off = 0,
  Fatal = 1,
  Error = 2,
  Warn = 3,
  Info = 4,
  Debug = 5,
  Trace = 6,
  All = 7
}

export const Id = koffi.alias('MaaId', koffi.types.int64_t)
export type Id = number | bigint
export const CtrlId = koffi.alias('MaaCtrlId', Id)
export type CtrlId = Id
export const ResId = koffi.alias('MaaResId', Id)
export type ResId = Id
export const TaskId = koffi.alias('MaaTaskId', Id)
export type TaskId = Id
export const RecoId = koffi.alias('MaaRecoId', Id)
export type RecoId = Id
export const NodeId = koffi.alias('MaaNodeId', Id)
export type NodeId = Id
export const InvalidId = 0

export const Option = koffi.alias('MaaOption', koffi.types.int32_t)
export type Option = number
export const OptionValue = koffi.alias('MaaOptionValue', koffi.pointer(koffi.types.void))
export type OptionValue = number | string | boolean
export const OptionValueSize = koffi.alias('MaaOptionValueSize', koffi.types.uint64_t)

export const GlobalOption = koffi.alias('MaaGlobalOption', Option)
export type GlobalOption = Option

export const enum GlobalOptionEnum {
  Invalid = 0,
  LogDir = 1,
  SaveDraw = 2,
  Recording = 3,
  StdoutLevel = 4,
  ShowHitDraw = 5,
  DebugMessage = 6
}

export const ResOption = koffi.alias('MaaResOption', Option)
export type ResOption = Option

export const enum ResOptionEnum {
  Invalid = 0
}

export const CtrlOption = koffi.alias('MaaCtrlOption', Option)
export type CtrlOption = Option

export const enum CtrlOptionEnum {
  Invalid = 0,
  ScreenshotTargetLongSide = 1,
  ScreenshotTargetShortSide = 1,
  DefaultAppPackageEntry = 3,
  DefaultAppPackage = 4,
  Recording = 5
}

export const InstOption = koffi.alias('MaaInstOption', Option)
export type InstOption = Option

export const enum InstOptionEnum {
  Invalid = 0
}

export const TaskParam_Empty = '{}'

export const AdbControllerType = koffi.alias('MaaAdbControllerType', koffi.types.int32_t)
export type AdbControllerType = number

export const enum AdbControllerTypeEnum {
  Invalid = 0,

  Touch_Adb = 1,
  Touch_MiniTouch = 2,
  Touch_MaaTouch = 3,
  Touch_EmulatorExtras = 4,
  Touch_Mask = 0xff,
  Touch_AutoDetect = Touch_Mask - 1,

  Key_Adb = 1 << 8,
  Key_MaaTouch = 2 << 8,
  Key_EmulatorExtras = 3 << 8,
  Key_Mask = 0xff00,
  Key_AutoDetect = Key_Mask - 1,

  Input_Preset_Adb = Touch_Adb | Key_Adb,
  Input_Preset_Minitouch = Touch_MiniTouch | Key_Adb,
  Input_Preset_MaaTouch = Touch_MaaTouch | Key_MaaTouch,
  Input_Preset_EmulatorExtras = Touch_EmulatorExtras | Key_EmulatorExtras,
  Input_Preset_AutoDetect = Touch_AutoDetect | Key_AutoDetect,

  Screencap_RawByNetcat = 2 << 16,
  Screencap_RawWithGzip = 3 << 16,
  Screencap_Encode = 4 << 16,
  Screencap_EncodeToFile = 5 << 16,
  Screencap_MinicapDirect = 6 << 16,
  Screencap_MinicapStream = 7 << 16,
  Screencap_EmulatorExtras = 8 << 16,
  Screencap_Mask = 0xff0000,
  Screencap_FastestLosslessWay = Screencap_Mask - (2 << 16),
  Screencap_FastestWay = Screencap_Mask - (1 << 16)
}

export const DbgControllerType = koffi.alias('MaaDbgControllerType', koffi.types.int32_t)
export type DbgControllerType = number

export const enum DbgControllerTypeEnum {
  Invalid = 0,

  CarouselImage = 1,
  ReplayRecording = 2
}

export const ThriftControllerType = koffi.alias('MaaThriftControllerType', koffi.types.int32_t)
export type ThriftControllerType = number

export const enum ThriftControllerTypeEnum {
  Invalid = 0,

  Socket = 1,
  UnixDomainSocket = 2
}

export const Win32ControllerType = koffi.alias('MaaWin32ControllerType', koffi.types.int32_t)
export type Win32ControllerType = number

export const enum Win32ControllerTypeEnum {
  Invalid = 0,

  Touch_SendMessage = 1,
  Touch_Seize = 2,
  Touch_Mask = 0xff,

  Key_SendMessage = 1 << 8,
  Key_Seize = 2 << 8,
  Key_Mask = 0xff00,

  Screencap_GDI = 1 << 16,
  Screencap_DXGI_DesktopDup = 2 << 16,
  // Screencap_DXGI_BackBuffer = 3 << 16,
  Screencap_DXGI_FramePool = 4 << 16,
  Screencap_Mask = 0xff0000
}

export const Win32Hwnd = koffi.alias('MaaWin32Hwnd', koffi.pointer(koffi.types.void))
export type Win32Hwnd = { __brand: 'Win32Hwnd' }

export const TransparentArg = koffi.alias('MaaTransparentArg', koffi.pointer(koffi.types.void))
export const CallbackTransparentArg = koffi.alias('MaaCallbackTransparentArg', TransparentArg)

const APICallbackProto = koffi.proto('MaaAPICallbackProto', koffi.types.void, [
  StringView,
  StringView,
  TransparentArg
])

export const APICallback = koffi.pointer(APICallbackProto)
export type APICallback = (msg: StringView, details_json: StringView) => void
export const ResourceCallback = koffi.pointer(APICallback)
export type ResourceCallback = APICallback
export const ControllerCallback = koffi.pointer(APICallback)
export type ControllerCallback = APICallback
export const InstanceCallback = koffi.pointer(APICallback)
export type InstanceCallback = APICallback

// custom controller
// recognizer, action
// sync context

export const Rect = koffi.struct('MaaRect', {
  x: koffi.types.int32_t,
  y: koffi.types.int32_t,
  width: koffi.types.int32_t,
  height: koffi.types.int32_t
})
export type Rect = {
  x: number
  y: number
  width: number
  height: number
}
export const RectHandle = koffi.pointer('MaaRectHandle', koffi.pointer(Rect))
export type RectHandle = { __brand: 'RectHandle' }
