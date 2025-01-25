document.addEventListener("DOMContentLoaded", () => {
    // Constants for weather data
    const TEMPERATURE = 31; // in °C
    const WIND_SPEED = 7; // in km/h
  
    // Function to calculate wind chill factor
    const calculateWindChill = (temp, wind) => {
      return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    };
  
    // Function to determine if wind chill calculation is applicable
    const isWindChillApplicable = (temp, wind) => {
      return temp <= 10 && wind > 4.8;
    };
  
      // Function to create a table row
      const createTableRow = (label, value) => {
        const row = document.createElement("tr");
        const labelCell = document.createElement("td");
        labelCell.className = "label";
        labelCell.innerHTML = `<b>${label}:</b>`;
  
        const valueCell = document.createElement("td");
        valueCell.textContent = value;
        
        row.appendChild(labelCell);
        row.appendChild(valueCell);
        return row;
      };
  
    // Calculate and display wind chill
    const windChillValue = isWindChillApplicable(TEMPERATURE, WIND_SPEED)
      ? `${calculateWindChill(TEMPERATURE, WIND_SPEED).toFixed(2)} °C`
      : "N/A";
  
    const windChillRow = createTableRow("Wind Chill", windChillValue);
    document.querySelector(".weather table").appendChild(windChillRow);
  });
  
  
  // Footer information
  const updateFooter = () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    const copyrightYearElement = document.getElementById('currentyear');
    const lastModifiedElement = document.getElementById('lastModified');
  
    if(copyrightYearElement) {
      copyrightYearElement.textContent = currentYear;
    }
      if(lastModifiedElement) {
          lastModifiedElement.textContent = `Last update: ${lastModified}`;
      }
  };
  
  updateFooter();