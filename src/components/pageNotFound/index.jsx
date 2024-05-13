import { useNavigate } from 'react-router-dom'
import './style.css'

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div className="container-page-not-found">
      <div className="container-content">
        <div className="content-left">
          <div className="message-error">
            <h1>404</h1>
            <h1>Página não encontrada</h1>
          </div>
        </div>
        <div className="content-right">
          <div className="return-login">
            <p>
              Não consegue encontrar sua página? Realize o seu login novamente
            </p>
            <button onClick={() => navigate('/')}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
