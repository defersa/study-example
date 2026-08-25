// setTimeout(() => console.log('setTimeOut'));
// Promise.resolve().then(() => console.log('promise'));

setTimeout(
    () => {
        Promise.resolve().then(
            () => console.log('promise in setTimeOut'))
    });

Promise.resolve().then(
    () => {
        setTimeout(
            () => console.log('setTimeOut in promise'));
    });

vechnyiDvij()

function vechnyiDvij() {
    Promise.resolve().then(
    () => {
        vechnyiDvij();
    });
}

const newMessage = new Promise((resolve, reject) => {
    resolve({ author: 'OLEG', message: 'OLEG di Dvij' });
})

newMessage
    .then(() => {
        document.querySelector('#button-1').innerHTML = '';
        document.querySelector('#button-1').innerHTML = '';
        document.querySelector('#button-1').innerHTML = '';
    });



window.onload = () => {
    const div = document.querySelector('#button-container');
    const div2 = document.querySelector('#button-container2');
    const {width, height} = document.body.getBoundingClientRect();
    let previousEvent = 0;

    div2.addEventListener('click', (currentEvent) => {
        console.log(1);
    })
    div2.addEventListener('click', (currentEvent) => {
        console.log(2);
    })
    div2.addEventListener('click', (currentEvent) => {
        console.log(3);
    })
};
