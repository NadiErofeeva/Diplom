const btnUp = () => {
    const buttonUp = document.querySelector('.up');

    const show = () => {
        buttonUp.style.display = 'block'
    }

    const hide = () => {
        buttonUp.style.display = 'none'
    }

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 450 ? show() : hide();
    })

    buttonUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })
}

export default btnUp