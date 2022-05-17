//Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функция фильтрации:

function filterPrices(courses, prices) {

    if (prices[0] === null) {
        prices[0] = 0;
    }

    if (prices[1] === null) {
        prices[1] = Number.POSITIVE_INFINITY;
    }

    return courses.filter(function (c) {

        if (c.prices[0] === null) {
            c.prices[0] = 0;
        }

        if (c.prices[1] === null) {
            c.prices[1] = Number.POSITIVE_INFINITY;
        }

        if (c.prices[0] >= prices[0] && c.prices[0] <= prices[1]) {
            return true;
        }

        if (c.prices[1] >= prices[0] && c.prices[1] <= prices[1]) {
            return true;
        }

    })
}


// [подходящие курсы для каждого варианта фильтра]

// requiredRange1

[
    {
        "name": "Courses in England",
        "prices": [
            0,
            100
        ]
    },
    {
        "name": "Courses in Italy",
        "prices": [
            100,
            200
        ]
    },
    {
        "name": "Courses in Russia",
        "prices": [
            0,
            400
        ]
    },
    {
        "name": "Courses in China",
        "prices": [
            50,
            250
        ]
    },
    {
        "name": "Courses in USA",
        "prices": [
            200,
            null
        ]
    },
    {
        "name": "Courses in Kazakhstan",
        "prices": [
            56,
            324
        ]
    },
    {
        "name": "Courses in France",
        "prices": [
            0,
            null
        ]
    }
]

// requiredRange2

[
    {
        "name": "Courses in England",
        "prices": [
            0,
            100
        ]
    },
    {
        "name": "Courses in Italy",
        "prices": [
            100,
            200
        ]
    },
    {
        "name": "Courses in China",
        "prices": [
            50,
            250
        ]
    },
    {
        "name": "Courses in USA",
        "prices": [
            200,
            null
        ]
    },
    {
        "name": "Courses in Kazakhstan",
        "prices": [
            56,
            324
        ]
    }
]

// requiredRange3

[
    {
        "name": "Courses in Germany",
        "prices": [
            500,
            null
        ]
    },
    {
        "name": "Courses in Italy",
        "prices": [
            100,
            200
        ]
    },
    {
        "name": "Courses in Russia",
        "prices": [
            0,
            400
        ]
    },
    {
        "name": "Courses in China",
        "prices": [
            50,
            250
        ]
    },
    {
        "name": "Courses in USA",
        "prices": [
            200,
            null
        ]
    },
    {
        "name": "Courses in Kazakhstan",
        "prices": [
            56,
            324
        ]
    },
    {
        "name": "Courses in France",
        "prices": [
            0,
            null
        ]
    }
]

// Aлгоритм сортировки курсов по цене (от меньшей к большей)

function sortPrice(courses) {
    return courses.sort(function(a,b) {
        return a.prices[0] - b.prices[0];
    })
}