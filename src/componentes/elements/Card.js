import styles from '../elements/Card.module.css'
import ButtonB from './ButtonB'
function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.Card}> 
            <a href={site}>
                <img src={img} alt='ERROR'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong> Tecnologia: </strong>{tech}</p>
                <p>{description}</p>
                <ButtonB text='Acesse meu repositório' link={repo}/>
            </section>
        </div>
        
    )
}

export default Card