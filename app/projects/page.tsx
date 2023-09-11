import ProjectItem from "@/components/projects/ProjectItem";
import { getProjects } from "@/lib/requests/getProjects"
import { Project } from "@/lib/types";

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main className="flex-grow xs:p-4 sm:p-10">
      <h1>Projects</h1>
      <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-5 md:gap-5 lg:gap-5">
      {
        projects.map((project: Project) => (
          <ProjectItem project={project} key={project.id} />
        ))
      }
      </div>
    </main>
  )
}
