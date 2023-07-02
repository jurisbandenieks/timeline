import { useEffect } from 'react'
import { formatDate, getDatesInRange, getDaysInMonth, getYearAndMonth } from './utils'

export interface Resource {
  id: string
  title: string
  events: Event[]
}

export interface Event {
  start: Date
  end?: Date
  title: string
  color?: string
}
interface Props {
  resources: Resource[]
}

export const Timeline: React.FC<Props> = ({ resources }) => {
  console.log(resources)
  const currYearAndMont = getYearAndMonth()
  const daysInMonth = getDaysInMonth(currYearAndMont)

  useEffect(() => {
    resources.forEach((item) => {
      item.events.forEach((event) => {
        const startCell = document.getElementById(`${event.start.toDateString()}-${item.id}`)
        if (startCell) {
          startCell.classList.add('duration')
          startCell.classList.add('start')
        }

        if (event.end) {
          const range = getDatesInRange(event.start, event.end)
          range.forEach((day) => {
            const durationCell = document.getElementById(`${day.toDateString()}-${item.id}`)
            if (durationCell) {
              durationCell.classList.add('duration')
            }
          })

          const end = document.getElementById(`${event.end.toDateString()}-${item.id}`)
          if (end) {
            end.classList.add('end')
          }
        }
      })
    })
  }, [resources])

  return (
    <div className="container">
      <table className="freeze-table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {daysInMonth.map((day) => (
              <th key={day.toDateString()}>{formatDate(day)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resources.map((item) => (
            <tr key={item.id} id={item.id}>
              <td id={item.title}>{item.title}</td>
              {daysInMonth.map((day) => (
                <td
                  key={`${day.toDateString()}-${item.id}`}
                  id={`${day.toDateString()}-${item.id}`}
                  className="event-cell"
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
