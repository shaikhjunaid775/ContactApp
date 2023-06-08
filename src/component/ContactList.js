import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactid(id);
  };

  
  const renderContacts = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
      
    );
  });
  return (
    <div className="ui main my-4">
      <div className="ui celled list my-4">
        <h2>
          Contact List 
        </h2>
        <div className="">

          <Link to="/add">
            <button className="ui button blue right">Add Contact </button>
          </Link>
        </div>
        <h1>{renderContacts}</h1>
      </div>
    </div>
  );
};

export default ContactList;
