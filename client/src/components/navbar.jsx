import { Link } from 'react-router-dom'

const Navbar = () => {
    return (


        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            </ul>
            <div className={"container"}>
                <Link to={'/'}>
                    <h1>Profile</h1>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar
