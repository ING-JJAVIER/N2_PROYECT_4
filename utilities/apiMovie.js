export async function apiMovie() {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      const movie = data.entries.filter((item) => item.programType === 'movie');
      
      return movie
  
    } catch (error) {
      console.error('Error processing data:', error);
      return [];
    }
  }J