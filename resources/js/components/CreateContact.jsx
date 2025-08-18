import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function CreateContact({ onCreated }) {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        setSuccess("");

        const token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        try {
            const response = await fetch("/api/contacts", {
                method: "POST",
                headers: { 
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": token
                },
                body: JSON.stringify({ firstname, lastname, phonenumber })
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) {
                    setErrors(Object.values(data.errors).flat());
                }
                return;
            }

            setSuccess("Contact added successfully!");
            setFirstname("");
            setLastname("");
            setPhonenumber("");

            if (onCreated) onCreated();

        } catch (err) {
            console.error("Error:", err);
            setErrors(["An unexpected error occurred."]);
        }
    };

    return (
        <div>
            <h2>Add New Contact</h2>

            {success && <p style={{ color: "green" }}>{success}</p>}

            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((err, idx) => <li key={idx}>{err}</li>)}
                </ul>
            )}

            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                    value={firstname} 
                    onChange={e => setFirstname(e.target.value)} 
                /><br/><br/>

                <label>Last Name:</label>
                <input 
                    value={lastname} 
                    onChange={e => setLastname(e.target.value)} 
                /><br/><br/>

                <label>Phone Number:</label>
                <input 
                    value={phonenumber} 
                    onChange={e => setPhonenumber(e.target.value)} 
                /><br/><br/>

                <button type="submit">Save</button>
            </form>
            <button type="button" onClick={() => navigate("/contacts")}>
                Back to Contacts List
            </button>
        </div>
    );
}

export default CreateContact;
