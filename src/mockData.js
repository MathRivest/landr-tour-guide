let mockCities;
let mockVenues;

mockVenues = {
    'los-angeles': [
        { id: 'doug-fire-lounge', name: 'Doug Fire Lounge', description: null },
        {
            id: 'doug-fire-lounge-2',
            name: 'Doug Fire Lounge 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        { id: 'doug-fire-lounge', name: 'Doug Fire Lounge', description: null },
        { id: 'doug-fire-lounge', name: 'Doug Fire Lounge', description: null },
        { id: 'doug-fire-lounge', name: 'Doug Fire Lounge', description: null }
    ],
    'seattle': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'portland': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'san-francisco': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'san-diego': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'olympia': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'san-jose': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'oakland': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'eugene': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'santa-cruz': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ]
};

mockCities = [
    {
        id: 'seattle',
        name: 'Seattle',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.3321, 47.6062],
        venues: mockVenues['seattle']
    },
    {
        id: 'portland',
        name: 'Portland',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'Oregon',
        state: 'OR',
        coordinates: [-122.679565, 45.512794],
        venues: mockVenues['portland']
    },
    {
        id: 'san-francisco',
        name: 'San Francisco',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.4194, 37.7749],
        venues: mockVenues['san-francisco']
    },
    {
        id: 'los-angeles',
        name: 'Los Angeles',
        description: 'The city of Los Angeles, come for the music industry but stay for the beaches. Be careful touring here because the cheap eats, beaches, medicinal marijuana just might keep you. An oasis in a literal dessert. ',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-118.2437, 34.0522],
        venues: mockVenues['los-angeles']
    },
    {
        id: 'san-diego',
        name: 'San Diego',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-117.16108380000003, 32.715738],
        venues: mockVenues['san-diego']
    },
    {
        id: 'olympia',
        name: 'Olympia',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'Washington',
        state: 'WA',
        coordinates: [-122.9007, 47.0379],
        venues: mockVenues['olympia']
    },
    {
        id: 'oakland',
        name: 'Oakland',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.2711, 37.8044],
        venues: mockVenues['oakland']
    },
    {
        id: 'san-jose',
        name: 'San Jose',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-121.8863, 37.3382],
        venues: mockVenues['san-jose']
    },
    {
        id: 'eugene',
        name: 'Eugene',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'Oregon',
        state: 'OR',
        coordinates: [-123.0868, 44.0521],
        venues: mockVenues['eugene']
    },
    {
        id: 'santa-cruz',
        name: 'Santa Cruz',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.0308, 36.9741],
        venues: mockVenues['santa-cruz']
    }
];

export { mockCities, mockVenues };
