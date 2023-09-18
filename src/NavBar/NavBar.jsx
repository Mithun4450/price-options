import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const routes = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'About Us', link: '/about' },
    { id: 3, name: 'Services', link: '/services' },
    { id: 4, name: 'Contact', link: '/contact' },
    { id: 5, name: 'Blog', link: '/blog' }
    ];
      

    return (

        <nav className="bg-yellow-300 p-6 relative ">
            <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
            {
                open === true? 
                <AiOutlineCloseCircle></AiOutlineCloseCircle> 
                : <AiOutlineMenu></AiOutlineMenu>
            }
            
            </div>
            <ul className={`md:flex absolute md:static duration-1000 bg-yellow-300 p-6 ${open? 'top-16' : '-top-96'}`}>
            {
            routes.map(route => <Link route={route} key={route.id}></Link> )

            }

            </ul>
        </nav>

        
        
            
            
        
    );
};

export default NavBar;