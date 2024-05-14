import PageNotFound from '../../components/pageNotFound'

function RequestsPage() {
  const isLoggedIn = localStorage.getItem('isPedidos') === 'pedidos'

  if (!isLoggedIn) {
    return <PageNotFound />
  } else {
    return (
      <>
        <div>
          <h1>Tu ta em pedidos, mano, gerencie sua parada</h1>
        </div>
      </>
    )
  }
}
export default RequestsPage
