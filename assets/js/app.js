function collectData() {
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value
    return {
        userName,
        password
    }
}

function clearForm() {
    const signUpForm = document.getElementById('signUpForm')
    signUpForm.reset()
    const signInForm = document.getElementById('signInForm')
    signInForm.reset()

    // const carNameInput = document.getElementById('carName')
    // carNameInput.focus()
}

const form = document.getElementById('signUpForm')
form.addEventListener('submit', event => {
    event.preventDefault();
    const currentLogInInfoInStorageJSON = localStorage.getItem('logInInfo')

    let LogInArray;
    if (!currentLogInInfoInStorageJSON) {
        LogInArray = []
    } else {
        LogInArray = JSON.parse(currentLogInInfoInStorageJSON)
    }

    LogInArray.push(collectData())
    localStorage.setItem('logInInfo', JSON.stringify(LogInArray))
    clearForm();
})

let userNameLoggedIn = [];

const form2 = document.getElementById('signInForm')
form2.addEventListener('submit', event => {
    event.preventDefault();
    const userNameEnterd = document.getElementById(`userNameEnterd`).value
    const passwordEnterd = document.getElementById(`passwordEnterd`).value
    const currentLogInInfoInStorage = JSON.parse(localStorage.getItem('logInInfo'))

    const index = (currentLogInInfoInStorage.findIndex(info => info.userName === `${userNameEnterd}`))
    if (index < 0) {
        console.log(`false userName`)
    }
    else if (currentLogInInfoInStorage[index].password === `${passwordEnterd}`) {
        console.log(`success`);
        userNameLoggedIn.push(currentLogInInfoInStorage[index]);
        localStorage.setItem(`user`, JSON.stringify(userNameLoggedIn));
        clearForm();

        window.location.href = 'info.html';
    } else {
        console.log(`failure password`);
    }
})