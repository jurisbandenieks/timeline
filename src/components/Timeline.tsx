import {
  formatDate,
  getDaysInMonth,
  getYearAndMonth,
  useTimelineEffect,
  Resource,
} from './'

interface Props {
  resources: Resource[]
  onClick: (data: Resource | undefined) => void
}

export const Timeline: React.FC<Props> = ({ resources, onClick }) => {
  const currYearAndMont = getYearAndMonth()
  const daysInMonth = getDaysInMonth(currYearAndMont)

  useTimelineEffect(resources)

  const handleClick = (event: React.MouseEvent<HTMLTableCellElement>) => {
    let data
    const { textContent } = event.currentTarget
    if (textContent) {
      data = JSON.parse(textContent as string)
    }
    onClick(data)
  }

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
                  onClick={handleClick}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
