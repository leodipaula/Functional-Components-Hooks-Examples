﻿import { useEffect, useState } from "react"

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! Você concluiu sua tarefa!');
    } else {
      setTarefa("Conclua a tarefa que está incompleta!")
    }
  }, [completed]);

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a tarefa</p>
      <button onClick={() => setCompleted(!completed)}>Concluir tarefa</button>
    </div>
  )
}

export default Tarefa