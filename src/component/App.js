import "./App.css";
import Header from "./Header";
import { v4 } from "uuid";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  route,
} from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: v4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contacts) => {
      return contacts.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactid={removeContactHandler}
              />
            )}
          />
          <Route
            path="/add"
            Component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />

          {/* <AddContact addContactHandler={addContactHandler} />
          <ContactList
            contacts={contacts}
            getContactid={removeContactHandler}
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
