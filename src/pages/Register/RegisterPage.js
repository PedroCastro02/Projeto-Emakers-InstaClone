
import "C:/Users/User/Desktop/projeto/src/pages/Register/Register.css"
import LogoRegistro from 'C:/Users/User/Desktop/projeto/src/assets/logoeditada2.png'

function RegisterPage() {
    return (
        <div className="container2">
        <div className="registros">
        <h1>Lado esquerdo</h1>
        </div>
        <div className="logo2">
          <img src={LogoRegistro} alt="" />
          <p>Venha fazer parte da maior rede social também!</p>
        </div>
      </div>
    );
  }

  export default RegisterPage;