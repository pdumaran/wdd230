const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach((prophet) => {
      // Create the card and each elelement needed in the card
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let birthdate = document.createElement('p');
      let birthplace = document.createElement('p');
      let image = document.createElement('img');
      
      // Populate the elements with the from the JSON file
      h2.innerHTML = `${prophet.name} <span class="highlight">${prophet.lastname}</span>`;
      birthdate.innerHTML = `Date of Birth: ${prophet.birthdate}`;
      birthplace.innerHTML = `Place of Birth: ${prophet.birthplace}`;
      
      // Build the prophet card
      card.appendChild(h2);
      card.appendChild(birthdate);
      card.appendChild(birthplace);
      card.appendChild(image);

      // Now output to the html document
      document.querySelector('div.cards').appendChild(card);
    });
  });