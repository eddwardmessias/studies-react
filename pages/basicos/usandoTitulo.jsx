import Titulo from '../../components/Titulo';

export default function usandoTitulo(){
    return(
        <div>
            <Titulo
            principal="Pagina de Cadastro"
            descricao="Incluir, alterar e excluir coisas!"
            >                
            </Titulo>    
            <Titulo
            principal="Pagina de Cadastro"
            descricao="Incluir, alterar e excluir coisas!"
            pequeno={true}
            >                
            </Titulo>    
        </div>
    )
}