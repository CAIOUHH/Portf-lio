import styles from './Skills.module.css'
import html from '../imagens/skills/html02.svg'
import css from '../imagens/skills/css01.svg'
import react from '../imagens/skills/react04.svg'
import javascript from '../imagens/skills/javascript03.svg'
function Skills(){
    return( 
    <div className={styles.skill} id='Skill'>
        <h1>Habilidades</h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
        <div>
           <img src={html}/>
           <img src={css}/>
           <img src={react}/>
           <img src={javascript}/>
        </div>
    </div> 
    )
}

export default Skills