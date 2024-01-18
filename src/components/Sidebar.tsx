import React from "react";
import {
  Box,
  VStack,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { FiHome, FiBarChart2, FiSettings } from "react-icons/fi";

function Sidebar() {
  return (
    <Box as="nav" p={0} h="100%" color="white" boxShadow="lg" style={{position: "relative"}}>
      <Box mb="4">
        <img
          src="https://www.um.es/documents/1073494/42130150/CorazonUMU-negativo.png/b080cb25-eefe-2dfb-ac43-1e6c2a02401d?t=1693480799965&download=true"
          alt=""
        />
      </Box>
      <VStack align="start" spacing="4" w="100%">
        <HStack w="100%">
          <Button
            w="100%"
            leftIcon={<FiHome />}
            colorScheme="white"
            variant="ghost"
            _hover={{ bg: "gray.600" }}
          >
            Dashboard
          </Button>
        </HStack>
        <HStack w="100%">
          <Button
            w="100%"
            leftIcon={<FiBarChart2 />}
            colorScheme="white"
            variant="ghost"
            _hover={{ bg: "gray.600" }}
          >
            Charts
          </Button>
        </HStack>
        <HStack w="100%">
          <Button
            w="100%"
            leftIcon={<FiSettings />}
            colorScheme="white"
            variant="ghost"
            _hover={{ bg: "gray.600" }}
          >
            Settings
          </Button>
        </HStack>
      </VStack>
      <Spacer />
      <Button
        style={{ position: "absolute", bottom: 0, right: 0 }}
        w="100%"
        mt="4"
        colorScheme="red"
        variant="ghost"
        _hover={{ bg: "red.600", color: "white" }}
      >
        Log Out
      </Button>
    </Box>
  );
}

export default Sidebar;
