import CartWidget from ""
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  const imgLogo = "..//img/logosinf.jpg"
  return (
    <body>
    <header>
        <Link to={"/"}>
        <img className="imgLogo" src={imgLogo} alt="Logo" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}><button>Pc Gamer</button></NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}><button>Hardware</button></NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/4"}><button>Accesorios</button></NavLink>
                </li>
            </ul>
        </nav>
        <CartWidget />
    </header>
    </body>
  )
}


export default NavBar