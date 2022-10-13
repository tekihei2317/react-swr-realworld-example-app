const tokenName = 'API_TOKEN'

export const tokenStorage = {
  get() {
    return localStorage.getItem(tokenName)
  },
  set(token: string) {
    return localStorage.setItem(tokenName, token)
  },
  clear() {
    return localStorage.removeItem(tokenName)
  },
}
