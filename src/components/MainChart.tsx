import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import { UserData } from "../context/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts";

interface Props {
  userData: UserData;
}

function MainChart({ userData }: Props) {
  const totalBalance = userData.bankAccounts.reduce(
    (acc, bank) => acc + bank.currentBalance,
    0
  );

  const bankAccountsChartData = userData.bankAccounts.map((bank) => ({
    bankName: bank.bankName,
    value: Number(((bank.currentBalance / totalBalance) * 100).toFixed(2)),
    label: `${((bank.currentBalance / totalBalance) * 100).toFixed(2)}%`,
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];


  const creditCardsChartsData = userData.creditCards.map((card) => ({
    cardName: card.cardName,
    creditLimit: card.creditLimit,
    currentBalance: card.currentBalance,
  }));

  return (
    <>
      <Flex>
        <Box w={"50%"} p={2} maxH={"300px"}>
          <Text textAlign="center" fontWeight="bold" fontSize={12}>
            Balance Distribution by Bank
          </Text>
          <PieChart width={400} height={300}>
            <Pie
              data={bankAccountsChartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label={(entry) => entry.label}
            >
              {bankAccountsChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              payload={bankAccountsChartData.map((entry, index) => ({
                value: entry.bankName,
                type: "circle",
                color: COLORS[index % COLORS.length],
              }))}
            />
          </PieChart>
        </Box>
        <Box w={"50%"} p={2}>
          <h2 style={{ textAlign: "center" }}>Credit Card Chart</h2>
          <BarChart
            width={500}
            height={300}
            data={creditCardsChartsData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cardName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="creditLimit" fill="#8884d8" name="Credit Limit" />
            <Bar
              dataKey="currentBalance"
              fill="#82ca9d"
              name="Current Balance"
            />
          </BarChart>
        </Box>
      </Flex>
    </>
  );
}

export default MainChart;
