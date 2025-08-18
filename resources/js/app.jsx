import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import CreateContact from "./components/CreateContact";

function App() {
    return (
        <Router>
            <nav>
                <Link to="/contacts">Contacts</Link> |{" "}
                <Link to="/contacts/create">Add Contact</Link>
            </nav>
            <Routes>
                <Route path="/contacts" element={<ContactList />} />
                <Route path="/contacts/create" element={<CreateContact />} />
            </Routes>
        </Router>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
