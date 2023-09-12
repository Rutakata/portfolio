import GradientPageHeader from '@/components/common/GradientPageHeader';
import Photo from '../../public/profile-photo.jpg';
import Image from 'next/image';
import { Metadata } from 'next';
import Badge from '@/components/common/Badge';


export const metadata: Metadata = {
  title: 'About me',
  description: 'Information about Vlad Pelishenko',
}

export default function AboutMe() {
  const skills = ['TS', 'JS', 'React.js', 'Next.js', 'Redux', 'HTML', 'CSS', 'MongoDB', 'PostgresQL', 'Firebase', 'GraphQL'];

  return (
    <>
      <GradientPageHeader>Who am I?</GradientPageHeader>
      <div className='flex gap-5 flex-col'>
        <div>
          <Image src={Photo} alt="My photo" width={400} height={400} placeholder='blur' className='rounded-full mx-auto' />
        </div>
        <div className='rounded-lg p-4 text-xl h-fill basis-1/3'>
          <h2 className='xs:text-center sm:text-left text-2xl text-cyan-500 font-bold pb-2'>My name is Vlad</h2>
          <p className='xs:text-center sm:text-left'>
            I'm a developer, facinated with modern front-end
            technologies. Currently looking for a front-end developer position.
            My goal is to progress every day!
          </p>
          <div className='flex gap-2 overflow-x-scroll'>
            My skills:
            { skills.map((skill: string) => <Badge text={skill}/>) }
          </div>
        </div>
      </div>
    </>
  )
}
