const userNameLoggedIn = JSON.parse(localStorage.getItem(`user`));
document.getElementById(`h4`).innerHTML = `welcome to the app, user: ${userNameLoggedIn[0].userName}`;


if (JSON.parse(localStorage.getItem(`user`)).description) {
    document.getElementById(`shortDescription`).innerHTML = JSON.parse(localStorage.getItem(`user`)).description;
} else {
    document.getElementById(`shortDescription`).innerHTML = ``;
    console.log(localStorage.getItem(`user`)[0].description);
}

const saveDescriptionButton = document.getElementById('saveDescription')
saveDescriptionButton.addEventListener('click', event => {
    event.preventDefault();
    let data = JSON.parse(localStorage.getItem(`user`));
    data[0].description = document.getElementById(`shortDescription`).value
    localStorage.setItem(`user`, JSON.stringify(data))

    const currentLogInInfoInStorage = JSON.parse(localStorage.getItem('logInInfo'))
    const index = (currentLogInInfoInStorage.findIndex(info => info.userName === `${data[0].userName}`));
    currentLogInInfoInStorage[index] = data[0];
    localStorage.setItem(`logInInfo`, JSON.stringify(currentLogInInfoInStorage))
})