//Cities of the World

const capitalCities = [
    {   continent: 'North America',
        country: 'United States',
        city: 'Irvine',
        latitude: 33.669444, 
        longitude: -117.823056,
    },
    {   continent: 'Europe',
        country: 'France',
        city: 'Paris',
        latitude: 48.8567,
        longitude: 2.3508,
    },
    {   continent:'Africa',
        country: 'Morocco',
        city: 'Rabat',
        latitude: 34.020882, 
        longitude: -6.84165,
    },
    {   continent: 'Asia',
        country: 'Cambodia',
        city: 'Phnom Penh',
        latitude: 11.55, 
        longitude: 104.916667,
    },
    {   continent: 'Europe',
        country: 'Turkey',
        city: 'Ankara',
        latitude: 39.933333,  
        longitude: 32.866667,
    },
    {   continent: 'Asia',
        country: 'Vietnam',
        city: 'Hanoi',
        latitude: 21.028333, 
        longitude: 105.854167,
    },
    {   continent: 'Europe',
        country: 'Czech Republic',
        city: 'Prague',
        latitude: 50.083333, 
        longitude: 14.416667,
    },
    {   continent: 'Europe',
        country: 'London',
        city: 'United Kingdom',
        latitude: 51.507222, 
        longitude: -0.1275,
    },
    {   continent: 'Europe',
        country: 'Italy',
        city: 'Rome',
        latitude: 41.9, 
        longitude: 12.5,
    },
    {   continent: 'South America',
        country: 'Argentina',
        city: 'Buenos Aires',
        latitude: -34.603333, 
        longitude: -58.381667,
    },
    {   continent: 'Africa',
        country: 'South Africa',
        city: 'Cape Town',
        latitude: -33.925278, 
        longitude: 18.423889,
    },
    {   continent: 'Europe',
        country: 'Spain',
        city: 'Madrid',
        latitude: 40.383333, 
        longitude: -3.716667,
    },
    {   continent: 'Asia',
        country: 'Indonesia',
        city: 'Jakarta',
        latitude: -6.2, 
        longitude: 106.816667,
    },
    {   continent: 'South America',
        country: 'Peru',
        city: 'Lima',
        latitude: -12.043333, 
        longitude: -77.028333,
    },
    {   continent: 'Europe',
        country: 'Russia',
        city: 'Moscow',
        latitude: 55.75, 
        longitude: 37.616667,
    },
    {   continent: 'Asia',
        country: 'Nepal',
        city: 'Kathmandu',
        latitude: 27.711389, 
        longitude: 85.308611,
    },
    {   continent: 'Europe',
        country: 'Greece',
        city: 'Athens',
        latitude: 37.983972, 
        longitude: 23.727806,
    },
    {   continent: 'Asia',
        country: 'South Korea',
        city: 'Seoul',
        latitude: 37.566667,  
        longitude: 126.966667,
    },
    {   continent: 'Asia',
        country: 'China',
        city: 'Beijing',
        latitude: 39.916667, 
        longitude: 116.383333,
    },
    {   continent: 'Asia',
        country: 'Japan',
        city: 'Tokyo',
        latitude: 35.683333, 
        longitude: 139.683333,
    },
    {   
        country: 'Azerbaijan',
        city: 'Baku',
        latitude: 40.395278,  
        longitude: 49.882222,
    },
    {   
        country: 'Belarus',
        city: 'Minsk',
        latitude:  53.9, 
        longitude: 27.566667,
    },
    { 
        country: 'Colombia',
        city: 'Bogota',
        latitude: 4.711111, 
        longitude: -74.072222,
    },
    {   
        country: 'Denmark',
        city: 'Copenhagen',
        latitude: 55.676111,  
        longitude: 12.568333,
    },
    {  
        country: 'Egypt',
        city: 'Cairo',
        latitude: 30.044444, 
        longitude: 31.235833,
    },
    {   
        country: 'Afghanistan',
        city: 'Kabul',
        latitude: 34.533333, 
        longitude: 69.166667,
    },
    {   
        country: 'Albania',
        city: 'Tirana',
        latitude: 41.328889, 
        longitude: 19.817778,
    },
    {
        country: 'Algeria',
        city: 'Algiers',
        latitude: 36.753889, 
        longitude: 3.058889,
    },
    {   
        country: 'Austria',
        city: 'Vienna',
        latitude:  48.2, 
        longitude: 16.366667,
    },
    {   
        country: 'Belgium',
        city: 'Brussels',
        latitude: 50.85, 
        longitude: 4.35,
    },
    {  
        country: 'Brazil',
        city: 'Rio De Janeiro',
        latitude: -22.908333,
        longitude:  -43.196389,
    },
    {   
        country: 'Malaysia',
        city: 'Kuala Lumpur',
        latitude: 3.133333,  
        longitude: 101.683333,
    },
    {   
        country: 'United Arab Emerates',
        city: 'Dubai',
        latitude:  25.263056, 
        longitude: 55.297222,
    },
    {   
        country: 'Canada',
        city: 'Vancouver',
        latitude: 49.25, 
        longitude: -123.1,
    },
    {   
        country: 'Costa Rica',
        city: 'San José',
        latitude: 9.933333,
        longitude:  -84.083333,
    },
    {   
        country: 'Cuba',
        city: 'Havana',
        latitude: 23.133333,  
        longitude: -82.383333,
    },
    {   
        country: 'Equador',
        city: 'Quito',
        latitude: -0.233333, 
        longitude: -78.516667,
    },
    {   
        country: 'Fiji',
        city: 'Suva',
        latitude: -18.1416, 
        longitude: 178.4419,
    },
    {  
        country: 'Finland',
        city: 'Helsinki',
        latitude: 60.170833, 
        longitude: 24.9375,
    },
    {  
        country: 'Germany',
        city: 'Berlin',
        latitude: 52.516667, 
        longitude: 13.388889,
    },
    {  
        country: 'Iceland',
        city: 'Reykjavik',
        latitude: 64.133333,   
        longitude: -21.933333,
    },
    {  
        country: 'Hungary',
        city: 'Budapest',
        latitude: 47.4925,
        longitude: 19.051389,
    },
    {  
        country: 'India',
        city: 'New Delhi',
        latitude: 28.613889,  
        longitude: 77.208889,
    },
    {  
        country: 'Iran',
        city: 'Tehran',
        latitude: 35.689167, 
        longitude: 51.388889,
    },
    {  
        country: 'Jamaica',
        city: 'Kingston',
        latitude: 18,
        longitude:  -76.783333,
    },
    {  
        country: 'Jordan',
        city: 'Amman',
        latitude:  31.949722,  
        longitude: 35.932778, 
    },
    {  
        country: 'Kenya',
        city: 'Nairobi',
        latitude: -1.283333,  
        longitude: 36.816667,
    },
    {  
        country: 'Kosovo',
        city: 'Pristina',
        latitude: 42.666667, 
        longitude: 21.166667,
    },
    {  
        country: 'Laos',
        city: 'Vientiane',
        latitude: 17.966667,  
        longitude: 102.6,
    },
    {  
        country: 'Latvia',
        city: 'Riga',
        latitude: 56.948889,  
        longitude: 24.106389,
    },
    {  
        country: 'Lebanon',
        city: 'Beirut',
        latitude: 33.886944,   
        longitude: 35.513056,
    },
    {  
        country: 'Liberia',
        city: 'Monrovia',
        latitude: 6.313333,  
        longitude: -10.801389,
    },
    {  
        country: 'Liechtenstein',
        city: 'Vaduz',
        latitude: 47.141,  
        longitude: 9.521,
    },
    {  
        country: 'Lithuania',
        city: 'Vilnius',
        latitude: 54.683333,  
        longitude: 25.283333,
    },
    {  
        country: 'Macedonia',
        city: 'Skopje',
        latitude: 42, 
        longitude: 21.433333,
    },
    {  
        country: 'Madagascar',
        city: 'Antananarivo',
        latitude: -18.933333, 
        longitude: 47.516667,
    },
    {  
        country: 'Malawi',
        city: 'Lilongue',
        latitude: -13.983333, 
        longitude: 33.783333,
    },
    {  
        country: 'Maldives',
        city: 'Malé',
        latitude: 4.175278,  
        longitude: 73.508889,
    },
    {  
        country: 'Malta',
        city: 'Valletta',
        latitude: 35.884444,  
        longitude: 14.506944,
    },
    {  
        country: 'Namibia',
        city: 'Windhoek',
        latitude: -22.57,  
        longitude: 17.083611,
    },
    {  
        country: 'New Zealand',
        city: 'Wellington',
        latitude: -41.288889,  
        longitude: 174.777222,
    },
    {  
        country: 'Netherlands',
        city: 'Amsterdam',
        latitude: 52.366667,  
        longitude: 4.9,
    },
    {  
        country: 'Norway',
        city: 'Oslo',
        latitude: 59.916667,  
        longitude: 10.733333,
    },
    {  
        country: 'Philippines',
        city: 'Manila',
        latitude: 14.58, 
        longitude: 121,
    },
    {  
        country: 'Poland',
        city: 'Warsaw',
        latitude: 52.233333,  
        longitude: 21.016667,
    },
    {  
        country: 'Portugal',
        city: 'Lisbon',
        latitude: 38.713889,
        longitude: -9.139444,
    },
    {  
        country: 'Romania',
        city: 'Bucharest',
        latitude: 44.4325,   
        longitude: 26.103889,
    },
    {  
        country: 'Rwanda',
        city: 'Kigali',
        latitude: -1.943889,  
        longitude: 30.059444,
    },
    {  
        country: 'Senegal',
        city: 'Dakar',
        latitude: 14.692778,  
        longitude: -17.446667,
    },
    {  
        country: 'Serbia',
        city: 'Belgrade',
        latitude: 44.816667,  
        longitude: 20.466667,
    },
    {  
        country: 'Singapore',
        city: 'Singapore',
        latitude: 1.3, 	
        longitude: 103.8,
    },
    {  
        country: 'Slovakia',
        city: 'Bratislava',
        latitude: 48.143889,  
        longitude: 17.109722,
    },
    {  
        country: 'Sri Lanka',
        city: 'Colombo',
        latitude: 6.934444,  
        longitude: 79.842778,
    },
    {  
        country: 'Sweden',
        city: 'Stockholm',
        latitude: 59.329444,  
        longitude: 18.068611,
    },
    {  
        country: 'Tanzania',
        city: 'Dar es Salaam',
        latitude: -6.8,  
        longitude: 39.283333,
    },
    {  
        country: 'Thailand',
        city: 'Bangkok',
        latitude:  13.7525,  
        longitude: 100.494167,
    },
    {  
        country: 'Zambia',
        city: 'Lusaka',
        latitude: -15.416667,  
        longitude: 28.283333,
    },
    {  
        country: 'Uruguay',
        city: 'Montevideo',
        latitude: -34.883611,  
        longitude: -56.181944,
    },
    {  
        country: 'The Bahamas',
        city: 'Nassau',
        latitude: 25.06,  
        longitude: -77.345,
    },
    {  
        country: 'Bolivia',
        city: 'La Paz',
        latitude: -16.5,  
        longitude: -68.15,
    },
    {  
        country: 'Chile',
        city: 'Santiago',
        latitude: -33.45,  
        longitude: -70.666667,
    },
    {  
        country: 'Ghana',
        city: 'Accra',
        latitude: 5.55,  
        longitude: -0.2,
    },
    {  
        country: 'Haiti',
        city: 'Port-au-Prince',
        latitude: 18.533333,  
        longitude: -72.333333,
    },
    {  
        country: 'Australia',
        city: 'Melbourne',
        latitude: -37.813611,   
        longitude: 144.963056,
    },
    {  
        country: 'Korea, North',
        city: 'Pyongyang',
        latitude: 39.019444,   
        longitude: 125.738056,
    },
    {  
        country: 'Luxembourg',
        city: 'Luxembourg',
        latitude: 49.6106,  
        longitude: 6.1328,
    },
]