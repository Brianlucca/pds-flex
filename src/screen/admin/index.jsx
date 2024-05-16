import { AdminHeader } from '../../components/header'
import PageNotFound from '../../components/pageNotFound'
import './style.css'

function AdminPage() {
  const isLoggedIn = localStorage.getItem('isAdmin') === 'admin'

  if (!isLoggedIn) {
    return <PageNotFound />
  } else {
    return (
      <>
        <div className="container-test">
          <div>
            <AdminHeader />
          </div>
          <div className="container-information">
            <h1>Agora sim tu é admin cabeça</h1>
          </div>
        </div>
      </>
    )
  }
}

export default AdminPage
