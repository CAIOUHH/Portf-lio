import ButtonB from "../elements/ButtonB"
import styles from './Projects.module.css'
import Card from '../elements/Card'
import LP from '../imagens/Projects/LP.svg'
import Portfolio from '../imagens/Projects/Portfolio.svg'

function Projects(){
    return(
        <div id='Projects' className={styles.Projects}>
            <h1> Projetos </h1>
            <Card
            img={LP}
            title='Landing Page'
            tech='HTML, CSS e JAVASCRIPT'
            description='Projeto de desenvolvimento de uma landing page '
            link='https://github.com/CAIOUHH/Projeto-Landing-Page'
            site='https://teste-landingpage.netlify.app/'
            />

            <Card
            img={Portfolio}
            title='Portfólio'
            tech='React'
            description='Desenvolvimento do meu portfólio de projetos'
            link='.'
            site='.'
            />
            <ButtonB text='Acesse o repositório' link='https://github.com/CAIOUHH?tab=repositories'/>


        </div>
    )
}

export default Projects