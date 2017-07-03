//Create an array of objects that represents famous people.
let person = [
{
  title: "Actor",
  name: "Bruce Lee",
  bio: "Lee Jun-fan, known professionally as Bruce Lee, was a Hong Kong and American actor, film director, martial artist, philosopher and founder of the martial art Jeet Kune Do. Lee was the son of Cantonese opera star Lee Hoi-chuen.",
  image: "https://s-media-cache-ak0.pinimg.com/736x/20/f0/2d/20f02df71ec8907b4f36d9cbd27c6cb7.jpg",
  lifespan: {
    birth: 1940,
    death: 1973
  }
},

{
  title: "Professional Boxer",
  name: "Muhammad Ali",
  bio: "Muhammad Ali was an American professional boxer and activist. He is widely regarded as one of the most significant and celebrated sports figures of the 20th century.",
  image: "https://peopledotcom.files.wordpress.com/2016/08/muhammad-ali-z-600.jpg?w=600",
  lifespan: {
    birth: 1942,
    death: 2016
  }
}
]

//Insert each person card into the DOM
for (let i = 0; i < person.length; i++) {
  document.getElementById("container").innerHTML +=
      `<article class="person-card">
        <div class="profile">
          <img src="${person[i].image}" width="200px" height="200px" alt="profile photo">
          <header><h2>${person[i].name} | ${person[i].title}</h2></header>
          <footer>${person[i].lifespan.birth} - ${person[i].lifespan.death}</footer>
        </div>
        <div class="bio">
          <section class="person--card">${person[i].bio}</section>
        </div>
      </article>`
}

let personContainer = document.getElementsByClassName("person-card");
let searchBar = document.getElementById("search-bar");

// Event listeners are created
for (var i = 0; i < personContainer.length; i++) {
  personContainer[i].addEventListener("click", function () {
    searchBar.value = "";
    searchBar.focus();
    })
  searchBar.addEventListener("keyup", function() {
    console.log(personContainer[i]);
    personContainer[i].innerHTML = searchBar.value;
  });
};
