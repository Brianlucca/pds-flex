import { get, ref } from 'firebase/database'
import { db } from '../firebase/firebase'

const login = async (username, password) => {
  const dbRef = ref(db)
  const snapshot = await get(dbRef)

  if (!snapshot.exists()) {
    throw new Error('No data available')
  }

  const users = snapshot.val()

  if (
    username === users.admin.login &&
    password === users.admin.senha.toString()
  ) {
    return { role: 'admin' }
  } else if (
    username === users.pedidos.loginPedidos &&
    password === users.pedidos.senhaPedidos.toString()
  ) {
    return { role: 'pedidos' }
  } else {
    throw new Error('Invalid credentials')
  }
}

export { login }
