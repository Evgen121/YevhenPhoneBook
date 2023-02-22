import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from "axios";

const ViewContact = () => {
    const location = useLocation()
    const [contact, setContact] = useState({})
    const [loading, setLoading] = useState(false)
    const path = location.pathname.split('/')[3]

    useEffect(() => {
        const getContact = async () => {
            setLoading(true)
            const res = await axios.get('/contacts/view/' + path);
            setContact(res.data)
            setLoading(false)
        };
        getContact()
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete('/contacts/view/' + path)
                .then(alert('You deleted contact'))
            window.location.replace('/contacts/list')

        } catch (error) {
            console.log(error)
        }
    }
    if (loading) {
        return <h1>Loadding....</h1>
    }

    return (
        <React.Fragment>

            <section className='view-contact-intro p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold">View Contact</p>
                            <p className="fst-itlic">Write down the contact of your friend right away, because then you will definitely forget.</p>
                        </div>
                    </div>
                </div>

            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">

                        {/*  <div className="col-md-4">
                            <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png" alt="" className='contact-img' />

                        </div> */}

                        <div className="col-md-8">
                            <ul className='list-group'>
                                <li className='list-group-item list-group-item-action my-1'>
                                    Name: <span className='fw-bold'>{contact.name}</span>
                                </li>
                                <li className='list-group-item list-group-item-action my-1'>
                                    MobileNumber: <span className='fw-bold'>{contact.number}</span>
                                </li>
                                <li className='list-group-item list-group-item-action my-1 ' >
                                    Email: <span className='fw-bold'>{contact.email}</span>
                                </li>
                                <li className='list-group-item list-group-item-action my-1'>
                                    Company: <span className='fw-bold'>{contact.company}</span>
                                </li>
                                <li className='list-group-item list-group-item-action my-1 ' >
                                    Adress: <span className='fw-bold'>{contact.adress}</span>
                                </li>


                            </ul>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Link to={'/contacts/list'} className='btn btn-warning'>Back</Link>

                                <Link to={`/contacts/edit/${contact._id}`} className='btn btn-primary my-1'>
                                    <i className="fa fa-pen" />
                                </Link>

                                <button className='btn btn-danger my-1'>
                                    <i className="fa fa-trash" onClick={handleDelete} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment >
    )
}

export default ViewContact
