import invariant from 'invariant'
import api from './api'
import services from './services'
import socket from './socket'

export { socket }

function registerApp(secret: string) {
  const { query } = socket.io.opts
  invariant(query, 'io query is invalid.')

  // @ts-ignore
  query.authorization = secret
}

function connect() {
  return socket.connect()
}

export default {
  registerApp,
  connect,
  ...api,
  ...services,
}
