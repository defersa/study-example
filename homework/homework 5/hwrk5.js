window.onload = () => {
    const div = document.querySelector('#button-container');
    const div2 = document.querySelector('#button-container2');
    const {width, height} = document.body.getBoundingClientRect();
    let previousEvent = 0;

    div2.addEventListener('click', (currentEvent) => {
        const [horiz, vert] = [
            Math.floor(Math.random() * width) + 1,
            Math.floor(Math.random() * height) + 1];

        previousEvent++;

        div.innerHTML = String(previousEvent);
        div2.style.left = `${horiz}px`;
        div2.style.top = `${vert}px`;
    })
};
