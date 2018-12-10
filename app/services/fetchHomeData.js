export function fetchHomeData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("HomeDataFetched");
        }, 1000);
    });
}
