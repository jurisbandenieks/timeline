import { resources } from './assets/data'
import { Resource, Timeline } from './components'

function App() {
  const handleClick = (data: Resource | undefined) => {
    console.log(data)
  }

  return (
    <div className="app">
      <Timeline resources={resources} onClick={handleClick} />
    </div>
  )
}

export default App
