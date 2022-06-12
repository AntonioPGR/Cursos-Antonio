import { Button } from "../button/button";
import style from "./timerContainer.module.scss";
import { Timer } from "../timer/timer";

interface TimerProps{
  timing: string;
}

export function TimerContainer({timing}: TimerProps){

  const timerCount = timing.split("");

  return(
    <div className={style.container}>
      
      <p>escolha um card e inicie o cronômetro</p>

      <div className={style.timer}>
          <Timer timerCount={timerCount} />
      </div>

      <Button onClickEvent={() => null}>
        começar
      </Button>

    </div>
  )

}