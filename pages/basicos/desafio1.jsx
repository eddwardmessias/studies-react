export default function desafio1(){
    const list = lista(20)

    return (
        <div>{list}</div>

    )

}

function lista(num){
    let array = [];
    for (let i = 1; i <= num; i++) {        
        const spanFun = <span>{i},</span>        
        array[i] = spanFun;
    }
    return array;
}
