import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useEffect } from 'react'
import { useState } from 'react'
function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['Caio Alves!', 'Desenvolvedor Junior', 'Dev Fullstack'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 150;
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        let ticker = setInterval(() =>{toType()}, delta)
        return() => {clearInterval(ticker)}
    }, [text])

    const toType = () =>{
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

        setText(updatedText);
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop+1);
        }

        
    }
    
    

    return( 
        <div className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
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