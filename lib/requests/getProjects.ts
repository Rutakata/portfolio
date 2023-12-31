import { env } from "process";

export async function getProjects() {
  const response = await fetch(`${process.env.API_URL}/projects`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    },
    next: {
      revalidate: 10
    }
  })

  if (!response.ok) {
    console.log('error')
  }

  return await response.json();
}