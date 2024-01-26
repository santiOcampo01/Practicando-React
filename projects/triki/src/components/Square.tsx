interface TrikiProps {
  updateBoard: (value: unknown) => void
  index: number | string
  children: string | JSX.Element | JSX.Element[]
  isSelected: boolean | null
}



export const Square: React.FC<TrikiProps> = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
