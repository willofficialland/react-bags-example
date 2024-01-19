export const getContactsData = async () => {
  const contacts = (await fetch("https://jsonplaceholder.typicode.com/users")).json();
  return contacts
};
