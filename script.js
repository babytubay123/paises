// Función asíncrona para obtener todos los países
async function fetchCountries() {
  try {
    // Realizamos la solicitud a la API para obtener todos los países
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countriesList = document.getElementById("countries-list");

    // Itera sobre todos los países y crea un elemento para cada uno
    data.forEach((country) => {
      const countryCard = document.createElement("div");
      countryCard.classList.add("country-card");

      // Crea un elemento de imagen para la bandera
      const flagImg = document.createElement("img");
      flagImg.src = country.flags.png; // Usa la URL de la bandera
      flagImg.alt = `Bandera de ${country.name.common}`;

      // Crea un párrafo para mostrar el nombre y la región
      const countryName = document.createElement("p");
      countryName.textContent = `Nombre: ${country.name.common}`;

      const countryRegion = document.createElement("p");
      countryRegion.textContent = `Región: ${country.region}`;

      // Crea un párrafo para mostrar los idiomas
      const countryLanguages = document.createElement("p");
      const languages = Object.values(country.languages || {}).join(", "); // Obtiene los idiomas y los une en una cadena
      countryLanguages.textContent = `Idiomas: ${languages}`;

      // Añade la imagen y el texto al "countryCard"
      countryCard.appendChild(flagImg);
      countryCard.appendChild(countryName);
      countryCard.appendChild(countryRegion);
      countryCard.appendChild(countryLanguages); // Añade la información de idiomas

      // Añade el "countryCard" al contenedor de países
      countriesList.appendChild(countryCard);
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llama a la función para obtener los países
fetchCountries();
