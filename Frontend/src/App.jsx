import React from "react"
import { Button, VStack, Heading, useColorMode, IconButton } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack spacing={6} p={8}>
      <Heading>Welcome to Chakra UI 🚀</Heading>

      <Button colorScheme="teal">Click me</Button>

      <IconButton
        aria-label="Toggle Dark Mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </VStack>
  )
}

export default App
