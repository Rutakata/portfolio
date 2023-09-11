export async function getProjectDetails(id: string) {
  const response = await fetch(`${process.env.API_URL}/projects/${id}`, {
    method: "GET"
  })

  if (!response.ok) {
    console.log('error');
  }

  return await response.json();
}