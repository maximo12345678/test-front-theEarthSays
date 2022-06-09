import logo from '../images/icon.png'
import '../styles/Animation.css'

const NavBar = () => {

    function modificarMenu() {
        document.querySelector('.menu').classList.toggle('show');
    }

    return (
        <nav className="nav">
            <li className="nav-img"><a href="/"><img src={logo} alt="Logo"></img></a></li>
            <div style={{ flexGrow: 1 }}></div>
            <ul className="menu">

                <li><a href="https://www.linkedin.com/in/maximo-ya%C3%B1ez-a199421ba/">Maximo Yañez</a></li>
            </ul>

            <input type="checkbox" id="btn-menu"></input>
            <label onClick={modificarMenu} htmlFor="btn-menu" className="lbl-menu">
                <span id="spn1"></span>
                <span id="spn2"></span>
                <span id="spn3"></span>
            </label>


        </nav>
    )
}


export default NavBar;