// src/components/ui/toaster.tsx
"use client"

import { useToast, Button, Stack, Box, Text } from "@chakra-ui/react"
import { useEffect } from "react"

export const Toaster = () => {
  const toast = useToast()

  useEffect(() => {
    toast({
      title: "Welcome!",
      description: "This is a Chakra UI toast notification.",
      status: "info",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    })
  }, [toast])

  return (
    <Box p={4}>
      <Stack spacing={4}>
        <Button
          onClick={() =>
            toast({
              title: "Action triggered",
              description: "You clicked the button!",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "bottom-right",
            })
          }
        >
          Show Toast
        </Button>
      </Stack>
    </Box>
  )
}
