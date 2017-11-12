let mockCities;
let mockVenues;

mockVenues = {
    'los-angeles': [
        {
            id: 'The Satellite',
            name: 'The Satellite',
            address: '1717 Silver Lake Boulevard\nLos Angeles, CA 90027\n323.661.4380',
            coordinates: '118.2682879 - 34.089872',
            photoLink: 'Here',
            url: 'https://www.thesatellitela.com/contact/',
            capacity: '260',
            description: 'Hip neighborhood mainstay for local & established indie bands often presents free shows.'
        },
        {
            id: 'Bootleg Theatre',
            name: 'Bootleg Theatre',
            address: '2220 Beverly Boulevard\nLos Angeles, CA 90057\n213.389.3856',
            coordinates: '118.274447 - 34.0672716',
            photoLink: 'Here',
            url: 'bookingatbootlegtheater.org',
            capacity: '225',
            description:
                'Bootleg Theater is a year-round inclusive art space for original, boundary-defying live theater, music, and dance performances born from the diverse cultural and artistic landscape of Los Angeles. Bootleg supports and collaborates with the best of established and emerging music, theater, and dance artists to create daring multi-disciplinary live experiences that are striking, contemporary and non-traditional.'
        },
        {
            id: 'The Mint',
            name: 'The Mint',
            address: '6010 West Pico Blvd.\nLos Angeles, CA 90035\n323-954-9400',
            coordinates: '118.3737205 - 34.0524524',
            photoLink: 'Here',
            url: 'booking@themintla.com',
            capacity: '200',
            gear: 'Link here',
            description: 'Enduring stage for live music up-and-comers in a dark, intimate space with a retro vibe.'
        },
        {
            id: 'El Rey Theatre',
            name: 'El Rey Theatre',
            address: '5515 Wilshire Blvd \nLos Angeles, CA 90036',
            coordinates: '118.3510891 - 34.0626987',
            photoLink: 'Here',
            url: 'booking@theelrey.com',
            capacity: '771',
            gear: 'Link here',
            description:
                'The El Rey Theatre is a live music venue in the Miracle Mile area of the Mid-Wilshire region in Los Angeles, California. This art deco building was designed by Clifford A. Balch.'
        },
        {
            id: 'bluewhale',
            name: 'Bluewhale',
            address: 'Weller Court Plaza 3rd Floor\n123 Astronaut E S Onizuka St. Suite 301\nLos Angeles CA 90012',
            coordinates: '118.2443087 - 34.0498723',
            photoLink: 'Here',
            url: 'booking@bluewhalemusic',
            capacity: '1200',
            description:
                'Chill spot draws serious jazz fans with a diverse lineup of emerging artists in a spare setting.'
        },
        {
            id: "Pappy & Harriet's Pioneertown Palace",
            name: "Pappy & Harriet's Pioneertown Palace",
            address: '53688 Pioneertown Road\nPioneertown, CA 92268\n760.365.5956',
            coordinates: '116.4952549 - 34.156559',
            photoLink: 'Here',
            url: 'pappy.harriets@yahoo.com',
            capacity: '350 (inside)\n850 (outside)',
            description:
                'The legendary Pappy&Harriet’s Pioneertown Palace has been delighting locals and travelers alike since 1982, with its mesquite barbeque, live music, dancing and friendly service. There is also a long history here. In 1946, Pioneertown was founded by a group of Hollywood investors with dreams of creating a living movie set Musicians from Robert Plant to Vampire Weekend to Leon Russell to Sean Lennon and many more have graced the P&H stage. The legendary bar has become an indie rock favorite with a vibe that can’t be matched'
        }
    ],
    seattle: [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    portland: [
        {
            name: 'Valentines',
            photoLink: 'Here',
            coordinates: '122.6752205 - 45.5223942',
            addressphone: '232 SW Ankeny St\nPortland, OR 97204\n(503) 248-1600',
            booking: 'booking.valentinespdx@gmail.com',
            capacity: '~40',
            gear: 'Here',
            description:
                'We are a little diamond in the rough of Old Town Portland. A place for music, art, film screenings, poems, DJs that play records you love but never heard before, first meetings with future friends, hangouts with old ones and, of course, we do love making a great drink.'
        },
        {
            name: 'Mississippi Studios',
            photoLink: 'Here',
            coordinates: '122.6778976 - 45.5523667',
            addressphone: '3939 N. Mississippi Ave.\nPortland, OR 97227\n503.288.3895',
            booking: 'booking@mississippistudios.com',
            capacity: '~249',
            gear: 'Link here',
            description:
                "Mississippi Studios used to be a Baptist church, and if you have ears, or very recently had ears, the expertly designed acoustics at this venue are just for you. It's a smaller, balcony-above-bar type place, the bonus being that the next- door bar (called BarBar) is nearby in case the in-studio bartender gets backed up. Live music on a national-talent level for $10? You got it. This is a place to get those ears properly spoiled. Live music for this price elsewhere will just leave you sad, and maybe a little bitter about life."
        },
        {
            name: 'The Know',
            photoLink: 'Here',
            coordinates: '122.6265758 - 45.5340457',
            addressphone: '3728 NE Sandy Blvd \nPortland, OR 97232',
            booking: 'http://www.theknowpdx.com/booking/',
            capacity: 98,
            gear: 'Email them',
            description:
                "Can't get enough metal? Punk runs in your bloodstream? Want to eat a $1 White Castle burger while playing a 25¢ pinball game? Walk right in to The Know and blast your ears out with this hidden treasure of a dive experience."
        },
        {
            name: 'The Hawthorne Theatre',
            photoLink: 'Here',
            coordinates: '122.6252841 - 45.5118475',
            addressphone: '1507 SE 39th Avenue\nPortland, OR 97214\n503.233.7100',
            booking: 'http://hawthornetheatre.com/contact/booking/',
            capacity: '550 (main room)\n100 (lounge)',
            gear: 'Link here'
        },
        {
            name: 'Doug Fir Lounge',
            photoLink: 'Here',
            coordinates: '122.6590127 - 45.522641',
            addressphone: '830 E Burnside St \nPortland, OR 97214',
            booking: 'booking@dougfirlounge.com',
            capacity: 299,
            gear: 'Link here',
            description:
                "Once you've warmed up by the fire (because summer nights are still cold in Oregon – yes, it's disappointing) head downstairs to the intimate venue space that features some of the best sounds in the city and many of the best touring acts in Portland. By now you realise this place is the best! The small space and two-level layout ensures that you're never far from the act."
        },
        {
            name: 'Twilight Cafe',
            photoLink: 'Here',
            coordinates: '122.6528265 - 45.4997619',
            addressphone: '1420 SE Powell Boulevard\nPortland, OR 97202\n503.232.3576',
            booking: 'https://twilightmusicbooking.wufoo.com/forms/twilight-music-booking-form/',
            capacity: 90,
            gear:
                '1 PA system with 12 channels/mixer and 2 pair of main speakers and a pair of stage monitors\n6 Microphones\n6 Microphone stands\n2 Surge protectors\n1 Extension cord\nIn House Sound Engineer\n1 DPSST Door/Security Persons\nLighting\nStage\nIf you need anything else please bring it yourself.',
            description: 'No-frills watering hole & concert venue for indie & alternative bands performing nightly.'
        },
        {
            name: "Kelly's Olympian",
            photoLink: 'Here',
            coordinates: '122.6787345 - 45.5199352',
            addressphone: '426 SW Washington Street\nPortland, OR 97204\n503.228.3669',
            booking: 'bookings@kellysolympian.com',
            capacity: 100,
            gear: 'Link here'
        }
    ],
    'san-francisco': [
        {
            name: 'Bottom of the Hill ',
            coordinates: '37.7650672,-122.3986589',
            photoLink: 'Here',
            addressphone: '1233 17th St, San Francisco, CA 94107, USA',
            promoter: 'email@bottomofthehill.com',
            capacity: 246,
            description:
                'Chosen by Rolling Stone magazine (RS 813) as "the best place to hear live music in San Francisco," the Bottom of the Hill presents some of the finest original artists, seven nights a week. Featuring up and coming acts from around the globe as well as in our own backyard, the music spans the spectrum from alternative, rock-a-billy, punk, and hard rock, to folk and funk and pop. '
        },
        {
            name: 'The independant ',
            coordinates: '37.7755127,-122.4399549',
            photoLink: 'Here',
            addressphone: '628 Divisadero St, San Francisco, CA 94117, USA',
            promoter: 'info (at) theindependentsf (dot) com',
            capacity: 500,
            description:
                'The Independent is a premier music venue in San Francisco, California located at 628 Divisadero. Live music live.'
        },
        {
            name: 'Make Out Room',
            coordinates: '37.7552647,-122.4215475',
            photoLink: 'Here',
            addressphone: '3225 22nd St, San Francisco, CA 94110, USA',
            promoter: 'http://www.makeoutroom.com/booking.html',
            capacity: 150,
            description: 'Intimate and Indie venue. Live music is primarily Friday, Saturday, and Sunday nights. '
        },
        {
            name: 'Slims',
            coordinates: '37.7715146,-122.4154834',
            photoLink: 'Here',
            addressphone: '333 11th St, San Francisco, CA 94103, USA',
            promoter: '\ndana@slims-sf.com',
            capacity: 500,
            description: 'located in the South of Market district of San Francisco, a hub of nightlife in the city. '
        },
        {
            name: 'Hemlock Tavern',
            coordinates: '37.7873893,-122.4224474',
            photoLink: 'Here',
            addressphone: '1131 Polk St, San Francisco, CA 94109, USA',
            promoter: 'hemlocktavern [at] gmail [dot]',
            capacity: 300,
            description:
                'The Hemlock Tavern presents a nightly cavalcade of top-shelf up & coming local, national and international touring bands in our back room performance space.Past performers at the Hemlock include A-Frames, Animal Collective, Jay Reatard, Fucked Up, Okkervil River, Kurt Vile and the Violators, Joanna Newsom, Six Organs of Admittance, Beach House, Ariel Pink, Smog, Cat Power.'
        }
    ],
    'san-diego': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    olympia: [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'san-jose': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    oakland: [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    eugene: [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ],
    'santa-cruz': [
        {
            id: 'lorem-ipsum1',
            name: 'Lorem Ipsum 1',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum2',
            name: 'Lorem Ipsum 2',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum3',
            name: 'Lorem Ipsum 3',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum4',
            name: 'Lorem Ipsum 4',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum5',
            name: 'Lorem Ipsum 5',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        },
        {
            id: 'lorem-ipsum6',
            name: 'Lorem Ipsum 6',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facilis architecto animi, accusamus optio vero eaque neque nam fuga natus!'
        }
    ]
};

mockCities = [
    {
        id: 'seattle',
        name: 'Seattle',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.3321, 47.6062],
        venues: mockVenues['seattle']
    },
    {
        id: 'portland',
        name: 'Portland',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
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
        description:
            'The city of Los Angeles, come for the music industry but stay for the beaches. Be careful touring here because the cheap eats, beaches, medicinal marijuana just might keep you. An oasis in a literal dessert. ',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-118.2437, 34.0522],
        venues: mockVenues['los-angeles']
    },
    {
        id: 'san-diego',
        name: 'San Diego',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-117.16108380000003, 32.715738],
        venues: mockVenues['san-diego']
    },
    {
        id: 'olympia',
        name: 'Olympia',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'Washington',
        state: 'WA',
        coordinates: [-122.9007, 47.0379],
        venues: mockVenues['olympia']
    },
    {
        id: 'oakland',
        name: 'Oakland',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.2711, 37.8044],
        venues: mockVenues['oakland']
    },
    {
        id: 'san-jose',
        name: 'San Jose',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-121.8863, 37.3382],
        venues: mockVenues['san-jose']
    },
    {
        id: 'eugene',
        name: 'Eugene',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'Oregon',
        state: 'OR',
        coordinates: [-123.0868, 44.0521],
        venues: mockVenues['eugene']
    },
    {
        id: 'santa-cruz',
        name: 'Santa Cruz',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada nulla mi, in laoreet orci tristique eget. Mauris nec turpis eu nunc lobortis euismod. Aenean eu pretium urna. Nullam fringilla congue dolor, sed mollis magna semper quis. Donec eget enim scelerisque, ultrices eros placerat, faucibus metus. Maecenas suscipit tempor ipsum eu suscipit.',
        stateLong: 'California',
        state: 'CA',
        coordinates: [-122.0308, 36.9741],
        venues: mockVenues['santa-cruz']
    }
];

export { mockCities, mockVenues };
