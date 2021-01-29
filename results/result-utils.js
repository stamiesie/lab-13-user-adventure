export function healthResult(health) {
    if (health <= 0) {
        return 'dead';
    } else if (health > 0 && health < 30) {
        return 'normal';
    } else {
        return 'good';
    }
}

export function coolResult(coolness) {
    if (coolness <= 0) {
        return 'uncool';
    } else if (coolness > 0 && coolness < 50) {
        return 'cool';
    } else {
        return 'coolest';
    }
}