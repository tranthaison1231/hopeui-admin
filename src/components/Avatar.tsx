interface AvatarProps {
  url: string
  onRemove?: () => void
}

const Avatar = ({ url, onRemove }: AvatarProps) => {
  return (
    <div className="relative w-fit">
      <img src={url} className="w-24 h-24 rounded-full" alt="avatar" />
      {onRemove && (
        <button
          className="btn-error absolute top-0 right-2 w-5 h-5 rounded-full text-white"
          type="button"
          onClick={onRemove}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Avatar
