export function healthResult(health) {
    if (health <= 0) {
        return 'dead';
    } else if (health < 20) {
        return 'normal';
    } else {
        return 'good';
    }
}

export function coolResult(health) {
    if (coolness <= 0) {
        return 'uncool';
    } else if (cool < 30) {
        return 'normal';
    } else {
        return 'coolest';
    }
}