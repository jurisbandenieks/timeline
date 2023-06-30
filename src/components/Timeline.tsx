import { formatDate, getDaysInMonth, getYearAndMonth } from './utils'

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

  return (
    <div className="container">
      <table className="freeze-table">
        <thead>
          <tr>
            <th>&nbsp;</th>
            {daysInMonth.map((day) => (
              <th key={day.toUTCString()}>{formatDate(day)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resources.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
