import { Divider, Text } from "@chakra-ui/react";


interface Props {
    title: string;
  }


function Header({title}: Props) {
  return (
    <>
      <Text fontWeight="bold" fontSize={45}>
        {title}
      </Text>
      <Divider mb={5} mt={1} />
    </>
  );
}

export default Header;
