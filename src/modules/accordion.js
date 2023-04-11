const accordion = () => {
    const accordionItems = document.querySelectorAll('.accordeon > div')

    accordionItems.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.classList.contains('active')) {
                e.classList.remove('active')
            } else {
                accordionItems.forEach((item) => {
                    if (item.classList.contains('active')) {
                        item.classList.remove('active')
                    }
                })
                e.classList.add('active')
            }
        })
    })
}

export default accordion