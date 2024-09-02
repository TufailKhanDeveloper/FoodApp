import React from 'react'
import logo from '../src/Assets/Foody Zone.png'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className="search">
                    <input type="text" placeholder='Search Food...' />
                </div>
            </div>
            
            <div className='btn'>
                <button>All</button>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>All</button>
            </div>
        </>
    )
}

export default Navbar