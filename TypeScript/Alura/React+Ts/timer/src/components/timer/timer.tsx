interface TimerProps{
  timerCount: string[]
}

export function Timer({timerCount}: TimerProps){

  return (
    <>
      {
        timerCount.map((item, index) => {
          return <span key={index}>{item}</span>
        })
      }
    </>
  )

}