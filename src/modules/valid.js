const valid = () => {
    const form = document.querySelector('.modal-callback form');

    const text = form.querySelector('input[type="text"]');
    const tel = form.querySelector('input[type="tel"]');


    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if(/^([а-яА-ЯёЁ]+\s)*[а-яА-ЯёЁ]*$/g.test(text.value)) {

        } else {
            alert('Только русские символы')
        }

        if (/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(tel.value)) {

        } else {
            alert('Введите номер телефона полностью и цифрами')
        }
    })
}
export default valid