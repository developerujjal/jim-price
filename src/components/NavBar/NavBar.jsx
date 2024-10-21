import { useState } from "react";
import Link from "../Link/Link";
import './NavBar.css'

const NavBar = () => {

    const [menuOpen, setMenuOpen]= useState(false)

    const routes = [
        { "id": 1, "path": "/home", "name": "Home" },
        { "id": 2, "path": "/about", "name": "About" },
        { "id": 3, "path": "/services", "name": "Services" },
        { "id": 4, "path": "/contact", "name": "Contact" },
        { "id": 5, "path": "/blog", "name": "Blog" },
        { "id": 6, "path": "/faq", "name": "FAQ" }
    ]


    return (
        <header>
            <div className="container">
                <nav>
                    <div className="nav-menu-main">
                        <div onClick={()=> setMenuOpen(!menuOpen)} className="menu-icon">

                        {
                            menuOpen === true ? 
                            
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                            
                            : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        }

                            
                        </div>
                        <ul className={`main-menu-list ${!menuOpen ? '' : 'hidden'}`}>
                            {
                                routes.map((route) => <Link key={route.id} route={route}></Link>)
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;