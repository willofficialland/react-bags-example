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

export type Contact = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string,
    lng: string,
  };
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};
