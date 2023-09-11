import { getProjectDetails } from "@/lib/requests/getProjectDetails";
import { getProjects } from "@/lib/requests/getProjects";
import { Project } from "@/lib/types";

type Props = {
  params: {
    projectId: string
  }
}

export async function generateStaticParams() {
  const projects: Project[] = await getProjects();
  return projects.map((project: Project) => {
      projectId: project.id
  });
}

export default async function ProjectDetails({params}: Props) {
  const projectDetaild: Project = await getProjectDetails(params.projectId);

  return (
    <main className="flex-grow xs:p-4 sm:p-10">
      <h1>{projectDetaild.title}</h1>
      <h2>{projectDetaild.description}</h2>
    </main>
  )
}
