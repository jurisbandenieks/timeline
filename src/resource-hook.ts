import { useEffect } from 'react'
import { MonthYear, Resource, getDatesInRange } from './'

export const useTimelineEffect = (
  resources: Resource[],
  monthYear: MonthYear,
) => {
  useEffect(() => {
    resources.forEach((item) => {
      item.events.forEach((event) => {
        const startCell = document.getElementById(
          `${event.start.toDateString()}-${item.id}`,
        )
        if (startCell) {
          startCell.classList.add('duration')
          startCell.classList.add('start')
          startCell.style.backgroundColor = event.color ?? '#000'
          startCell.textContent = JSON.stringify(item)
        }

        if (event.end) {
          const range = getDatesInRange(event.start, event.end)
          range.forEach((day) => {
            const durationCell = document.getElementById(
              `${day.toDateString()}-${item.id}`,
            )
            if (durationCell) {
              durationCell.classList.add('duration')
              durationCell.style.backgroundColor = event.color ?? '#000'
              durationCell.textContent = JSON.stringify(item)
            }
          })

          const end = document.getElementById(
            `${event.end.toDateString()}-${item.id}`,
          )
          if (end) {
            end.classList.add('end')
            end.style.backgroundColor = event.color ?? '#000'
            end.textContent = JSON.stringify(item)
          }
        }
      })
    })
  }, [resources, monthYear])
}
