type Props = {
  children: string
}

export default function GradientPageHeader({children}: Props) {
  return (
    <h1 className="font-extrabold leading-normal text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xs:mb-10 sm:mb-8 xs:text-center sm:text-left pl-0">
      {children}
    </h1>
  )
}
