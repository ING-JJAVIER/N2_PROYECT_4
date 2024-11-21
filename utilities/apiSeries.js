export async function apiSeries() {
  try {
    const response = await fetch('/data.json');
    const data = await response.json();
    const series = data.entries.filter((item) => item.programType === 'series');
  
    return series

  } catch (error) {
    console.error('Error processing data:', error);
    return [];
  }
}J