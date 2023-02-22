import React from 'react'
import { Link } from 'react-router-dom';

const Conact = ({ contacts, query, loading }) => {
    if (loading) {
        return <h1>Loadding....</h1>
    }
    return (
        <React.Fragment>
            <div className="row">
                { }
                {contacts.filter(contacts => contacts.name.toLowerCase().includes(query)).map(contact => {
                    return (
                        <div className="col-md-6 my-1" key={contact._id}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="row align-items-center d-flex justify-content-around">
                                        <div className="col-md-3">

                                            <img src="https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png" alt="" className='contact-img' />

                                        </div>
                                        <div className="col-md-5 my-1 ">
                                            <ul className='list-group'>
                                                <li className='list-group-item list-group-item-action my-1'>
                                                    Name: <span className='fw-bold'>{contact.name}</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action my-1'>
                                                    Number: <span className='fw-bold'>{contact.number}</span>
                                                </li>
                                                <li className='list-group-item list-group-item-action my-1 ' >
                                                    Email: <span className='fw-bold'>{contact.email}</span>
                                                </li>
                                            </ul>
                                        </div>


                                    </div>
                                    <div className="row align-items-center d-flex justify-content-around ">
                                        <Link className="btn btn-primary ms-1 my-1  " to={`/contacts/view/${contact._id}`}>
                                            <i className="fa fa-eye  " ></i> </Link>
                                        <Link className="btn btn-secondary ms-1 my-1" to={`tel:${contact.number}`}>
                                            <i className="fa fa-phone  " ></i> </Link>
                                    </div>

                                </div>
                            </div>

                        </div>

                    )
                })

                }
            </div>
        </React.Fragment>
    )
}

export default Conact
