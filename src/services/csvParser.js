export const parseCSVFile = async (csvFilePath) => {
    try {
      const response = await fetch(csvFilePath);
      if (!response.ok) {
        throw new Error('Failed to fetch the CSV file');
      }
  
      const csvText = await response.text();
      return parseCSV(csvText);
    } catch (error) {
      console.error('Error fetching and parsing CSV:', error);
      return [];
    }
  };
  
  // Function to parse CSV text into an array of objects
  const parseCSV = (csvText) => {
    const rows = csvText.split('\n').filter(row => row.trim() !== '');
    const headers = rows[0].split(',').map(header => header.trim());
    return rows.slice(1).map(row => {
      const values = row.split(',').map(value => value.trim());
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index];
        return obj;
      }, {});
    });
  };




