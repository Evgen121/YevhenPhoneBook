import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import Pgination from '../../Pgination';
import Conact from '../contact/Conact';
import Select from '../../select/Select';

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [contactsPerPage] = useState(2)
    const [query, setQuery] = useState('')
    const [selectedDort, setSelectedSort] = useState('')


    useEffect(() => {
        const fetchContacts = async () => {
            setLoading(true)
            const res = await axios.get('/contacts/')
            setContacts(res.data)
            console.log(res)
            setLoading(false)
        }
        fetchContacts()

    }, [])

    //get current contact
    const indexOfLastCantact = currentPage * contactsPerPage;
    const indexOfFirstContact = indexOfLastCantact - contactsPerPage;
    const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastCantact);

    //  change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    //Sort contacts
    const sortContacts = (sort) => {
        setSelectedSort();
        setContacts([...contacts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (

        <React.Fragment>
            <section className='contact-search p-3'>
                <div className="container ">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Contact Manager
                                    <Link to={'/contacts/add'} className='btn btn-primary ms-2' >
                                        <i className='fa fa-plus-circle me-1' />Add</Link>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-4" >
                            <div className="col-md-6">
                                <form className='row'>
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" name='text' onChange={e => setQuery(e.target.value)}
                                                className='form-control' placeholder='Search Name' />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2 d-flex justify-content-around"  >
                                            <input type="submit" className='btn btn-outline-primary fw-bold' value='Search' />
                                            <Select
                                                value={setSelectedSort}
                                                onChange={sortContacts}
                                                defaultValue='sorting by'
                                                options={[
                                                    { value: 'name', name: "by name" },
                                                    { value: 'company', name: "by company" }
                                                ]} />
                                        </div>

                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className='add-contact p-3'>
                <div className="container">
                    {contacts.length != 0
                        ? <Conact contacts={currentContacts} query={query} loading={loading} />
                        : <h1>You don't have contacts</h1>}
                    <Pgination contactsPerPage={contactsPerPage}
                        paginate={paginate}
                        totalContacts={contacts.length} />
                </div>
            </section>



        </React.Fragment>
    )
}

export default ContactList
