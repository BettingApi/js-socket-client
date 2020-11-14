import io from 'socket.io-client'
import config from './config'

const socket = io(config.socketUri, {
  query: {},
  autoConnect: false,
})

// 'reconnecting' is same
socket.on('reconnect_attempt', () => {
  console.log('SOCKET', 'reconnect_attempt')
})

socket.on('error', e => {
  console.log('SOCKET', 'error', e)
})

socket.on('connect', () => {
  console.log('SOCKET', 'socket is opened')
})
socket.on('event', data => {
  console.log('SOCKET', 'message: ', data)
})
socket.on('disconnect', () => {
  console.log('socket is closed ')
})

function emitAsync(args) {
  return new Promise(resolve => {
    socket.emit(args, data => {
      resolve(data)
    })
  })
}

export { emitAsync }

export default socket
