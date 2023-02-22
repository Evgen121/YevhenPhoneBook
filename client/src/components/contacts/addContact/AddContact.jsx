import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddContact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [adress, setAdress] = useState("")
    const [company, setCompany] = useState("")
    /* const [file, setFile] = useState(null) */


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email,
            number,
            adress,
            company
        }
        const res = await axios.post('/contacts/add', newContact).then(alert('You add a new contact'))
        window.location.replace('/contacts/list')
    }

    //add avatar
    /* 
            if (file) {
                const data = FormData();
                const filename = Date.now() + file.name;
                data.append("name", filename)
                data.append("file", file)
                newContact.photo = filename;
                try {
                    await axios.post('/upload', data)
                } catch (error) {    
                    
                }    
            }
            const res = await axios.post('add', newContact)
            console.log(res)
    
    
        } */

    return (
        <React.Fragment>
            <section className='add-contact p-3'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="text-primary fw-bold">Create Contact</p>
                            <p className="fst-italic"> Hello, this is my test work, do not judge too harshly.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <input type="text" className='form-control'
                                        placeholder='Name'
                                        onChange={e => setName(e.target.value)} />
                                </div>

                                <div className="mb-2">
                                    <input type="email" className='form-control'
                                        placeholder='Email'
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className='form-control'
                                        placeholder='Telefon number'
                                        onChange={e => setNumber(e.target.value)} />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control'
                                        placeholder='Company'
                                        onChange={e => setCompany(e.target.value)}
                                    />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className='form-control'
                                        placeholder='Adress'
                                        onChange={e => setAdress(e.target.value)} />
                                </div>

                                {/* <div className="mb-2 ">
                                    <input type="submit" className='btn btn-warning ' value='AddFoto' />
                                </div> */}

                                <div className="mb-2 d-flex ">
                                    <div className="mb-2">
                                        <input type="submit" className='btn btn-success ms-2"' value='Create' />
                                    </div>

                                    <div className="mb-2">
                                        <Link to={'/contacts/list'} className="btn btn-dark ms-2">Back</Link>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>

            </section>


        </React.Fragment>
    )
}

export default AddContact;
