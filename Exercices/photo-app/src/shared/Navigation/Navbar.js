import React, { useState } from "react";
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [activeMenuElement, setActiveMenuElement] = useState('')

    return (
        <div className="ui secondary pointing menu">
            <Link to="Home"
                className={`${activeMenuElement === 'Home' && 'active'}  item`}
                onClick={() => setActiveMenuElement('Home')}
            >
                Home
            </Link>
            <Link to="Photos"
                className={`${activeMenuElement === 'Photos' && 'active'}  item`}
                onClick={() => setActiveMenuElement('Photos')}
            >
                Photos
            </Link>
            <Link to="Comments"
                className={`${activeMenuElement === 'Comments' && 'active'}  item`}
                onClick={() => setActiveMenuElement('Comments')}
            >
                Comments
            </Link>
        </div>
    )
}

export default Navbar;