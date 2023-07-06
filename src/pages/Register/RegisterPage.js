
import "C:/Users/User/Desktop/projeto/src/pages/Register/Register.css"
import LogoRegistro from 'C:/Users/User/Desktop/projeto/src/assets/logoeditada2.png'
import LabelInput from "./LabelInput";

function RegisterPage() {
    return (
        <div className="container2">
        <div className="registros">

          <h1 id="TituloEsquerdoRegistro"><strong>Registrar</strong></h1>
            <form className="formRegistro2">
              <LabelInput />
            </form>

        </div>
        <div className="logo2">
          <img className='img2' src={LogoRegistro} alt="" />
          <p className="p2">Venha fazer parte da maior rede social também!</p>
        </div>
      </div>
    );
  }

  export default RegisterPage;