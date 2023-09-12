type Props = {
  text: string
}

export default function Badge({text}: Props) {
  return (
    <div className="flex items-center h-6 w-fit bg-green-500 hover:bg-green-600 cursor-pointer text-white px-2 xs:text-xl xs:leading-6 rounded-full text-center">
      {text}
    </div>
  )
}
