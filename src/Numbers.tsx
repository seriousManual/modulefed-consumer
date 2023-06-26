import { useNumbers } from 'cha/numberStore'

function Numbers() {
  const numbersQuery = useNumbers()

  if (numbersQuery.isLoading) {
    return <div>loading ...</div>
  }

  return (
    <div>
      {
        numbersQuery.data.map(nr => {
          return <div>{nr}</div>
        })
      }
    </div>
  )
}

export default Numbers