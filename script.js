const container = document.getElementById("container");

function displayContent(data) {
  // This is to diplay list of Object Datatypes
  function display(item) {
    let result = item.map((jutsu) => `<li>${jutsu}</li>`).join(" ");
    return `<ul class="jutsu">${result}</ul>`;
  }

  // This is to diplay list of Object Datatypes
  function displayObj(obj) {
    let result = "";
    for (let i in obj) {
      if (i === "appearsIn") continue;
      result += `<li>${i[0].toUpperCase() + i.slice(1)} : ${obj[i]}</li>`;
    }
    return `<ul>${result}</ul>`;
  }

  container.innerHTML = `
          <div class="description personal">
            <h1 class="name">${data.name}</h1>
            <span>Personal</span> <br>
            ${data.personal.classification ? "Classification: " + data.personal.classification + "<br>" : ""}
            ${data.personal.clan ? "Clan: " + data.personal.clan + "<br>" : ""}
            ${data.personal.occupation ? "Occupation: " + data.personal.occupation + "<br>" : ""}
            ${data.personal.affiliation ? "Affiliation: " + data.personal.affiliation + "<br>" : ""}
            ${data.family ? "<span>Family:</span> " + displayObj(data.family) : ""}
            ${data.personal.species ? "Species: " + data.personal.species + "<br>" : ""}
            ${data.personal.sex ? "Gender: " + data.personal.sex + "<br>" : ""}
            ${data.personal.kekkeiGenkai ? "Kekkei Genkai: " + data.personal.kekkeiGenkai + "<br>" : ""}
            ${data.personal.jinchūriki ? "Jinchūriki: " + data.personal.jinchūriki + "<br>" : ""}
            ${data.personal.bloodType ? "Blood Type: " + data.personal.bloodType + "<br>" : ""}<br>
          </div>
          ${data.images[0] ? `<img src="${data.images[0]}" alt="${data.name}" class="img"/>` : "<div class='no-img'>Image Not Avaliable</div>"}
          
          <div class="description other">
            ${data.natureType ? "<span>Nature Type:</span> " + display(data.natureType) + "<br>" : ""}
            ${data.jutsu ? "<span>Jutsu:</span>" + display(data.jutsu) + "<br>" : ""}
            ${data.debut && data.debut.appearsIn ? "<span>Debut:</span> " + data.debut.appearsIn + displayObj(data.debut) : ""}
          </div>
    `;
}

function getCharacter() {
  // Making Https request
  fetch(`https://api.narutodb.xyz/character/${Math.floor(Math.random() * 1431)}`)
    .then((result) => result.json())
    .then((data) => {
      // console.log(data); // Log the response to the console
      displayContent(data);
    })
    .catch((err) => console.log("not found", err));
}

getCharacter();
