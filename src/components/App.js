import Accordion from './Accordion'

const itens = [
    {
        titulo: "Java",
        conteudo: "Linguagem compilada e interpretada"
    },
    {
        titulo: "Python",
        conteudo: "Linguagem interpretada e dinamicamente tipada"
    },
    {
        titulo: "Javascript",
        conteudo: "Interpretada. Executa do lado do cliente e do servidor também"
    }
]

const App = () => {
    return(
        <div>
            <Accordion itens={itens}/>
        </div>
    )
}

export default App