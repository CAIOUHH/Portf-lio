import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav'
function Navbar(){
    return( 
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentations'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li><a href='https://www.instagram.com/caioalve_04/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/CAIOUHH'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/caio-alves-73b880289/'><FaLinkedin size={30}/></a></li>
            </ul>
        </div> 
    )
}

export default Navbar