export default function jsx4(){
    const subtitulo = "Estou no JavaScript"
    const trechoh3 = <h3>{3*3}</h3>
    return (
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoh3}
            <h2>{entre(9.6,1,10)}</h2>
        </div>
    )
}

function entre(valor, min,max){
    if(valor >= min && valor <= max){
        return "sim"
    } else {
        return "não"
    }
}