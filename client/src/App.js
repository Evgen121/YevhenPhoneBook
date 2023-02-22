import './App.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import ContactList from './components/contacts/contactList/ContactList';
import NavBar from './components/navBar/NavBar';
import AddContact from './components/contacts/addContact/AddContact';
import ViewContact from './components/contacts/viewContact/ViewContact';
import EditContact from './components/contacts/editContact/EditContact';



function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<ContactList />} />
        <Route path={'/contacts/add'} element={<AddContact />} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact />} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact />} />
      </Routes>

    </React.Fragment>


  );
}

export default App;
