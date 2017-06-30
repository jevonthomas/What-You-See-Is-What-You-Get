//Create an array of objects that represents famous people.
let person = [
{
  title: "Actor",
  name: "Bruce Lee",
  bio: "Lee Jun-fan, known professionally as Bruce Lee, was a Hong Kong and American actor, film director, martial artist, philosopher and founder of the martial art Jeet Kune Do. Lee was the son of Cantonese opera star Lee Hoi-chuen.",
  image: "https://en.wikipedia.org/wiki/Bruce_Lee#/media/File:Bruce_Lee_1973.jpg",
  lifespan: {
    birth: 1940,
    death: 1973
  }
},

{
  title: "Professional Boxer",
  name: "Muhammad Ali",
  bio: "Muhammad Ali was an American professional boxer and activist. He is widely regarded as one of the most significant and celebrated sports figures of the 20th century.",
  image: "https://en.wikipedia.org/wiki/Muhammad_Ali#/media/File:Muhammad_Ali_NYWTS.jpg",
  lifespan: {
    birth: 1942,
    death: 2016
  }
}
]

for (let i = 0; i < person.length; i++) {
  document.getElementsByClassName("container")[0].innerHTML +=
      `<article class="person-card">
        <div class="profile">
          ${person.image} width="200px" height="200px" alt="profile photo">
          <header><h2>${person.name} | ${person.title}</h2></header>
          <footer>${person.lifespan} - ${person.lifespan}</footer>
        </div>
        <div class="bio">
          <section>${person.bio}</section>
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
    //add keyup event for input bar
    inputBar.addEventListener("keyup", function(){
      //input value will appear in .bio section element
      event.target.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[3].childNodes[3].childNodes[1].innerHTML = document.getElementById("search-bar").value;
    })
  })
}
