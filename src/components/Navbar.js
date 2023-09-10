import "./Navbar.css";
import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <header>
            <div className="logo">
                GitWarriors
            </div>
            <ul className="menu">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/SearchUser">Users</Link>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;