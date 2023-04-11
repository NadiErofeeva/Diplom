const scroll = () => {
    const menuItem = document.querySelectorAll('.top-menu ul li a');
    menuItem.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(e.getAttribute('href'))
                .scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
        })
    })



}

export default scroll
