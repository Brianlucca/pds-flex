import {
  BadgeDollarSignIcon,
  HistoryIcon,
  LayoutListIcon,
  UsersRoundIcon,
} from 'lucide-react'
import React, { useState } from 'react'
import './style.css'

export function AdminHeader() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="admin-container">
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <nav>
          <ul>
            <li>
              {isOpen ? (
                <a to="orders">Gerenciar Pedidos</a>
              ) : (
                <a to="orders" title="Gerenciar Pedidos">
                  <LayoutListIcon />
                </a>
              )}
            </li>
            <li>
              {isOpen ? (
                <a to="order-history">Histórico de Pedidos</a>
              ) : (
                <a to="order-history" title="Histórico de Pedidos">
                  <HistoryIcon />
                </a>
              )}
            </li>
            <li>
              {isOpen ? (
                <a to="users">Gerenciar Usuários</a>
              ) : (
                <a to="users" title="Gerenciar Usuários">
                  <UsersRoundIcon />
                </a>
              )}
            </li>
            <li>
              {isOpen ? (
                <a to="reports">Relatório Financeiro</a>
              ) : (
                <a to="reports" title="Relatório Financeiro">
                  <BadgeDollarSignIcon />
                </a>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export function RequestHeader() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="admin-container">
      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? 'Close' : 'Open'}
        </button>
        <nav>
          <ul>
            <li>
              {isOpen ? (
                <a to="orders">Gerenciar Pedidos</a>
              ) : (
                <a to="orders" title="Gerenciar Pedidos">
                  <LayoutListIcon />
                </a>
              )}
            </li>
            <li>
              {isOpen ? (
                <a to="order-history">Histórico de Pedidos</a>
              ) : (
                <a to="order-history" title="Histórico de Pedidos">
                  <HistoryIcon />
                </a>
              )}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}
