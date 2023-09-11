import { Project } from '@/lib/types'
import React from 'react'

type Props = {
  project: Project
}

export default function ProjectItem({project}: Props) {
  return (
    <div className='bg-slate-600 rounded-md lg:basis-1/3 md:basis-1/2 xs:h-fill md:h-56 p-2'>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )
}
