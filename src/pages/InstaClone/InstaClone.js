import "C:/Users/User/Desktop/projeto/src/pages/InstaClone/InstaClone.css"
import logo3 from "C:/Users/User/Desktop/projeto/src/assets/Logo_lateral_semfundo_Editada.png"
import SearchIcon from '@mui/icons-material/Search';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EditIcon from '@mui/icons-material/Edit';
import Perfil from "C:/Users/User/Desktop/projeto/src/assets/imagemPerfil.jpeg"
import foto1 from "C:/Users/User/Desktop/projeto/src/assets/FotoPerfil.jpg"
import foto3 from "C:/Users/User/Desktop/projeto/src/assets/Foto3.png"

function InstaClonePage() {
    return (
      <div className="container3">
        <div className="background">
          <nav>
              <img src={logo3} alt="" id="logo3"/>
                <div className="iconGroup">
                  <button className="circle1" id="circulo1"><SearchIcon /></button>
                  <button className="circle1" id="circulo2"><PeopleAltIcon /></button>
                  <button className="circle1" id="circulo2"><img src={Perfil} alt="" id="ImagemDePerfilIcone"/></button>
                </div>
            </nav>

            <div className="PerfilImg">
                    <img src={Perfil} alt="" id="ImagemDePerfil"/>
              </div>
              <div className="botaoEdit">
                <button className="circle1" id="circulo2"><EditIcon /></button>
              </div>
              <div className="botaoEdit2">
                <button className="circle1" id="circulo2"><EditIcon /></button>
              </div>

        </div>

          <div className="Biografia">
            <div className="Biografia2">
              <h1 className="Nome86">Pedro Rodrigues Botelho, 21</h1>
              <h3 className="bio">É necessário sempre acreditar que o sonho é possível. Que o céu é o limite e você, truta, é imbatível. Que o tempo ruim vai passar, é só uma fase</h3>
            </div>
          </div>

          <div className="ImgPlace">
            <img src={Perfil} alt="" className="fotos"/>
            <img src={foto1} alt=""  className="fotos"/>
            <img src={foto3} alt=""  className="fotos"/>
          </div>
    </div>
  );
  }

  export default InstaClonePage;