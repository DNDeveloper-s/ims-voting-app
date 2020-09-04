export function getRandomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export function filterRoute(route) {
    return `${route.length > 1 ? route : ''}`;
}