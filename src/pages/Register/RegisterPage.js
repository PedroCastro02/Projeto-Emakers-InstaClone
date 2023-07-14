
import "C:/Users/User/Desktop/projeto/src/pages/Register/Register.css"
import LogoRegistro from 'C:/Users/User/Desktop/projeto/src/assets/logoeditada2.png'
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate(); 
  
  const goToLoginPage = () => {
  navigate ('/');
}
    return (
        <div className="container2">
        <div className="registros">

          <h1 id="TituloEsquerdoRegistro"><strong>Registrar</strong></h1>
            <form className="formRegistro2">
                <div className="form-control">
                  <label className="label3" htmlFor="name">Nome</label>
                  <input type="text" className='inputRegistro' name="name" />
                </div>

                <div className="form-control">
                  <label className="label3" htmlFor="E-mail">E-mail</label>
                  <input type="email" className='inputRegistro' name="E-mail" placeholder='exemplo@email.com' />
                </div>

                <div className="form-control">
                  <label className="label3" htmlFor="password">Senha</label>
                  <input type="password" className='inputRegistro' name="password" /> 
                </div>

                <div className="form-control">
                  <label className="label3" htmlFor="confirm-password">Confirmar Senha</label>
                  <input type="password" className='inputRegistro' name="password-confirm" /> 
                </div>

                <div id="formRegistro3">
                  <div className="form-control">
                    <label className="label3" htmlFor="gender">Sexo</label>
                    <select className="input3" name="gender" id="gender">
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                <div id="FormControleFile">
                  <p id="labelParagrafo">Imagem</p>
                    <label className="LabelInputFile" htmlFor="image">Selecionar imagem</label>
                    <input type="file" name="image" id="image" accept="image/*" />
                </div>
              
              </div>
              <div className="button3">
              <button id="button3" data-testid="register-button3" onClick={goToLoginPage}>Registrar-se</button>
              </div>
              <p className="p3" onClick={goToLoginPage}>Já possui conta?</p>
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