const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';


    const updateCounter = () => {
        const target = counter.getAttribute('data-target');
        const c = +counter.innerText;
        let increment = 10;

        if (c < target) {
            counter.innerText = c + 1;
            setTimeout(updateCounter, increment);
        }
        else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// https://stackoverflow.com/questions/32741635/number-increment-animation-duration-slow-as-numbers-increase