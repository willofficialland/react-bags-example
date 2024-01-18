import { BankAccount } from "../context/types";
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

interface Props {
  bankAccounts: Array<BankAccount>;
}

function AccountsList({ bankAccounts }: Props) {
  return (
    <Box>
      <Text m={0} mb={2} ms={1} w="100%" textAlign="center" fontWeight="bold">Bank Accounts</Text>
      <TableContainer borderRadius={10} my={3} boxShadow={"-webkit-box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51);-moz-box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51); box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51);"} >
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th fontSize={14}>Bank Name</Th>
              <Th fontSize={14}>Account</Th>
              <Th fontSize={14}>Current Balance</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bankAccounts.map((bankAccount, index) => {
              return (
                <Tr key={index}>
                  <Td>{bankAccount.bankName}</Td>
                  <Td>{bankAccount.account}</Td>
                  <Td>{bankAccount.currentBalance} USD</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AccountsList;
