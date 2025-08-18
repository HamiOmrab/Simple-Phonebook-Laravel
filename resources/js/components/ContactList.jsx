import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this contact?")) return;

        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const response = await fetch(`/api/contacts/${id}`, {
            method: "DELETE",
            headers: { "X-CSRF-TOKEN": token }
        });

        if (response.ok) {
            setContacts((prev) => prev.filter(c => c.id !== id));
        }
    };

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
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => (
                    <tr key={contact.id}>
                        <td>{index + 1}</td>
                        <td>{contact.firstname}</td>
                        <td>{contact.lastname}</td>
                        <td>{contact.phonenumber}</td>
                        <td>
                            {/* Edit */}
                            <Link to={`/contacts/${contact.id}/edit`} className="ml-2">
                                Edit
                            </Link>

                            {/* Delete */}
                            <button 
                                onClick={() => handleDelete(contact.id)} 
                                className="ml-2"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ContactList;