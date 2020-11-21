import invariant from 'invariant'
import api from './api'
import services from './services'
import socket from './socket'
import { Bookmaker, BookmarkerEvent, SportCategory } from './typings/categories'
import { SocketIOEvent } from './typings/socket'

export { socket }
export { Bookmaker, BookmarkerEvent, SportCategory }

export interface SocketEventPayload {
  service: Bookmaker
  category: SportCategory
  isLive: boolean
  data: any
}
function on(event: BookmarkerEvent | SocketIOEvent, fn: (payload: SocketEventPayload) => void) {
  return socket.on(event, fn)
}
function off(event: BookmarkerEvent | SocketIOEvent, fn?: Function) {
  return socket.off(event, fn)
}

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
  on,
  off,
  ...api,
  ...services,
}
