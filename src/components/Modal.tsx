interface Props {
  children: React.ReactNode
  title: string
  onOk?: () => void
}

const Modal = ({ children, title, onOk }: Props) => {
  return (
    <dialog id="modal" className="modal">
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="py-4">{children}</div>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={onOk} type="button">
            OK
          </button>
          <button className="btn">Close</button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  )
}

export default Modal
