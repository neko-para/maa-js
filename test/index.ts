import { fw, fwapi } from '..'
import { GlobalOptionEnum } from '../src/fw/def'

fw.setup('./maa')

console.log(fw.setLogDir('./log'))
console.log(fw.version())

async function main() {
  fwapi.postFindDevice()
  console.log(await fwapi.waitForFindDeviceToComplete())
}

main()
