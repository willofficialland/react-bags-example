import { CreditCard } from "../context/types";
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
  creditCards: Array<CreditCard>;
}

function CreditCards({ creditCards }: Props) {
  return (
    <Box>
      <Text m={0} mb={2} ms={1} w="100%" textAlign="center" fontWeight="bold">
        Credit Cards
      </Text>
      <TableContainer borderRadius={10}  boxShadow={"-webkit-box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51);-moz-box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51); box-shadow: 9px 8px 28px -12px rgba(0,0,0,0.51);"}>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th fontSize={14}>Card Name</Th>
              <Th fontSize={14}>Credit Limit</Th>
              <Th fontSize={14}>Current Balance</Th>
              <Th fontSize={14}>Interest Rate</Th>
              <Th fontSize={14}>Minimum Payment</Th>
              <Th fontSize={14}>Payment Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {creditCards.map((creditCard, index) => {
              return (
                <Tr key={index}>
                  <Td>{creditCard.cardName}</Td>
                  <Td>{creditCard.creditLimit} USD</Td>
                  <Td>{creditCard.currentBalance} USD</Td>
                  <Td>{creditCard.interestRate}%</Td>
                  <Td>{creditCard.minimumPayment} USD</Td>
                  <Td>{creditCard.paymentDate}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CreditCards;
