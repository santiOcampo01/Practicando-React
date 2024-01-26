import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants.ts'
import { checkWinner, checkEndgame } from './logic/board.ts'
import { WinnerModal } from './components/WiinnerModal.tsx'



const App = () => {

  const [board, setBoard] = useState(() => {
    const getBoardStorage = window.localStorage.getItem('board')
    return getBoardStorage ? JSON.parse(getBoardStorage) : 
    Array(9).fill(null)
  })
  const [click, setClick] = useState(() => {
    const getClickStoraged = window.localStorage.getItem('click')
    return getClickStoraged ??
    TURNS.X
  })
  const [winner, setWinner] = useState<string | null | boolean>(null)

  const  resetGame = () => {
    setBoard(Array(9).fill(null))
    setClick(TURNS.X)
    setWinner(null)
    localStorage.removeItem('board')
  }

  const updateBoard = (index: unknown) => {
    if (board[index as number] !== null || winner) return
    const newBoard = [...board]
    newBoard[index as number] = click
    setBoard(newBoard)
    const newTurn = click === TURNS.X ? TURNS.O : TURNS.X
    setClick(newTurn)
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('click', newTurn)
    const newWinner = checkWinner(newBoard as string[])
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    }else if (checkEndgame(newBoard)){
      setWinner(false)
    }
  }

  const conditionImageOrText = (boardImg: string | null) => {
    if (boardImg === null) {
      return null
    } else {
      return <img src={boardImg} />
    }
  }


  return (
    <main className="board">
      <h1>TRIKI</h1>
      <button
        onClick={() => {
          resetGame()
        }}
      >
        Reiniciar
      </button>
      <section className="game">
        {board.map((_, i) => (
          <Square key={i} index={i} updateBoard={updateBoard} isSelected={null}>
            {conditionImageOrText(board[i])}
          </Square>
        ))}
      </section>
      <section className="turn">
        <Square isSelected={click === TURNS.X}>
          <img src={TURNS.X}></img>
        </Square>
        <Square isSelected={click === TURNS.O}>
          <img src={TURNS.O}></img>
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
