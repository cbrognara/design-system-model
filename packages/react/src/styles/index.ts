import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from '@ds-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const { 
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config
 } = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'space',
        width: 'space'
    },
    theme: {
        colors: colors,
        fonts: fonts,
        fontWeights: fontWeights,
        fontSizes: fontSizes,
        space: space,
        lineHeights: lineHeights,
        radii: radii
    },
})