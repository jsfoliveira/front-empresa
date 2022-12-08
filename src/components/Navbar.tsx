import navbar from '../../styles/Navbar.module.css'
import logo from "../../pages/public/assets/logo.png"

const Navbar = () => {
  return (
    <nav className={navbar.navbar}>
        <div className={navbar.navbar__container}>
                <h1 className={navbar.logo}>
                    <a href="index.html">
                      <img src={logo.src} alt= 'logo' className={navbar.logo} width="300px" />
                    </a>

                </h1>
                <ul className={navbar.navbar__links}>
                    <li>
                        <a href="enterprise.html">
                        Empresa </a>
                    </li>
        
                    <li>
                        <a href="servico.html">
                        Serviços
                        </a>
                    </li>
                    <li>
                        <a href="contact.html">
                        Contato
                        </a>
                    </li>
                    <li>
                        <a href="entrar.html">
                        Entrar
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar;