
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps): JSX.Element => {
  return <input {...props} className={`flex border-sky-600 rounded-md border-2 mt-2 mb-4 p-2 outline-none ${props.className ?? ''}`} />
}

export default Input
