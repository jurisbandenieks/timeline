import { resources } from './data'
import { MonthYear, Resource, Timeline } from './'
import { ClickData, EventManager } from '@event-manager/react'

function App() {
  const handleClick = (data: ClickData | Resource | undefined) => {
    console.log(data)
  }

  const handleUpdateDate = (date: MonthYear) => {
    console.log(date)
  }

  return (
    <div className="app">
      <Timeline
        resources={resources}
        onClick={handleClick}
        onUpdateDate={handleUpdateDate}
      />

      <EventManager
        resources={resources}
        tableId={2}
        showTooltip
        onClick={handleClick}
        onUpdateDate={handleUpdateDate}
      />
    </div>
  )
}

export default App
