import api from '../api'
import { BookmarkerEvent, SportCategory } from '../typings/categories'

async function subscribe(params: {
  category: SportCategory
  event: BookmarkerEvent
  isLive: boolean
}) {
  api.subscribe({
    service: 'ggbet',
    ...params,
  })
}

export default {
  subscribe,
}
