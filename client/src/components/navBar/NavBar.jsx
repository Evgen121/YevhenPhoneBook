import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                <div className="container">
                    <Link to={'/contacts/list'} className='navbar-brand'>
                        <i className="fa fa-phone text-danger p-1" ></i>Yevhen <span className='text-warning'>Contacts</span>
                    </Link>
                </div>
            </nav>

        </React.Fragment>
    )
}

export default NavBar
