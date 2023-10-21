import TextField from "../TextField/TextField";
import "./Form.css";


const Form = () => {
    return (
        <section className="formEnterprise">
            <form>
                <h2>Preencha os dados para criar o card da empresa</h2>
                <TextField label="Nome" placeholder="Digite o nome da empresa." />
                <TextField label="CNPJ" placeholder="Digite o CNPJ." />
                <TextField label="CNAE" placeholder="Seleção de CNAEs." />
            </form>
        </section>
    )
}

export default Form