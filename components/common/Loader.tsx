import { LuLoader } from 'react-icons/lu';

export default function Loader() {
  return (
    <main className='flex-grow flex justify-center'>
      {/* <h1 className='text-2xl text-center mb-5'>Please wait...</h1> */}
      <div className='animate-spin flex justify-center items-center'>
        <LuLoader size={35} />
      </div>
    </main>
  )
}
