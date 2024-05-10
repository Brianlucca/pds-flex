import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div>
      <h2>oops! pagina não encontrada, tu é viado isso sim</h2>
      <button onClick={() => navigate('/')}>volte aqui corno</button>
    </div>
  )
}
export default PageNotFound
