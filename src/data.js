export const TOY_DATA = [
    {
        id: 1,
        name: 'Sparkle Bot Action Figure',
        description: 'A friendly robot friend with glowing eyes and articulated joints for epic space battles.',
        price: 24.99,
        category: 'Action Figures',
        ageGroup: '5-8 years',
        image: '/images/action_figure_toy_1773654003258.png'
    },
    {
        id: 2,
        name: 'Adventure Isle Game',
        description: 'An exciting tropical board game where players hunt for lost treasure and avoid jungle traps.',
        price: 34.99,
        category: 'Board Games',
        ageGroup: '8-12 years',
        image: '/images/board_game_toy_1773654074910.png'
    },
    {
        id: 3,
        name: 'Rainbow Princess Doll',
        description: 'A magical doll with a vibrant rainbow dress and sparkling crown, perfect for imaginative tea parties.',
        price: 19.99,
        category: 'Dolls',
        ageGroup: '3-5 years',
        image: '/images/doll_toy_1773654052787.png'
    },
    {
        id: 4,
        name: 'Build-a-Castle Blocks',
        description: 'Colorful educational blocks that help develop fine motor skills while building majestic toy castles.',
        price: 45.00,
        category: 'Educational Toys',
        ageGroup: '3-5 years',
        image: '/images/educational_toy_1773654022574.png'
    },
    {
        id: 5,
        name: 'Cuddle Buddy Bear',
        description: 'The softest, most huggable teddy bear you will ever meet. Perfect for bedtime stories.',
        price: 22.50,
        category: 'Plush Toys',
        ageGroup: '0-3 years',
        image: '/images/plush_toy_1773654091564.png'
    },
    {
        id: 6,
        name: 'Turbo Racer X-1',
        description: 'A high-speed remote control racing car with specialized tires for extreme speed and stunts.',
        price: 29.99,
        category: 'Remote Control Toys',
        ageGroup: '8-12 years',
        image: '/images/remote_control_car_1773658519755.png'
    },
    {
        id: 7,
        name: 'Animal Kingdom Puzzle',
        description: 'A colorful set of 36 puzzle pieces showing the world\'s most exotic animals in their habitat.',
        price: 15.99,
        category: 'Puzzles',
        ageGroup: '5-8 years',
        image: '/images/puzzle_box_set_1773658536784.png'
    },
    {
        id: 8,
        name: 'Galaxy Explorer Rocket',
        description: 'Two-stage space rocket toy with spinning turbines and landing gear for lunar expeditions.',
        price: 42.00,
        category: 'Action Figures',
        ageGroup: '8-12 years',
        image: '/images/action_figure_toy_1773654003258.png'
    }
];

export const CATEGORIES = ['All', 'Action Figures', 'Board Games', 'Dolls', 'Educational Toys', 'Remote Control Toys', 'Puzzles', 'Plush Toys'];
export const AGE_GROUPS = ['All', '0-3 years', '3-5 years', '5-8 years', '8-12 years'];
export const PRICE_RANGES = [
    { label: 'All', min: 0, max: Infinity },
    { label: 'Under $20', min: 0, max: 20 },
    { label: '$20 - $40', min: 20, max: 40 },
    { label: 'Over $40', min: 40, max: Infinity }
];
