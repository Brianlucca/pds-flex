import React, { useState } from 'react'

function SignIn() {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    if (inputValue === '1') {
      localStorage.setItem('isAdmin', 'true')
      window.location.href = '/admin'
    } else if (inputValue === '2') {
      localStorage.setItem('isPedidos', 'true')
      window.location.href = '/pedidos'
    } else {
      setErrorMessage(
        'Login invalido. Por favor, confere novamente seus dados.',
      )
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  )
}
export default SignIn
