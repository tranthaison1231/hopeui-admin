interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: InputProps): JSX.Element => {
  return (
    <button
      {...props}
      className={`py-2 px-16 bg-primary rounded-[4px] cursor-pointer hover:bg-[#4a66f3]
      font-normal text-base leading-7 text-white ${props.className ?? ''}`}
    />
  )
}

export default Button
