import { Flex } from "@chakra-ui/react"
import Sidebar from "../Sidebar"
import { ReactNode } from "react";
import "./index.css";


interface Props {
    children: ReactNode;
  }

function LayOut({children}:Props) {
  return (
    <Flex h="100vh" minW="100%" flexDir="row" overflow="hidden" maxW="2000px">
      <Flex
        w={{base: "10%",sm: "1%", md: "10%"}}
        p="2%"
        pb={2}
        flexDir="column"
        alignItems="center"
        backgroundColor="#020202"
        color="#fff"
        className="sidebar-container"
      >
        <Sidebar />
      </Flex>
      <Flex
        w={{base: "100%",sm: "100%", md: "70%"}}
        p="2%"
        flexDir="column"
        overflow="auto"
        minH="100vh"
        className="main-content-layout"
      >
        {children}
      </Flex>
      <Flex
        w={{base: "0%",sm: "0%", md: "20%"}}
        bgColor="#F5F5F5"
        flexDir="column"
        overflow="auto"
      ></Flex>
    </Flex>
  )
}

export default LayOut