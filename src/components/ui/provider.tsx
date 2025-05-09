"use client"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"

// Optionally, you can extend the theme if needed
const theme = extendTheme({
  // Customize your theme here
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
