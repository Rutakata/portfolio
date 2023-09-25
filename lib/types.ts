export type Project = {
  id: string,
  title: string,
  description: string,
  tech_stack: string[],
  links: {
    [key: string]: string
  }
}