const modal = () => {
    const modalCallback = document.querySelector('.modal-callback');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalCloseBtn = document.querySelector('.modal-close');

    const buttonModal = document.querySelectorAll('.js-modal')

    const modalOpen = () => {
        modalCallback.classList.add('active');
        modalOverlay.classList.add('active');
    }

    const modalClose = () => {
        modalCallback.classList.remove('active');
        modalOverlay.classList.remove('active');
    }

    buttonModal.forEach((e) => {
        e.addEventListener('click', (event) => {
            event.preventDefault();
            modalOpen();
        })
    })

    modalOverlay.addEventListener('click', () => {
        modalClose()
    })

    modalCloseBtn.addEventListener('click', () => {
        modalClose()
    })
}

export default modal