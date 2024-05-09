import { faBars, faDashboard, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { faChartArea } from '@fortawesome/free-solid-svg-icons/faChartArea'
import { faChartBar } from '@fortawesome/free-solid-svg-icons/faChartBar'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
import menuItems from '../utils/dataFiles'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'


function Sidebar({ children }) {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className='container'>
            <div className='sidebar' style={{ width: toggle ? "300px" : "50px" }}>
                <div className="top-section">
                    <h1 style={{ display: toggle ? "block" : "none" }}>Hello</h1>
                    <div className="bar" onClick={handleToggle} style={{ marginLeft: toggle ? "180px" : "0px" }}>
                        <FontAwesomeIcon icon={faBars} size='lg' />
                    </div>
                </div>
                <div className='menu' style={{ padding: toggle ? "20px" : "0px", height: toggle ? "90%" : "95%" }}>
                    <div>
                        {
                            menuItems.map((items, index) =>
                                <NavLink key={index} to={items.path} className="link">
                                    <FontAwesomeIcon icon={faChartBar} />
                                    <p style={{ display: toggle ? "block" : "none" }}>{items.name}</p>
                                </NavLink>
                            )
                        }
                    </div>
                    <div>
                        <NavLink to={"/user"} className="link">
                            <FontAwesomeIcon icon={faUser} />
                            <p style={{ display: toggle ? "block" : "none" }}>User</p>
                        </NavLink>
                        <NavLink to={"/login"} className="link">
                            <FontAwesomeIcon icon={faClose} />
                            <p style={{ display: toggle ? "block" : "none" }}>Logout</p>
                        </NavLink>
                    </div>
                </div>
            </div>
            <main style={{ paddingLeft: toggle ? "320px" : "70px" }}>
                {children}
            </main>
        </div>
    )
}

export default Sidebar