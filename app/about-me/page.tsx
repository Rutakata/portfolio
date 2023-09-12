import GradientPageHeader from '@/components/common/GradientPageHeader';
import Photo from '../../public/profile-photo.jpg';
import Image from 'next/image';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About me',
  description: 'Information about Vlad Pelishenko',
}

export default function AboutMe() {
  return (
    <main className="flex-grow xs:px-4 xs:pt-7 sm:p-10">
      <GradientPageHeader>Who am I?</GradientPageHeader>
      {/* <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Who am I?</h1> */}
      <div className='flex gap-5 xs:flex-col sm:flex-row'>
        <Image src={Photo} alt="My photo" width={400} height={400} placeholder='blur' className='rounded-full cover' />
        <div className='rounded-lg p-4 text-xl h-fill'>
          <h2 className='xs:text-center sm:text-left text-2xl text-cyan-500 font-bold pb-2'>My name is Vlad</h2>
          <p className='xs:text-center sm:text-left'>
            I am 21. Currently I am a student in Taras Shevchenko Kyiv 
            National University. What do i learn? Computer Science! Do I like it?
            <strong> Yes!</strong> What profession do i look for? Front-end Developer!
          </p>
        </div>
      </div>
    </main>
  )
}
