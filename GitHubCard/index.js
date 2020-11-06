/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github usernames:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

    const followersArr = [
      'tetondan',
      'dustinmyers',
      'justsml',
      'luishrd',
      'bigknell',
    ];

    // Grab div with "cards" class
    let cards = document.querySelector(".cards");

    // Make a new user card
    function makeUserCard(userData) {

        // Create card container div
        let cardContainer = document.createElement("div");
        // Add "card" class to card container div
        cardContainer.classList.add("card");

        // Create avatar image placeholder
        let img = document.createElement("img");
        // Fill in avatar image source
        img.src = userData.avatar_url;

        // Create card info div
        let cardInfo = document.createElement("div");
        cardInfo.classList.add("card-info");

        // Create name h3 heading
        let name = document.createElement("h3");
        // Add "name" class to h3 heading
        name.classList.add("name");
        // Fill in user's name
        name.textContent = userData.name;

        // Create a username paragraph place holder
        let userName = document.createElement("p");
        // Add a username class to the userName paragraph
        userName.classList.add("username");
        // Fill in username text
        userName.textContent = userData.login;

        // Create user location paragraph tag
        let location = document.createElement("p");
        // Fill in user location text
        location.textContent = `Location: ${userData.location}`;

        // Create profile placeholder
        let profile = document.createElement("p");
        // Create profile anchor tag
        let profileLink = document.createElement("a");

        // Set profile link URL
        profileLink.href = userData.html_url;
        // Fill in profile link text
        profileLink.textContent = userData.html_url;

        // Fill in profile text
        profile.textContent = "Profile: ";
        // Append profile link to profile
        profile.append(profileLink);

        // Create followers paragraph placeholder
        let followers = document.createElement("p");
        // Cretae following paragraph placeholder
        let following = document.createElement("p");

        // Fill in followers and following data
        followers.textContent = `Followers: ${userData.followers}`;
        following.textContent = `Following: ${userData.following}`;

        // Create bio paragraph placeholder
        let bio = document.createElement("p");
        // Fill in user bio text
        bio.textContent = userData.bio;

        // Create calendar div
        let calendar = document.createElement("div");
        // Style calendar div
        calendar.setAttribute("style", "margin-top: 20px");

        // Append new card info to a new card
        cardInfo.append(
            name,
            userName,
            location,
            profile,
            followers,
            following,
            bio,
            calendar
        );

    // Append the new card to the card container
    cardContainer.append(img, cardInfo);            

    new GitHubCalendar(calendar, userData.login);

    return cardContainer;
}

makeUserCard(Grahamattic);


