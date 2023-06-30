import { resources } from './assets/data'
import { Timeline } from './components'

function App() {
  return (
    <div className="app">
      <Timeline resources={resources} />
    </div>
  )
}

export default App
