const placeId = "TU_PLACE_ID";
const apiKey = "TU_API_KEY";

const url =
`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

fetch(url)
.then(res => res.json())
.then(data => {

const reviews = data.result.reviews;

const container = document.getElementById("reviews");

reviews.forEach(r => {

const div = document.createElement("div");

div.classList.add("review");

div.innerHTML = `

<p><strong>${r.author_name}</strong></p>

<p>${r.text}</p>

<p>⭐ ${r.rating}</p>

`;

container.appendChild(div);

});

});