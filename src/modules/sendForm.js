const sendForm = () => {
    const form = document.querySelector('.modal-callback form');
    const formElements = form.querySelectorAll('input')
    const statusBlock = document.createElement('div');
    const loadText = 'Идет отправка';
    const errorText = 'Ошибка';
    const successText = 'Отправлено';



    const validate = (list) => {
        let success = true

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;
                    formElements.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                })
        } else {
            console.log('Форма заполнена не правильно')
            return
        }
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isSubmit = true
        formElements.forEach(element => {
            if (element.type === 'tel') {
                if(/^[\d\+][\d\(\)\ -]{4,14}\d$/g.test(element.value)) {
                    console.log(isSubmit)
                } else {
                    console.log(isSubmit)
                    isSubmit = false
                }
            }
        })


        if (isSubmit) {
            submitForm();
            setTimeout(() => {
                statusBlock.textContent = '';
            }, 3000)
        } else {
            statusBlock.textContent = '';
            console.log('Ошибка в заполнении формы')
        }
    })
}

export default sendForm