
import 'C:/Users/User/Desktop/projeto/src/pages/Login/LoginPage.css';
import Logo from 'C:/Users/User/Desktop/projeto/src/assets/LogoPaginaLogin.png'

function LoginPage() {
  return (
    <div className="container">
      <div className="loginContainer">
        <img src={Logo} alt=""/>
        <h2 id="title"><strong>Entre em Sua Conta</strong></h2>
        <form id="form1">
          <label id="label1" htmlFor="email">E-mail</label> <br />
          <input type="email" className='input' name="email" /> <br />

          <label id="label2" htmlFor="password">Senha</label><br />
          <input type="password" className='input' name="password"  /><br />
        
          <button id="button1" type="submit">Entrar</button><br />
        </form>
      </div>
      <div className="registerContainer">
        
        <h2 id="title2">Novo Aqui?</h2>
        <p>Registre-se e venha fazer parte da maior rede social!</p>
        <button id="button2">Registrar-se</button>

      </div>
    </div>
  );
}

export default LoginPage;
