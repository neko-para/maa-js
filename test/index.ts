import { setGlobalOption, setup, version } from '..'
import { GlobalOptionEnum } from '../src/fw/def'

setup('./maa')

console.log(setGlobalOption(GlobalOptionEnum.LogDir, './log'))
console.log(version())
