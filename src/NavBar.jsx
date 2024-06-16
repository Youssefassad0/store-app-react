import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={'/'} className="navbar-brand">Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">CRUD </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/props">Props</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">UseEffect</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/redux/users">Redux</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default NavBar