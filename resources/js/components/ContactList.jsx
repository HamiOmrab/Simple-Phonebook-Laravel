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

const handleDelete = async (contact) => {
    if (!confirm(`Are you sure you want to delete ${contact.firstname}?`)) return;

    try {
        console.log("Deleting contact:", contact.id);

        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const response = await fetch(`/api/contacts/${contact.id}`, {
            method: "DELETE",
            headers: { 
                "Accept": "application/json",
                "X-CSRF-TOKEN": token
            }
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error("Delete failed:", errText);
            alert("Failed to delete contact");
            return;
        }

        setContacts(prev => prev.filter(c => c.id !== contact.id));
        // alert(`${contact.firstname} deleted successfully`);
    } catch (error) {
        console.error("Network error:", error);
        alert("Error while deleting");
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

                            
                            <button 
                                onClick={() => handleDelete(contact)} 
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