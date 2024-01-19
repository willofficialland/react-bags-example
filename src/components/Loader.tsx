import { AbsoluteCenter, Box, Spinner } from '@chakra-ui/react'
import React from 'react'

function Loader() {
  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter axis="both">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </AbsoluteCenter>
    </Box>
  )
}

export default Loader