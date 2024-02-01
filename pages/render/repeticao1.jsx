export default function repeticao1(){
    const listaAprovados =[
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]

    function rederizarLista(){
        return listaAprovados.map(function(nome,index){
            return <li key={index}>{nome}</li>
        })
    }

    return(
        <ul>
            {rederizarLista()}
        </ul>
    )
}

// function rederizarLista(){

//     const itens = []

//     for (let index = 0; index < listaAprovados.length; index++) {
//         itens.push(<li key={index} >{listaAprovados[index]}</li>)
        
//     }
//     return itens
//     // return (
//     //     <>
//     //     <li>Elemento #01</li>
//     //     <li>Elemento #02</li>
//     //     <li>Elemento #03</li>            
//     //     </>
//     // )
// }