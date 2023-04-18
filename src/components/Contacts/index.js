import { useEffect, useState } from "react";

import Form from "./Form";
import List from "./List";
import {} from "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Özge",
      phone_number: "(212) 212 21 21",
    },
    {
      fullname: "Gorkem",
      phone_number: "(212) 323 23 23",
    },
    {
      fullname: "Baris",
      phone_number: "(313) 434 34 34",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
