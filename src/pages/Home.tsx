import { useEffect } from "react";
import AccountsList from "../components/AccountsList";
import CreditCards from "../components/CreditCards";
import MainChart from "../components/MainChart/Index";
import { getUserData } from "../services/userData.service";
import { UserData } from "../context/types";
import { useUserContext } from "../context/GlobalState";
import { AbsoluteCenter, Box, Divider, Spinner } from "@chakra-ui/react";
import Header from "../components/Header";

function Home() {
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
      <>
        <Header title="Home" />
        <MainChart userData={userData} />
        <Divider my={5} />
        <AccountsList bankAccounts={userData.bankAccounts} />
        <Divider my={5} />
        <CreditCards creditCards={userData.creditCards} />
      </>
    );
  }
}

export default Home;
