import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditContact({ onUpdated }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");

    useEffect(() => {
        fetch(`/api/contacts/${id}`)
            .then(res => res.json())
            .then(data => {
                setFirstname(data.firstname || "");
                setLastname(data.lastname || "");
                setPhonenumber(data.phonenumber || "");
            })
            .catch(err => console.error("ERROR:", err));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const response = await fetch(`/api/contacts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token
            },
            body: JSON.stringify({ firstname, lastname, phonenumber })
        });

        if (response.ok) {
            onUpdated && onUpdated();
            navigate("/contacts");
        }
    };

    return (
        <div>
            <h1>Edit Contact</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label><br />
                    <input
                        type="text"
                        name="firstname"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    /><br /><br />
                </div>

                <div>
                    <label>Last Name:</label><br />
                    <input
                        type="text"
                        name="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    /><br /><br />
                </div>

                <div>
                    <label>Phone Number:</label><br />
                    <input
                        type="text"
                        name="phonenumber"
                        value={phonenumber}
                        onChange={(e) => setPhonenumber(e.target.value)}
                    /><br /><br />
                </div>

                <button type="submit">Update</button>
            </form>

            <br />
            <a href="/contacts">Cancel editing and back to list</a>
        </div>
    );
}

export default EditContact;