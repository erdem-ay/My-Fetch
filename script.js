let random = "";
//PHOTO
let myPhoto = document.querySelector(".photo");

//ICONS
let myPerson = document.querySelector(".person");
let myEmail = document.querySelector(".email");
let myDate = document.querySelector(".date");
let myAddress = document.querySelector(".address");
let myPhone = document.querySelector(".phone");
let myPassword = document.querySelector(".password");

//BUTTON
let myButton = document.querySelector(".change");

//Result
let result = document.querySelector("#result");

let myGetFetch = async (url) => {
  let response = await fetch(url);
  response = await response.json();
  random = response;
  myPhoto.src =random.results[0].picture.large;
  result.innerHTML =
    "HI, My Name is" +
    "<br>" +
    random.results[0].name.first +
    " " +
    random.results[0].name.last;
};
myGetFetch("https://randomuser.me/api/");

myPerson.onmouseover = function () {
  result.innerHTML =
    "HI, My Name is" +
    "<br>" +
    random.results[0].name.first +
    " " +
    random.results[0].name.last;
};

myEmail.onmouseover = function () {
  result.innerHTML = "";
  result.innerHTML += "My email address is" + "<br>" + random.results[0].email;
};

myDate.onmouseover = function () {
  result.innerHTML = "";
  result.innerHTML +=
    "My birthday is" + "<br>" + random.results[0].dob.date.substring(0,10);
};

myAddress.onmouseover = function () {
  result.innerHTML = "";
  result.innerHTML +=
    "My address is" +
    "<br>" +
    random.results[0].location.postcode +
    " " +
    random.results[0].location.city +
    " " +
    random.results[0].location.country;
};

myPhone.onmouseover = function () {
  result.innerHTML = "";
  result.innerHTML += "My phone number is" + "<br>" + random.results[0].phone;
};

myPassword.onmouseover = function () {
  result.innerHTML = "";
  result.innerHTML +=
    "My password is" + "<br>" + random.results[0].login.password;
};



function changePerson() {
  myGetFetch("https://randomuser.me/api/");
}
