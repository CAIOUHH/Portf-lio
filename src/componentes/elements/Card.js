import styles from '../elements/Card.module.css'
import ButtonB from './ButtonB'
import {useState} from 'react'
function Card({img, title, tech, description, repo, site}){
    const [info, SetInfo] = useState(false)

    function InfoOn(){
        SetInfo(true)
    }

    function InfoOff(){
        SetInfo(false)
    }

    return(
        <div className={styles.Card} onMouseLeave={InfoOff}> 
            <a onMouseEnter={InfoOn} href={site}>
                <img src={img} alt='ERROR'/>
            </a>

            
            {info === true &&(
                <section>
                    <h3>{title}</h3>
                    <p><strong> Tecnologia: </strong>{tech}</p>
                    <p>{description}</p>
                    <ButtonB text='Acesse meu repositório' link={repo}/>
                
                </section> )}
        </div>
        
    )
}

export default Card