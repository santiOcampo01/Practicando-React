import { Square } from './Square'

interface WinnerModalProps {
  winner: string | null | boolean
  resetGame: () => void
}

export const WinnerModal: React.FC<WinnerModalProps> = ({ winner, resetGame }) => {
  if (winner == null) return null
  const  winnerText = winner == false ? 'Empate' : `Ganador:`
  localStorage.removeItem('board')
  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">
            {winner && <Square><img src={winner} /> </Square>}
            </header>
        <footer>
          <button onClick={resetGame}>Reiniciar</button>
        </footer>
      </div>
    </section>
  )
}
