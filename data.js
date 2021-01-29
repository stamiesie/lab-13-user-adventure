const garbage = {
    id: 'garbage',
    title: 'The Garbage Can',
    map: {
        top: '90%',
        left: '90%',
    },
    image: 'garbage.png',
    description:
        `You round the corner and head to your favorite spot: the trash can behind the house.  It must be trash day cuz the seagulls are all over it. You decide to:`,
    choices: [{
        id: 'garbage-run',
        description: 'Check back again later',
        result:
            `You left without finding any food: -10 health points. Plus you let the bird have their way on your turf, -15 cool points.`,
        health: -10,
        coolness: -15
    }, {
        id: 'garbage-stay',
        description: 'Dig in with the birds',
        result:
            `You found a few tasty treats the birds overlooked: +20 health points. But making friends with seagulls goes against everything you believe in: -10 cool points`,
        health: +20,
        coolness: -10
    }, {
        id: 'garbage-fight',
        description: 'Fight off the seagulls, this is MY trash!',
        result:
            `Your street survival skills kick into action and you fight off the flying rats, leaving you the whole garbage can to feast on: +30 health points.  Plus, your animal pals came to watch your successful showdown: +20 cool points`,
        health: +30,
        coolness: +20
    }]
};

const backyard = {
    id: 'backyard',
    title: 'The Backyard',
    map: {
        top: '50%',
        left: '50%',
    },
    image: 'backyard.png',
    description:
        `You see a half-eaten hotdog on the sidewalk, so you cut through the backyard to get it.  There you run into Jake the dog, the king-pin of the neighborhood. You decide to:`,
    choices: [{
        id: 'backyard-run',
        description: 'Get outta there!',
        result:
            `You ran like a coward, which preserved your health: +20 health points.  But news of your flight travels quickly throughout the neighborhood: -20 cool points.`,
        health: +20,
        coolness: -20
    }, {
        id: 'backyard-stay',
        description: 'Test the waters of friendship with Jake',
        result:
            `Jake the dog accepts your friendship, you live to fight another day: +25 health points, +25 cool points.`,
        health: +25,
        coolness: +25
    }, {
        id: 'backyard-fight',
        description: 'Take a shot at the king-pin',
        result:
            `Jake the dog tears you a new one in front the neighborhood animal kingdom: -40 health points, -35 cool points.`,
        health: -40,
        coolness: -35
    }]
};

const house = {
    id: 'house',
    title: 'The House',
    map: {
        top: '20%',
        left: '20%',
    },
    image: 'house.png',
    description:
        `You sneak into the back door of the house next door. The neighbor, making a sandwich, spots you inside. You decide to:`,
    choices: [{
        id: 'house-run',
        description: 'Jump out the window',
        result:
            `Your exploration yielded no snacks: -20 health points.  But you evaded the neighbor and their broom: +5 cool points.`,
        health: -20,
        coolness: +5
    }, {
        id: 'house-stay',
        description: 'Run to the basement',
        result:
            `In the basement you are able hide and live comfortably off canned goods for 2 days: +30 health points`,
        health: 0,
        coolness: +30
    }, {
        id: 'house-fight',
        description: 'Go for the sandwich!',
        result:
            `It was a trap. The neighbor knew your love of sandwiches and set up a sting.  You are taken away by animal control: -50 health points, -100 cool points.`,
        health: -50,
        coolness: -100
    }]
};

export const adventures = [
    garbage,
    backyard,
    house,
];

// export default adventures;
