import React, { useState } from 'react'
import { login } from '../../service/authService'
import './style.css'

function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = async () => {
    try {
      const user = await login(username, password)

      if (user.role === 'admin') {
        window.location.href = '/admin'
        localStorage.setItem('isAdmin', user.role)
      } else if (user.role === 'pedidos') {
        window.location.href = '/pedidos'
        localStorage.setItem('isPedidos', user.role)
      } else {
        window.location.href = '/'
      }
    } catch (error) {
      setErrorMessage('Login inválido. Por favor, verifique suas credenciais.')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <div className="container">
      <div className="container-form">
        <h1 className="labelInput">Bem vindo</h1>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          onKeyDown={handleKeyDown}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleLogin} className="button">
          Entrar
        </button>
        <div className="error-message">
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        <div className="container-never-account">
          <p className="never-account-name">
            Não tem uma conta?
            <span className="never-account-span">
              <a href="/">cadastro</a>
            </span>
          </p>
        </div>
        <div className="container-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SignIn
