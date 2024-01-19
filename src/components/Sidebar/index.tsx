import React from "react";
import { Box, VStack, HStack, Spacer, Button, Divider } from "@chakra-ui/react";
import { FiHome, FiSettings } from "react-icons/fi";
import { MdContacts } from "react-icons/md";
import { RiShutDownLine } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import "./index.css";

function Sidebar() {
  return (
    <Box
      as="nav"
      p={0}
      h="100%"
      w="100%"
      color="white"
      boxShadow="lg"
      style={{ position: "relative" }}
    >
      <Box mb="4">
        <NavLink to="/">
          <img
            className="img-logo"
            src="https://www.um.es/documents/1073494/42130150/CorazonUMU-negativo.png/b080cb25-eefe-2dfb-ac43-1e6c2a02401d?t=1693480799965&download=true"
            alt=""
          />
        </NavLink>
      </Box>
      <Divider mt={5} />
      <VStack align="start" spacing="4" pt={3} w="100%">
        <HStack w="100%" className="sidebar-link">
          <NavLink to="/">
            <Button
              w="100%"
              leftIcon={<FiHome />}
              colorScheme="white"
              variant="ghost"
              _hover={{ bg: "gray.600" }}
            >
              <p className="button-text-sidebar">Home</p>
            </Button>
          </NavLink>
        </HStack>
        <HStack w="100%" className="sidebar-link">
          <NavLink to="/contacts">
            <Button
              w="100%"
              leftIcon={<MdContacts />}
              colorScheme="white"
              variant="ghost"
              _hover={{ bg: "gray.600" }}
            >
              <p className="button-text-sidebar">Contacts</p>
            </Button>
          </NavLink>
        </HStack>
        <HStack w="100%" className="sidebar-link">
          <NavLink to="/settings">
            <Button
              w="100%"
              leftIcon={<FiSettings />}
              colorScheme="white"
              variant="ghost"
              _hover={{ bg: "gray.600" }}
            >
              <p className="button-text-sidebar">Settings</p>
            </Button>
          </NavLink>
        </HStack>
      </VStack>
      <Spacer />

      <VStack align="start" spacing="4" pt={3} w="100%">
        <HStack w="100%" className="sidebar-link">
          <Button
            style={{ position: "absolute", bottom: 0, right: 0 }}
            w="100%"
            mt="4"
            colorScheme="red"
            variant="ghost"
            leftIcon={<RiShutDownLine />}
            _hover={{ bg: "red.600", color: "white" }}
            className="logout-button"
          >
            <p className="button-text-sidebar">Logout</p>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
}

export default Sidebar;
