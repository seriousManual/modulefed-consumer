import { useNumbers } from 'cha'

function MyNumbers() {
  const numbersQuery = useNumbers()

  if (numbersQuery.isLoading) {
    return <div>loading ...</div>
  }

  return (
    <div>
      meine eigene number impl mit dem state hook!
      {
        numbersQuery.data.map(nr => {
          return <div>{nr}</div>
        })
      }
    </div>
  )
}

export default MyNumbers