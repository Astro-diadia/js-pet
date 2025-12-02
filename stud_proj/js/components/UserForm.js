import SuccessSend from "./UserFormMessage.js"

const formEl = document.querySelector('.questions__form')

const validator = new JustValidate(formEl)

validator.addField('#name', [
    {
        rule: 'required',
        errorMessage: 'Введите свое имя',
    },
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'минимальная длина три символа',
    },
    {
        rule: 'maxLength',
        value: 20,
        errorMessage: 'максимальная длина двадцать символов',
    },
])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'Введите свой адрес электронной почты',
        },
        {
            rule: 'email',
            errorMessage: 'Почта введена неверно',
        },
    ])

    .addField('#agree', [
        {
            rule: 'required',
            errorMessage: 'Соглассие обязательно',
        },
    ])

formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    if (!validator.isValid) return

    const response = new FormData(formEl)

    fetch('https://httpbin.org/post', {
        method: 'POST',
        body: response,
    })
        .then((data) => data.json())
        .then((data) => {
            console.log('Success:', data)
            SuccessSend('success');
            formEl.reset()
        })
        .catch((error) => {
            console.error('Error:', error)
            SuccessSend('not success');
        })
})