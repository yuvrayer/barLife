const userNameLoggedIn = JSON.parse(localStorage.getItem(`user`));
// document.getElementById(`h4`).innerHTML = `welcome to the app, user: ${userNameLoggedIn[0].userName}`;


//saving description
const saveDescriptionButton = document.getElementById('saveDescription')
saveDescriptionButton.addEventListener('click', event => {
    event.preventDefault();
    saveToLogInInfo("description", "shortDescription");
})


//present the picture, saving picture
const savePicture = document.getElementById(`savePicture`)
savePicture.addEventListener(`click`, event => {
    event.preventDefault();
    //present
    const barPicture = document.getElementById(`barPicture`)
    document.getElementById(`picture`).innerHTML = `<img src="${barPicture.value}"></img>`
    //save
    saveToLogInInfo("url", "barPicture");
    barPicture.innerHTML = ``;
})


//load the DOM from the storage
const loadStorage = () => {

    document.getElementById(`shortDescription`).innerHTML = JSON.parse(localStorage.getItem(`user`))[0].description //description
    const pictureUrl = JSON.parse(localStorage.getItem(`user`))[0].url //url
    document.getElementById(`picture`).innerHTML = `<img src="${pictureUrl}"></img>` //image


    //number of stars (out of 5 stars)
    // const numberOfStars = +localStorage.getItem(`user`)[0].rating
    const numberOfStars = +prompt(`number of stars`)
    const starToGlass = color => `<div class="glyphicon glyphicon-glass" style="color: ${color}"> </div>`
    document.getElementById(`rating`).innerHTML = starToGlass("yellow").repeat(numberOfStars) + starToGlass("black").repeat(5 - numberOfStars)
}

loadStorage();


//save the new data to the user, log in info
const saveToLogInInfo = (property, propertyLocation) => {
    let data = JSON.parse(localStorage.getItem(`user`));
    data[0][property] = document.getElementById(propertyLocation).value
    localStorage.setItem(`user`, JSON.stringify(data))

    const currentLogInInfoInStorage = JSON.parse(localStorage.getItem('logInInfo'))
    const index = (currentLogInInfoInStorage.findIndex(info => info.userName === `${data[0].userName}`));
    currentLogInInfoInStorage[index] = data[0];
    localStorage.setItem(`logInInfo`, JSON.stringify(currentLogInInfoInStorage))
}

// const bars = JSON.parse(localStorage.getItem(`logInInfo`))
// const options = bars => {
//     bars.forEach(bar =>
//         document.getElementById(`selectBar`).innerHTML =
//         `
//     <option>${bar}</option>
//     `
//     )
// }
