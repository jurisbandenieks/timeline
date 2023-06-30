import { Resource } from '../components'
import { addDays } from '../components/utils'

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Tony Stark',
    events: [
      {
        start: new Date(),
        end: addDays(new Date(), 5),
        color: '#E6EE9C',
        title: 'Vacation',
      },
    ],
  },
]
