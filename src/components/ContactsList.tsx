import { BankAccount, Contact } from "../context/types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Text,
} from "@chakra-ui/react";
import { getContactsData } from "../services/contacts.service";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";

function ContactsList() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["Contacts"],
    queryFn: getContactsData,
  });
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <Box>
        <TableContainer
          borderRadius={10}
          my={3}
          boxShadow={
            "-webkit-box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51);-moz-box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51); box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51);"
          }
        >
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th fontSize={14}>Username</Th>
                <Th fontSize={14}>Full name</Th>
                <Th fontSize={14}>Email</Th>
                <Th fontSize={14}>Phone</Th>
                <Th fontSize={14}>Company</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!isError ? (
                data.map((contact: Contact) => {
                  return (
                    <Tr key={contact.id}>
                      <Td>{contact.username}</Td>
                      <Td>{contact.name}</Td>
                      <Td>{contact.email}</Td>
                      <Td>{contact.phone}</Td>
                      <Td>{contact.company.name}</Td>
                    </Tr>
                  );
                })
              ) : (
                <Text>Error fetching the data</Text>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
  }
}

export default ContactsList;
