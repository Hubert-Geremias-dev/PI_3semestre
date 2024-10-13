const searchForm = document.querySelector('.search-form');

    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

    document.querySelector('#login-btn').onclick = () => {
        loginForm.classList.toggle('active');
}


    document.querySelector('#close-login-btn').onclick = () => {
        loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');

    const header2 = document.querySelector('.header .header-2');
    if (header2) {
        if (window.scrollY > 80) {
            header2.classList.add('active');
        } else {
            header2.classList.remove('active');
        }
    }
};

window.onload = () => {
    const header2 = document.querySelector('.header .header-2');
    if (header2) {
        if (window.scrollY > 80) {
            header2.classList.add('active');
        } else {
            header2.classList.remove('active');
        }
    }
};

let signupForm = document.querySelector('.signup-form-container');

document.querySelector('#signup-btn').onclick = () => {
    signupForm.classList.toggle('active');
}

document.querySelector('#close-signup-btn').onclick = () => {
    signupForm.classList.remove('active');
}

document.querySelector('.form-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Cadastro realizado com sucesso!');
});