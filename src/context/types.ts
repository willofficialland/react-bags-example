export type UserData = {
    id: number;
    bankAccounts: Array<BankAccount>;
    creditCards: Array<CreditCard>;
  };

export type UserDataContextType = {
  userData: UserData,
  setUserData: (value: UserData) => void
};

export type CreditCard = {
  cardName: string;
  creditLimit: number;
  currentBalance: number;
  interestRate: number;
  minimumPayment: number;
  paymentDate: string;
};

export type BankAccount = {
    bankName: string;
    account: string;
    currentBalance: number;
  };
