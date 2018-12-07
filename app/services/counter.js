function getRandomInt(min, max) {
    return 5;
}

export function fetchCounter(callback) {
    setTimeout(() => {
        callback(getRandomInt(1, 100));
    }, 100);
}
