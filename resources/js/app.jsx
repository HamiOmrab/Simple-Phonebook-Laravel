import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactList from "./components/ContactList";

function App() {
    return (
        <div>
            <h1>My Contacts</h1>
            <ContactList />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);