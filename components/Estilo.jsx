export default function Estilo(props){
    return(
        <div>
            <h1 style={{backgroundColor: props.numero >=0 ? "#2D2" :"#D22",
            textAlign: props.direita ? "right" : "left"
            // posso colocar syle dentro de uma variavel
        
        }}>Text</h1>
        </div>
    )
}