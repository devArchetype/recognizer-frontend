import 'styled-components'
import { LightTheme } from '../styles/themes/light'

export type DefaultThemeSchema = {
  [Key in keyof typeof LightTheme]: typeof LightTheme[Key]
}

declare module 'styled-components' {
  export interface DefaultTheme extends DefaultThemeSchema {}
}
