const url = 'https://dog.ceo/api/breeds/image/random';

async function fetchDog() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      displayDog(data.message);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  function displayDog(imageUrl) { 
    const img = document.createElement('img'); 
    img.src = imageUrl;
    img.alt = "Random dog photo";
    img.width = 500;
    document.querySelector('#dog').appendChild(img); 
   }