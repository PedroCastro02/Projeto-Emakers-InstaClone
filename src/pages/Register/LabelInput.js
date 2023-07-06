import { useMatch } from "react-router-dom"

function LabelInput() {
    return (
        <>
            <label id="label3" htmlFor="name">Nome</label> <br />
            <input type="text" className='inputRegistro' name="name" /> <br />

            <label id="label3" htmlFor="E-mail">E-mail</label> <br />
            <input type="email" className='inputRegistro' name="E-mail" /> <br />

            <label id="label3" htmlFor="password">Senha</label> <br />
            <input type="password" className='inputRegistro' name="password" /> <br />

            <label id="label3" htmlFor="confirm-password">Confirmar Senha</label> <br />
            <input type="password" className='inputRegistro' name="password-confirm" /> <br />
        </>
    );
  }

export default LabelInput;