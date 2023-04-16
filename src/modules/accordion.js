const accordion = () => {
    const accordionItems = document.querySelectorAll('.accordeon > div')

    accordionItems.forEach((e) => {
        e.addEventListener('click', () => {
            if (e.classList.contains('active')) {
                console.log(accordionItems)
                console.log(e)
                e.classList.remove('active')
            } else {
                accordionItems.forEach((item) => {
                    if (item.classList.contains('active')) {
                        console.log(accordionItems)
                        console.log(item + 'item')
                        item.classList.remove('active')
                    }
                })
                e.classList.add('active')
            }
        })
    })
}

export default accordion