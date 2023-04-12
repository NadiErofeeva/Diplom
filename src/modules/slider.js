const slider = () => {
    const sliderBlock = document.querySelector('.top-slider');
    const sliderItems = document.querySelectorAll('.top-slider .item');

    let dots = [];
    let currentSlide = 0;
    let interval;

    for (let i = 0; i < sliderItems.length; i++) {
        const newEl = document.createElement('li');
        newEl.classList.add('dot')
        if(i === 0) {
            newEl.classList.add('slick-active');
        }
        document.querySelector('.slick-dots').append(newEl);
        dots.push(newEl);
    }

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(sliderItems, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;

        if(currentSlide >= sliderItems.length) {
            currentSlide = 0;
        }
        nextSlide(sliderItems, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
    }

    const startSlide = () => {
        interval = setInterval(autoSlide, 3000)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        prevSlide(sliderItems, currentSlide, 'active');
        prevSlide(dots, currentSlide, 'slick-active');

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        nextSlide(sliderItems, currentSlide, 'active');
        nextSlide(dots, currentSlide, 'slick-active');
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if(e.target.classList.contains('dot')) {
            stopSlide();
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if(e.target.classList.contains('dot')) {
            startSlide();
        }
    }, true)

    startSlide()
}

export default slider