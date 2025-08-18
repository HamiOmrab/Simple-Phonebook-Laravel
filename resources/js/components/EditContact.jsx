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
                console.log("DATA:", data);
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
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditContact;