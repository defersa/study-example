window.onload = () => {
    const div = document.querySelector('#button-container');
    let previousEvent;

    const { width, height} = document.body.getBoundingClientRect();


    div.addEventListener('mousemove', (currentEvent) => {
        if (previousEvent) {
            const currentPosition = div.getBoundingClientRect();
            let [diffX, diffY] = [
                currentEvent.pageX - previousEvent.pageX + currentPosition.x,
                currentEvent.pageY - previousEvent.pageY + currentPosition.y,
            ];

            if (
                diffX < 0 ||
                diffY < 0 ||
                width < diffX + currentPosition.width ||
                height < diffY + currentPosition.height
            ) {
                [diffX, diffY] = [
                    width / 2 - currentPosition.width / 2,
                    height / 2 - currentPosition.height / 2,
                ];
            }

            div.style.left = `${diffX}px`;
            div.style.top = `${diffY}px`;
        }

        previousEvent = currentEvent;
    });

    div.addEventListener('mouseleave', (event) => {
        previousEvent = null;
    })
}

