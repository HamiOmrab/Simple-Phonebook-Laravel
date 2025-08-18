import React, { useEffect, useState } from "react";

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/contacts")
            .then(response => response.json())
            .then(data => {
              console.log(data);
              
                setContacts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading contacts...</p>;
    }

    if (contacts.length === 0) {
        return <p>No contacts found. Your database is empty.</p>;
    }

    return (
        <table border="1" cellPadding="5">
            <thead>
                <tr>
                    <th>N#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Number</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={contact.id}>
                        <td>{index + 1}</td>
                        <td>{contact.firstname}</td>
                        <td>{contact.lastname}</td>
                        <td>{contact.phonenumber}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;