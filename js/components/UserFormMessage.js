const body = document.querySelector('body')
const successSendEl = document.createElement('div')
let message = 'Не удалось отправить обращение';

export default function SuccessSend(state) {
    if (state === 'success') {
        message = 'Спасибо! Ваше обращение отправлено.';
    }

    successSendEl.classList.add('success-send')
    successSendEl.innerHTML = `
        <div class="success-send__content">
            <h2 class="success-send__title">${message}</h2>
            <button class="success-send__close-btn">
                <svg class="success-send__icon" width="24" height="24" aria-hidden="true">
                    <use xlink:href="images/sprite.svg#icon-close"></use>
                </svg>
            </button>
        </div>
    `
    body.appendChild(successSendEl);
    const closeBtn = successSendEl.querySelector('.success-send__close-btn')

    closeBtn.addEventListener('click', () => {
        body.removeChild(successSendEl)
    })
}