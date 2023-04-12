const scroll = () => {
    const menuItem = document.querySelectorAll('.top-menu ul li a');
    menuItem.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            const fixedHeaderHeight = 100;
            const top = document.querySelector('' + e.getAttribute('href'))
                .offsetTop - fixedHeaderHeight;
            window.scrollTo({
                top,
                left: 0,
                behavior: "smooth",
            })
        })
    })



}

export default scroll
