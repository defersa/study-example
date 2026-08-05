window.onload = () => {
    const divElement = document.querySelector('#button-container');

    let previousEvent;

    const { width, height } = document.body.getBoundingClientRect();

    document.addEventListener('mousemove', (currentEvent) => {

        if (previousEvent) {

            const currentPosition = divElement.getBoundingClientRect();

            let [diffX, diffY] = [
                currentPosition.x + (currentEvent.pageX - previousEvent.pageX),
                currentEvent.pageY - previousEvent.pageY + currentPosition.y
            ];

            divElement.style.left = `${diffX}px`;
            divElement.style.top = `${diffY}px`;
        }

        previousEvent = currentEvent;
    });
}