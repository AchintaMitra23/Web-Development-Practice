import React from 'react'
interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={event => props.handleClick(event, 1)}>Click</button>
    </div>
  )
}

export default Button;
