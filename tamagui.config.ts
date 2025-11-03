import { config as configBase } from '@tamagui/config-base'
import { createTamagui } from 'tamagui'

const config = createTamagui(configBase)

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
