"use client"

import type { IconButtonProps } from "@chakra-ui/react"
import { IconButton, Skeleton, chakra } from "@chakra-ui/react"
import { ThemeProvider, useTheme } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export interface ColorModeProviderProps extends ThemeProviderProps { }

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return {
    colorMode: (resolvedTheme as ColorMode) ?? "light",
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

// Simplified to avoid too-complex union
type SimplifiedIconButtonProps = {
  variant?: string
  size?: string
  icon?: React.ReactElement
  onClick?: () => void
  ref?: React.Ref<HTMLButtonElement>
  className?: string
}

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  SimplifiedIconButtonProps
>(function ColorModeButton({ ...props }, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <React.Suspense fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        icon={<ColorModeIcon />}
        {...props}
      />
    </React.Suspense>
  )
})

const ChakraSpan = chakra("span")

export const LightMode = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<typeof ChakraSpan>
>(function LightMode(props, ref) {
  return (
    <ChakraSpan
      color="fg"
      display="contents"
      className="chakra-theme light"
      data-color-mode="light"
      ref={ref}
      {...props}
    />
  )
})

export const DarkMode = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<typeof ChakraSpan>
>(function DarkMode(props, ref) {
  return (
    <ChakraSpan
      color="fg"
      display="contents"
      className="chakra-theme dark"
      data-color-mode="dark"
      ref={ref}
      {...props}
    />
  )
})
