

interface ButtonProps {
  text: string,
  className?: string,
  url?: string,
  onClick?: () => void
}

export default function Button({ text, url, className = '', onClick }: ButtonProps) {


  return (
    <button

      onClick={onClick}
      type="submit"
      className={`px-2 py-1 max-w-full rounded-full  text-sm lg:px-7 lg:py-2 transition hover:scale-110 ${className}`}>
      {text}
    </button>
  )
};


