 import styles from "./integracao2.module.css"
 //usando esse estilo, o proprio next trata-se de padronizar gerando 
 //nomes difrente das classes
 
 export default function integracao2(){
    return (
        <>
        <div id={styles.integracao2}>
            <div className={styles.vermelha}>Texto #01</div>
            <div className={styles.amarela}>Texto #02</div>
            <div className={styles.azul}>Texto #03</div>
        </div>
        </>
    )
}