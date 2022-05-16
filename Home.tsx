import {useNavigate} from 'react-router-dom'
import illustrationImg from '../assets/illustration.svg'
import logo from '../assets/logo.svg'
import googleicon from '../assets/google-icon.svg'
import '../styles/auth.css';
import {Button} from '../components/button'

export function Home() {
  const history = useNavigate();

  function navigationtoNewRoom() {

    history('/NewRoom');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="imagem home" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logo} alt="logo" />
          <button onClick={navigationtoNewRoom} className="create-room">
            <img src={googleicon} alt="icone do google" />
            Crie sua sala com o google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input 
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}