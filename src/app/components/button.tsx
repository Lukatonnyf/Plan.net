import { useFormStatus } from "react-dom"

interface ButtonProps {
  text: string,
  className?: string,
  url?: string
}

export default function Button({ text, url, className = '' }: ButtonProps) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className={`px-2 py-1 max-w-full rounded-full  text-sm lg:px-7 lg:py-2 transition hover:scale-110 ${className}`}>
      {text}
    </button>
  )
};


