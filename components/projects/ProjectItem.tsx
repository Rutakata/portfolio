import { Project } from '@/lib/types'
import Link from 'next/link'
import React from 'react'

type Props = {
  project: Project
}

export default function ProjectItem({project}: Props) {
  return (
    <div className='bg-slate-600 rounded-md lg:basis-1/2 md:basis-1/2 xs:h-fill md:h-56 p-2'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Link 
        href={`/projects/${project.id}`}
        className='bg-slate-800 rounded-md w-fit h-fit p-2 dark:text-white mt-3 block'>
        Details
      </Link>
    </div>
  )
}
