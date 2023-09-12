import GradientPageHeader from "@/components/common/GradientPageHeader";
import ProjectItem from "@/components/projects/ProjectItem";
import { getProjects } from "@/lib/requests/getProjects"
import { Project } from "@/lib/types";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'My projects',
  description: 'Projects of Vlad Pelishenko',
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <>
      <GradientPageHeader>Projects</GradientPageHeader>
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-5 md:gap-5 lg:gap-5">
      {
        projects.map((project: Project) => (
          <ProjectItem project={project} key={project.id} />
        ))
      }
      </div>
    </>
  )
}
