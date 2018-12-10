export function fetchDashboardData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("DashboardDataFetched");
        }, 1000);
    });
}
