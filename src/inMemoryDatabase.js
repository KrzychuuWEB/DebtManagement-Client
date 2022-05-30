export const debtsInMemory = [
    {
        id: 1,
        name: "Pieniądze",
        description: "Odda za 1 msc",
        price: 200,
        isDevoted: false,
        addDate: "23-05-2022",
        editDate: "28-05-2022",
        debtor: {
            id: 1,
            firstName: "Krzysztof",
            lastName: "Nowak",
        },
    },
    {
        id: 2,
        name: "Tester",
        description: "Allegro",
        price: 300,
        isDevoted: true,
        addDate: "22-05-2022",
        editDate: "25-05-2022",
        debtor: {
            id: 1,
            firstName: "Krzysztof",
            lastName: "Nowak",
        },
    },
    {
        id: 3,
        name: "Koszulka",
        description: "Allegro",
        price: 400,
        isDevoted: false,
        addDate: "27-05-2022",
        editDate: "27-05-2022",
        debtor: {
            id: 2,
            firstName: "Jan",
            lastName: "Kowalski",
        },
    },
];

export const debtorsInMemory = [
    {
        id: 1,
        firstName: "Krzysztof",
        lastName: "Nowak",
        isEnabled: false,
        createdAt: "24-05-2022",
    },
    {
        id: 2,
        firstName: "Jan",
        lastName: "Kowalski",
        isEnabled: false,
        createdAt: "27-05-2022",
    },
];