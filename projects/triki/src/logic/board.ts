import { WINNER_COMBINATIONS } from '../constants'

export const checkWinner = (boardToCheck: string[]) => {
  for (const combination of WINNER_COMBINATIONS) {
    const [a, b, c] = combination
    if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
      return boardToCheck[a]
    }
  }
  return null
}


 export const checkEndgame = (boardToCheck: string[]) => {
    return boardToCheck.every(square => square !== null)
  }

  
