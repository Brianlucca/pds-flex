import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from '../screen/admin'
import RequestsPage from '../screen/requestsPage'
import SignIn from '../screen/signIn'
import PageNotFound from '../components/pageNotFound'
import ManageOrders from '../view/admin/manageOrders'

export default function RenderRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/pedidos" element={<RequestsPage />} />
        <Route path="/gerenciar-pedidos" element={<ManageOrders />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
