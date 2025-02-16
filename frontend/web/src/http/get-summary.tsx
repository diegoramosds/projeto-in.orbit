type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}


export async function getSummary(): Promise<SummaryResponse> {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';
  const response = await fetch(`${API_URL}/summary`)
  const data = await response.json()

  return data.summary
}