//collect the userName, password the user entered
function collectData() {
    const userName = document.getElementById('userName').value
    const password = document.getElementById('password').value
    const description = ""
    const url = ""


    const currentLogInInfoInStorage = JSON.parse(localStorage.getItem('logInInfo'))
    if (currentLogInInfoInStorage) {
        const index = (currentLogInInfoInStorage.findIndex(info => info.userName === `${userName}`))
        if (index !== -1) {
            console.log(`repeated user name`);
            return ``
            //it letting it to be saved yet
        }
    }

    return {
        userName,
        password,
        description,
        url
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
        localStorage.setItem(`user`, JSON.stringify(currentLogInInfoInStorage[index]));
        clearForm();

        window.location.href = 'info.html';
    } else {
        console.log(`failure password`);
    }
})