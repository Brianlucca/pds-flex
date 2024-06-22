import { AdminHeader } from '../../../components/header'
import PageNotFound from '../../../components/pageNotFound'
import './style.css'

function ManageOrders() {
  const isLoggedIn = localStorage.getItem('isAdmin') === 'admin'

  if (!isLoggedIn) {
    return <PageNotFound />
  } else {
    return (
      <>
        <div className="container-orders">
          <div>
            <AdminHeader />
          </div>
          <div className="container-information-orders">
            <table>
              <thead>
                <tr>
                  <th scope="col">CLIENTE</th>
                  <th scope="col">PEDIDO N</th>
                  <th scope="col">DATA PEDIDO</th>
                  <th scope="col">VENCIMENTO</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Brian Lucca Costa Cardozo</th>
                  <td>1223345</td>
                  <td>01/10/2024</td>
                  <td>02/10/2024</td>
                  <td>CONCLUIDO</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    )
  }
}
export default ManageOrders
