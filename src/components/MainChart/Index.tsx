import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { UserData } from "../../context/types";
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
  ResponsiveContainer,
} from "recharts";
import "./index.css";

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
      <Grid h="100%" gap={4} templateColumns="repeat(2, 1fr)">
        <GridItem className="chart-box" colSpan={{ base: 1, sm: 2, md: 1 }} p={2}>
          <Text textAlign="center" fontWeight="bold" fontSize={12}>
            Balance Distribution by Bank
          </Text>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart height={300}>
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
          </ResponsiveContainer>
        </GridItem>
        <GridItem className="chart-box" colSpan={{ base: 1, sm: 2, md: 1 }} p={2}>
          <Text textAlign="center" fontWeight="bold" fontSize={12}>
            Credit Card Chart
          </Text>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
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
          </ResponsiveContainer>
        </GridItem>
      </Grid>
    </>
  );
}

export default MainChart;
