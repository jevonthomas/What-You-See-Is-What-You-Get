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
          <section>${person[i].bio}</section>
        </div>
      </article>`
}

// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
let personCard = document.getElementsByClassName("person-card");
let inputBar = document.getElementById("search-bar");
for (let i = 0; i < personCard.length; i++) {
//add event listener for person card click to bring the input bar into focus
  personCard[i].addEventListener("click", function() {
    inputBar.focus();
    inputBar.value = "";
    //removes the active class from any cards that currently has the class
    for (let j = 0; j < personCard.length; j++) {
      personCard[j].classList.remove("active");
    }
    //adds the active class to the clicked card
    personCard[i].classList.toggle("active");
  })
}

//add event listener for the enter key to clear the input bar after being pressed
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    inputBar.focus();
    inputBar.value = "";
  }
})

//assign the card with the active class added to it to a variable
let activeCard = document.getElementsByClassName("active");
for (let j = 0; j < personCard.length; j++) {
  //add keyup event for input bar
  inputBar.addEventListener("keyup", function(){
  //input value will appear in .bio section element
    activeCard[j].childNodes[3].childNodes[1].innerHTML = document.getElementById("search-bar").value;
  })
}