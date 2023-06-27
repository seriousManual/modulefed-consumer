import CountWidget from 'cha/CountWidget'
import { useNumbers } from 'cha/numberStore'

import Numbers from './Numbers'

function App() {
  const numbersQuery = useNumbers()

  const numbers = numbersQuery.isSuccess ? numbersQuery.data : []

  return (
    <div>
      <h1>ohey!</h1>

      <CountWidget />

      {numbers.map((nr, i) => {
        return <div key={i}>{nr}</div>
      })}

      <Numbers />
    </div>
  )
}

export default App
