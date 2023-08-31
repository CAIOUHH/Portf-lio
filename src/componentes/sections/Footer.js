import { FaInstagram, FaLinkedin, FaGithub,} from "react-icons/fa6";
import styles from '../sections/Footer.module.css'
function Footer(){
    return(
        <div className={styles.Footer}> 
             <ul>
                <li><a href='https://www.instagram.com/caioalve_04/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/CAIOUHH'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/caio-alves-73b880289/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p><strong>caioalvesolive@gmail.com.br</strong></p>
            <p> Caio Alves © 2023 </p>
        </div>
    )
}

export default Footer