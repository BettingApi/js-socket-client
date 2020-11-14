import io from 'socket.io-client'
import config from './config'

const socket = io(config.socketUri, {
  query: {},
  autoConnect: false,
})

export default socket
