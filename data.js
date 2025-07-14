// data.js - Dane dyżurów
const dutyScheduleData = {
    // Lista przerw w ciągu dnia (niezmienna dla wszystkich dni)
    breaks: [
        "P1 (8:45-8:55)",
        "P2 (9:40-9:50)",
        "P3 (10:35-10:45)",
        "P4 (11:30-11:40)",
        "P5 (12:25-12:35)",
        "P6 (13:20-13:30)",
        "P7 (14:15-14:25)",
        "P8 (15:10-15:20)"
    ],

    // Lista miejsc dyżurów wraz z przypisanymi kolorami (niezmienna dla wszystkich dni)
    locations: [
        { name: "Zielony", color: "#6EB446" },
        { name: "Fioletowy", color: "#965AB4" },
        { name: "Pomarańczowy", color: "#FF9933" },
        { name: "Underground", color: "#646464" },
        { name: "Żółty", color: "#FFE646" },
        { name: "Czerwony", color: "#C83232" },
        { name: "Niebieski", color: "#4682C8" },
        { name: "Parter", color: "#DCDCDC" },
        { name: "Obiad", color: "#FFC899" } // Zmieniono z "Obiadowy" na "Obiad"
    ],

    // Rozkłady dyżurów dla poszczególnych dni tygodnia
    // Nazwy dni tygodnia muszą być małą literą, zgodnie z toLocaleDateString('pl-PL')
    dailySchedules: {
        "poniedziałek": [
            // Przerwa 1
            ["Kowalski", "Nowak", "Lewandowski<br>Nauczyciel A", "Sikora", "Zielińska", "Wójcik", "Mazur", "Krawczyk", "Lis"],
            // Przerwa 2
            ["Bąk", "Kaczmarek", "Piotrowska<br>Nauczyciel B", "Zając", "Duda", "Kołodziej", "Kowalczyk", "Górecki", "Olszewski"],
            // Przerwa 3
            ["Stasiak", "Jankowski", "Woźniak<br>Nauczyciel C", "Grabowski", "Adamski", "Majewska", "Pająk", "Szymański", "Włodarczyk"],
            // Przerwa 4
            ["Walczak", "Kruk", "Pietrzak<br>Nauczyciel D", "Nowicka", "Pawlak", "Michalski", "Baran", "Rutkowski", "Kwiecień"],
            // Przerwa 5
            ["Marciniak", "Wróbel", "Czarnecka<br>Nauczyciel E", "Mazurek", "Kozłowski", "Sawicki", "Jaworski", "Borkowski", "Wojciechowski"],
            // Przerwa 6
            ["Błaszczyk", "Dąbrowska", "Ziółkowski<br>Nauczyciel F", "Sobczak", "Urban", "Gajewski", "Kubiak", "Kamińska", "Rybak"],
            // Przerwa 7
            ["Ostrowski", "Szczepański", "Kowal<br>Nauczyciel G", "Mucha", "Wysocki", "Kaczmarczyk", "Jasiński", "Głowacki", "Drozd"],
            // Przerwa 8
            ["Kozak", "Lisowski", "Sadowska<br>Nauczyciel H", "Piasecki", "Cieślak", "Wesołowski", "Grzelak", "Król", "Zieliński"]
        ],
        "wtorek": [
            // PRZERWA 1 (Wtorek) - Uzupełnij nazwiskami, pamiętając o dwóch osobach na Pomarańczowym
            ["Nauczyciel WT1", "Nauczyciel WT2", "Nauczyciel WT3<br>Nauczyciel WT3a", "Nauczyciel WT4", "Nauczyciel WT5", "Nauczyciel WT6", "Nauczyciel WT7", "Nauczyciel WT8", "Nauczyciel WT9"],
            // PRZERWA 2 (Wtorek)
            ["Nauczyciel WT10", "Nauczyciel WT11", "Nauczyciel WT12<br>Nauczyciel WT12a", "Nauczyciel WT13", "Nauczyciel WT14", "Nauczyciel WT15", "Nauczyciel WT16", "Nauczyciel WT17", "Nauczyciel WT18"],
            // PRZERWA 3 (Wtorek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 4 (Wtorek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 5 (Wtorek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 6 (Wtorek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 7 (Wtorek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 8 (Wtorek)
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "środa": [
            // PRZERWA 1 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 2 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 3 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 4 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 5 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 6 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 7 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 8 (Środa)
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "czwartek": [
            // PRZERWA 1 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 2 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 3 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 4 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 5 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 6 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 7 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 8 (Czwartek)
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "piątek": [
            // PRZERWA 1 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 2 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 3 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 4 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 5 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 6 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 7 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""],
            // PRZERWA 8 (Piątek)
            ["", "", "<br>", "", "", "", "", "", ""]
        ]
    }
};
