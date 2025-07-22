import { presetDaisy } from '@ameinhardt/unocss-preset-daisy'
import presetWind4 from '@unocss/preset-wind4'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetDaisy(), presetWind4()],
})
