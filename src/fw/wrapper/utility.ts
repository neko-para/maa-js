import * as fwapi from '../api'

export function version(): string {
  return fwapi.version()
}

export function setLogDir(dir: string): boolean {
  return fwapi.setGlobalOption(fwapi.GlobalOptionEnum.LogDir, dir) > 0
}

export function setSaveDraw(saveDraw: boolean): boolean {
  return fwapi.setGlobalOption(fwapi.GlobalOptionEnum.SaveDraw, saveDraw) > 0
}

export function setRecording(recording: boolean): boolean {
  return fwapi.setGlobalOption(fwapi.GlobalOptionEnum.Recording, recording) > 0
}

export function setStdoutLevel(stdoutLevel: fwapi.LoggingLevelEnum): boolean {
  return fwapi.setGlobalOption(fwapi.GlobalOptionEnum.StdoutLevel, stdoutLevel) > 0
}

export function setShowHitDraw(showHitDraw: boolean): boolean {
  return fwapi.setGlobalOption(fwapi.GlobalOptionEnum.ShowHitDraw, showHitDraw) > 0
}

export function setDebugMessage(debugMessage: boolean): boolean {
  return fwapi.setGlobalOption(fwapi.GlobalOptionEnum.DebugMessage, debugMessage) > 0
}
