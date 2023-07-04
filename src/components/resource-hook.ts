import { useEffect } from 'react'
import { Resource, getDatesInRange } from './'

export const useTimelineEffect = (resources: Resource[]) => {
  useEffect(() => {
    resources.forEach((item) => {
      item.events.forEach((event) => {
        const startCell = document.getElementById(
          `${event.start.toDateString()}-${item.id}`,
        )
        if (startCell) {
          startCell.classList.add('duration')
          startCell.classList.add('start')
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
              durationCell.textContent = JSON.stringify(item)
            }
          })

          const end = document.getElementById(
            `${event.end.toDateString()}-${item.id}`,
          )
          if (end) {
            end.classList.add('end')
            end.textContent = JSON.stringify(item)
          }
        }
      })
    })
  }, [resources])
}
