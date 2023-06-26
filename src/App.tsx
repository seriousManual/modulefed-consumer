import { Numbers, useNumbers } from 'cha'

import MyNumbers from './MyNumbers'

function App() {
  const numbersQuery = useNumbers()

  const numbers = numbersQuery.isSuccess ? numbersQuery.data : []

  return (
    <div>
      <h1>ohey!</h1>

      {numbers.map((nr, i) => {
        return <div key={i}>{nr}</div>
      })}

      <Numbers />
      <MyNumbers />
    </div>
  )
}

export default App
