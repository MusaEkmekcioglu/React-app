import './App.css'
import Questions from './Questions'
import { data } from './data'

function App() {
  console.log(data)

  return (
    <div className="App">
      <h2>app</h2>

      {data.map((item) => {
        return <Questions key={item.id} {...item} />
      })}
    </div>
  )
}

export default App
