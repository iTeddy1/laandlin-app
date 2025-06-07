import * as SecureStore from 'expo-secure-store'

// Store token
async function storeToken(token) {
  await SecureStore.setItemAsync('access-token', token)
}

// Retrieve token
async function getToken() {
  return await SecureStore.getItemAsync('access-token')
}

// Clear token on logout
async function clearToken() {
  await SecureStore.deleteItemAsync('access-token')
}

export { storeToken, getToken, clearToken }
