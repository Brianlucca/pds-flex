import { RequestHeader } from '../../components/header'
import PageNotFound from '../../components/pageNotFound'

function RequestsPage() {
  const isLoggedIn = localStorage.getItem('isPedidos') === 'pedidos'

  if (!isLoggedIn) {
    return <PageNotFound />
  } else {
    return (
      <>
        <div className="container-test">
          <div>
            <RequestHeader />
          </div>
          <div className="container-information">
            <h1>Tu ta em pedidos, mano, gerencie sua parada</h1>
          </div>
        </div>
      </>
    )
  }
}
export default RequestsPage
