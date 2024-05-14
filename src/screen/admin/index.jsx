import PageNotFound from '../../components/pageNotFound'

function AdminPage() {
  const isLoggedIn = localStorage.getItem('isAdmin') === 'admin'

  if (!isLoggedIn) {
    return <PageNotFound />
  } else {
    return (
      <>
        <div>
          <h1>Agora sim tu é admin cabeça</h1>
        </div>
      </>
    )
  }
}

export default AdminPage
