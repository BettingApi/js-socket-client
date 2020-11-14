import socket from './socket'
import { Bookmaker, BookmarkerEvent, SportCategory } from './typings/categories'

function subscribe(params: {
  service: Bookmaker
  category: SportCategory
  event: BookmarkerEvent
  isLive: boolean
}) {
  socket.emit('subscribe', params)
}

export default {
  subscribe,
}
