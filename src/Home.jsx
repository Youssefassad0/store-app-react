import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className='d-flex m-5 justify-center' >
            <ul className='list-group' >
                <Link to="/validation" className='list-group-item' > Validation  </Link>
                <Link to="/products" className='list-group-item'> Products       </Link>
                <Link to="/home" className='list-group-item'> Forms       </Link>
                <Link to="/props" className='list-group-item'> Props       </Link>
                <Link className="nav-link list-group-item" to="/redux/users">Redux</Link>

                 </ul>
        </div>
    )
}

export default Home