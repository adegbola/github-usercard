/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell"
];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>




*/

function createComponents(UserInfo) {
  let cardClass = document.createElement("div");
  let imgClass = document.createElement("img");
  let cardInfoClass = document.createElement("div");
  let nameClass = document.createElement("h3");
  let userName = document.createElement("p");
  let location = document.createElement("p");
  let pProfile = document.createElement("p");
  let anchor = document.createElement("a");
  let pfollowers = document.createElement("p");
  let pfollowing = document.createElement("p");
  let bio = document.createElement("p");

  cardClass.appendChild(imgClass);
  cardClass.appendChild(cardInfoClass);
  cardInfoClass.appendChild(nameClass);
  cardInfoClass.appendChild(userName);
  cardInfoClass.appendChild(location);
  cardInfoClass.appendChild(pProfile);
  pProfile.appendChild(anchor);
  cardInfoClass.appendChild(pfollowers);
  cardInfoClass.appendChild(pfollowing);
  cardInfoClass.appendChild(bio);

  cardClass.classList.add("card");
  cardInfoClass.classList.add("card-info");
  nameClass.classList.add("name");
  userName.classList.add("username");

  imgClass.src = UserInfo.avatar_url;
  nameClass.textContent = UserInfo.name;
  userName.textContent = UserInfo.login;
  location.textContent = UserInfo.location;
  anchor.href = UserInfo.html_url;
  pfollowers.textContent = UserInfo.followers;
  pfollowing.textContent = UserInfo.following;
  bio.textContent = UserInfo.bio;

  return cardClass;
}

const myCard = document.querySelector(".cards");

console.log(myCard);

axios
  .get("https://api.github.com/users/adegbola")
  .then(response => {
    myCard.appendChild(createComponents(response.data));
  })

  .catch(error => {
    console.log("Could retrieve data");
  });

followersArray.forEach(user => {
  axios.get("https://api.github.com/users/" + user).then(response => {
    myCard.appendChild(createComponents(response.data));
  });
});
