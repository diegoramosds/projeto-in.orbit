export async function createGoalCompletion(goalId: string) {
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';

  try {
    const response = await fetch(`${API_URL}/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ goalId }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Goal completion created:', data);
  } catch (error) {
    console.error('Failed to create goal completion:', error);
  }
}
