window.onload = function () {
    let fullName = document.getElementById('name')
    let username = document.getElementById('username')
    let checkbox = document.getElementById('checkbox')
    let form = document.querySelectorAll('input')
    let btn = document.getElementById('btn')
    let password = document.getElementById('password')
    let newPassword = document.getElementById('new-password')
    let popup = document.getElementById('popup')
    let popupBtn = document.getElementById('popup-btn')
    let link = document.getElementById('link')


    fullName.onkeydown = function (e) {
        let num = parseInt(e.key)
        if (!isNaN(num)) {
            return false
        }
    }

    username.onkeydown = function (e) {
        if (e.key === ',' || e.key === '.') {
            return false
        }
    }

    checkbox.onclick = function (e) {
        if (e.target.checked) {
            console.log('Согласен')
        } else {
            console.log('Не согласен')
        }
    }
    btn.onclick = function () {
        for (let i = 0; i < form.length; i++) {
            if (form[i].value === '') {
                alert(`Заполните поле ${form[i].id}`)
                return false;
            }
        }
        if (password.value.length <= 7) {
            alert('Слишком короткий пароль, попробуйте другой')
            return false;
        }
        if (newPassword.value !== password.value) {
            alert('Пароли не совпадают')
            return false;
        }
        if (!checkbox.checked) {
            alert('Чекбокс не выбран')
            return false;
        }

        popup.style.display = 'flex';
        popupBtn.onclick = function () {
            popup.style.display = 'none'
            return redirectToLoginPage()
        }
        return false;
    }

    function redirectToLoginPage() {
        document.getElementById('main__content-title').innerHTML = 'Log in to the system'
        document.getElementById('form-name').remove()
        document.getElementById('form-email').remove()
        document.getElementById('form-new-password').remove()
        document.getElementById('form-checkbox').remove()
        btn.innerHTML = 'Sign In'
        btn.style.marginTop = '50px'
        document.getElementById('link').remove()
        btn.onclick = function (){
            if(username.value && password.value){
                alert(`Добро пожаловать, ${username.value}!`)
            }else if(username.value){
                alert(`Заполните поле ${password.name}`)
            }else{
                alert(`Заполните поле ${username.name}`)
            }
        }
    }
    link.addEventListener('click', function(){
        redirectToLoginPage()
    })
}
