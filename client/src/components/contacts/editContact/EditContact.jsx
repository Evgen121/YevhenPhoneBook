import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const EditContact = () => {

    const location = useLocation();
    const [loading, setLoading] = useState(false)
    const [contact, setContact] = useState({
        name: '',
        email: "",
        number: "",
        adress: "",
        company: ""
    })

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



    const updateInput = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    };
    const updateContact = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put('/contacts/edit/' + path, contact)
                .then(alert('You edit contact'))
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

            <section className='add-contact p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className=" h3 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Write down the contact of your friend right away, because then you will definitely forget.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form >
                                <div className="mb-2">
                                    <input type="text"
                                        name='name'
                                        value={contact.name}
                                        required onChange={updateInput}
                                        className='form-control' placeholder='Name' />
                                </div>

                                {/*  <div className="mb-2">
                                    <input type="text" className='form-control' placeholder='Photo url' />
                                </div> */}

                                <div className="mb-2">
                                    <input type="email" className='form-control'
                                        required onChange={updateInput} name='email'
                                        value={contact.email} placeholder='Email' />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className='form-control'
                                        required onChange={updateInput} name='number'
                                        value={contact.number} placeholder='Telefon number' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control'
                                        required onChange={updateInput} name='company'
                                        value={contact.company} placeholder='Company' />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control'
                                        required onChange={updateInput} name='adress'
                                        value={contact.adress} placeholder='Adress' />
                                </div>

                                <div className="mb-2">
                                    <input type="submit" onClick={updateContact} className='btn btn-primary' />
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Back</Link>
                                </div>

                            </form>
                        </div>
                        {/*  <div className="col-md-6">
                            <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png" alt="" className='contact-img' />
                        </div> */}
                    </div>
                </div>

            </section>


        </React.Fragment>
    )
}

export default EditContact
