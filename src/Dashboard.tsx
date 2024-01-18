import { useEffect } from "react";
import AccountsList from "./components/AccountsList";
import CreditCards from "./components/CreditCards";
import MainChart from "./components/MainChart";
import { getUserData } from "./services/userData.service";
import { UserData } from "./context/types";
import { useUserContext } from "./context/GlobalState";
import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";

function Dashboard() {
  const { userData, setUserData } = useUserContext();

  useEffect(() => {
    setUserData(getUserData() as UserData);
  }, [setUserData]);

  if (!userData?.bankAccounts && !userData?.creditCards) {
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
    );
  } else {
    return (
      <Flex h="100vh" minW="100%" flexDir="row" overflow="hidden" maxW="2000px">
        <Flex
          w="10%"
          p="3%"
          pb={2}
          flexDir="column"
          alignItems="center"
          backgroundColor="#020202"
          color="#fff"
        >
          <Sidebar />
        </Flex>
        <Flex
          w="70%"
          p="3%"
          flexDir="column"
          overflow="auto"
          minH="100vh"
        >
          <Text fontWeight="bold" fontSize={45}>Financial Health</Text>
          <Divider mb={5} mt={1} />
          <MainChart userData={userData}/>
          <Divider my={5} />
          <AccountsList bankAccounts={userData.bankAccounts} />
          <Divider my={5} />
          <CreditCards creditCards={userData.creditCards} />
        </Flex>
        <Flex
          w="20%"
          bgColor="#F5F5F5"
          p="3%"
          flexDir="column"
          overflow="auto"
        ></Flex>
      </Flex>
    );
  }
}

export default Dashboard;
