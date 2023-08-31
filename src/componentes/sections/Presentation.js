import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'
function Presentation(){
    return( 
        <div className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu portfólio</strong></h4>
            <h1>Olá, eu sou Caio Alves!</h1>
            <p>
                Sou um entusiasta pelo mundo tecnológico, com isso decidi aprofundar meus conhecimentos na<br/>
                área e hoje estou me formando como Desenvolvedor Full Stack. Vejo a área de programação como<br/>
                algo constantemente inovador, o que me fascina, pois consigo trabalhar de forma inovadora,<br/>
                buscando novas soluções para otimizar a minha eficiência e resultados.
            </p>
            <ButtonA text='Conecte-se comigo!' link='https://github.com/CAIOUHH'/>
            
        </div> 
    )
}

export default Presentation