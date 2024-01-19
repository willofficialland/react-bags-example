import React from "react";
import Header from "../components/Header";
import ContactsList from "../components/ContactsList";

function Contacts() {
  return (
    <>
      <Header title="Contacts" />
      <ContactsList />
    </>
  );
}

export default Contacts;
