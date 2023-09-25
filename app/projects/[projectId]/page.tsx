import Badge from "@/components/common/Badge";
import CustomLink from "@/components/common/CustomLink";
import GradientPageHeader from "@/components/common/GradientPageHeader";
import { getProjectDetails } from "@/lib/requests/getProjectDetails";
import { getProjects } from "@/lib/requests/getProjects";
import { Project } from "@/lib/types";
import { text } from "stream/consumers";

type Props = {
  params: {
    projectId: string
  }
}

export const revalidate = 60;

export async function generateStaticParams() {
  const projects: Project[] = await getProjects();
  return projects.map((project: Project) => {
      projectId: project.id
  });
}

export default async function ProjectDetails({params}: Props) {
  const projectDetails: Project = await getProjectDetails(params.projectId);

  return (
    <>
      <GradientPageHeader>{projectDetails.title}</GradientPageHeader>
      <p className="text-2xl pb-4">
        {projectDetails.description}
      </p>
      <div className="flex gap-2 xs:overflow-x-auto sm:overflow-y-hidden">
        Used technologies:
        {
          projectDetails.tech_stack.map((tech: string) => (
            <Badge text={tech} key={tech} />
          ))
        }
      </div>
      <div>
        <h2>Links</h2>
        <div className="flex flex-col gap-2 w-[20%]">
        {  
          Object.entries(projectDetails.links)
            .map((entry: string[]) => <CustomLink href={entry[1]} text={entry[0]} newTab={true} />)
        }
        </div>
      </div>
    </>
  )
}
