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
        { name: "Obiad", color: "#FFC899" }
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
            // PRZERWA 1 (Wtorek)
            ["Nauczyciel WT1", "Nauczyciel WT2", "Nauczyciel WT3<br>Nauczyciel WT3a", "Nauczyciel WT4", "Nauczyciel WT5", "Nauczyciel WT6", "Nauczyciel WT7", "Nauczyciel WT8", "Nauczyciel WT9"],
            // PRZERWA 2 (Wtorek)
            ["Nauczyciel WT10", "Nauczyciel WT11", "Nauczyciel WT12<br>Nauczyciel WT12a", "Nauczyciel WT13", "Nauczyciel WT14", "Nauczyciel WT15", "Nauczyciel WT16", "Nauczyciel WT17", "Nauczyciel WT18"],
            // PRZERWA 3 (Wtorek)
            ["Nauczyciel WT19", "Nauczyciel WT20", "Nauczyciel WT21<br>Nauczyciel WT21a", "Nauczyciel WT22", "Nauczyciel WT23", "Nauczyciel WT24", "Nauczyciel WT25", "Nauczyciel WT26", "Nauczyciel WT27"],
            // PRZERWA 4 (Wtorek)
            ["Nauczyciel WT28", "Nauczyciel WT29", "Nauczyciel WT30<br>Nauczyciel WT30a", "Nauczyciel WT31", "Nauczyciel WT32", "Nauczyciel WT33", "Nauczyciel WT34", "Nauczyciel WT35", "Nauczyciel WT36"],
            // PRZERWA 5 (Wtorek)
            ["Nauczyciel WT37", "Nauczyciel WT38", "Nauczyciel WT39<br>Nauczyciel WT39a", "Nauczyciel WT40", "Nauczyciel WT41", "Nauczyciel WT42", "Nauczyciel WT43", "Nauczyciel WT44", "Nauczyciel WT45"],
            // PRZERWA 6 (Wtorek)
            ["Nauczyciel WT46", "Nauczyciel WT47", "Nauczyciel WT48<br>Nauczyciel WT48a", "Nauczyciel WT49", "Nauczyciel WT50", "Nauczyciel WT51", "Nauczyciel WT52", "Nauczyciel WT53", "Nauczyciel WT54"],
            // PRZERWA 7 (Wtorek)
            ["Nauczyciel WT55", "Nauczyciel WT56", "Nauczyciel WT57<br>Nauczyciel WT57a", "Nauczyciel WT58", "Nauczyciel WT59", "Nauczyciel WT60", "Nauczyciel WT61", "Nauczyciel WT62", "Nauczyciel WT63"],
            // PRZERWA 8 (Wtorek)
            ["Nauczyciel WT64", "Nauczyciel WT65", "Nauczyciel WT66<br>Nauczyciel WT66a", "Nauczyciel WT67", "Nauczyciel WT68", "Nauczyciel WT69", "Nauczyciel WT70", "Nauczyciel WT71", "Nauczyciel WT72"]
        ],
        "środa": [
            // PRZERWA 1 (Środa)
            ["Nauczyciel SR1", "Nauczyciel SR2", "Nauczyciel SR3<br>Nauczyciel SR3a", "Nauczyciel SR4", "Nauczyciel SR5", "Nauczyciel SR6", "Nauczyciel SR7", "Nauczyciel SR8", "Nauczyciel SR9"],
            // PRZERWA 2 (Środa)
            ["Nauczyciel SR10", "Nauczyciel SR11", "Nauczyciel SR12<br>Nauczyciel SR12a", "Nauczyciel SR13", "Nauczyciel SR14", "Nauczyciel SR15", "Nauczyciel SR16", "Nauczyciel SR17", "Nauczyciel SR18"],
            // PRZERWA 3 (Środa)
            ["Nauczyciel SR19", "Nauczyciel SR20", "Nauczyciel SR21<br>Nauczyciel SR21a", "Nauczyciel SR22", "Nauczyciel SR23", "Nauczyciel SR24", "Nauczyciel SR25", "Nauczyciel SR26", "Nauczyciel SR27"],
            // PRZERWA 4 (Środa)
            ["Nauczyciel SR28", "Nauczyciel SR29", "Nauczyciel SR30<br>Nauczyciel SR30a", "Nauczyciel SR31", "Nauczyciel SR32", "Nauczyciel SR33", "Nauczyciel SR34", "Nauczyciel SR35", "Nauczyciel SR36"],
            // PRZERWA 5 (Środa)
            ["Nauczyciel SR37", "Nauczyciel SR38", "Nauczyciel SR39<br>Nauczyciel SR39a", "Nauczyciel SR40", "Nauczyciel SR41", "Nauczyciel SR42", "Nauczyciel SR43", "Nauczyciel SR44", "Nauczyciel SR45"],
            // PRZERWA 6 (Środa)
            ["Nauczyciel SR46", "Nauczyciel SR47", "Nauczyciel SR48<br>Nauczyciel SR48a", "Nauczyciel SR49", "Nauczyciel SR50", "Nauczyciel SR51", "Nauczyciel SR52", "Nauczyciel SR53", "Nauczyciel SR54"],
            // PRZERWA 7 (Środa)
            ["Nauczyciel SR55", "Nauczyciel SR56", "Nauczyciel SR57<br>Nauczyciel SR57a", "Nauczyciel SR58", "Nauczyciel SR59", "Nauczyciel SR60", "Nauczyciel SR61", "Nauczyciel SR62", "Nauczyciel SR63"],
            // PRZERWA 8 (Środa)
            ["Nauczyciel SR64", "Nauczyciel SR65", "Nauczyciel SR66<br>Nauczyciel SR66a", "Nauczyciel SR67", "Nauczyciel SR68", "Nauczyciel SR69", "Nauczyciel SR70", "Nauczyciel SR71", "Nauczyciel SR72"]
        ],
        "czwartek": [
            // PRZERWA 1 (Czwartek)
            ["Nauczyciel CZ1", "Nauczyciel CZ2", "Nauczyciel CZ3<br>Nauczyciel CZ3a", "Nauczyciel CZ4", "Nauczyciel CZ5", "Nauczyciel CZ6", "Nauczyciel CZ7", "Nauczyciel CZ8", "Nauczyciel CZ9"],
            // PRZERWA 2 (Czwartek)
            ["Nauczyciel CZ10", "Nauczyciel CZ11", "Nauczyciel CZ12<br>Nauczyciel CZ12a", "Nauczyciel CZ13", "Nauczyciel CZ14", "Nauczyciel CZ15", "Nauczyciel CZ16", "Nauczyciel CZ17", "Nauczyciel CZ18"],
            // PRZERWA 3 (Czwartek)
            ["Nauczyciel CZ19", "Nauczyciel CZ20", "Nauczyciel CZ21<br>Nauczyciel CZ21a", "Nauczyciel CZ22", "Nauczyciel CZ23", "Nauczyciel CZ24", "Nauczyciel CZ25", "Nauczyciel CZ26", "Nauczyciel CZ27"],
            // PRZERWA 4 (Czwartek)
            ["Nauczyciel CZ28", "Nauczyciel CZ29", "Nauczyciel CZ30<br>Nauczyciel CZ30a", "Nauczyciel CZ31", "Nauczyciel CZ32", "Nauczyciel CZ33", "Nauczyciel CZ34", "Nauczyciel CZ35", "Nauczyciel CZ36"],
            // PRZERWA 5 (Czwartek)
            ["Nauczyciel CZ37", "Nauczyciel CZ38", "Nauczyciel CZ39<br>Nauczyciel CZ39a", "Nauczyciel CZ40", "Nauczyciel CZ41", "Nauczyciel CZ42", "Nauczyciel CZ43", "Nauczyciel CZ44", "Nauczyciel CZ45"],
            // PRZERWA 6 (Czwartek)
            ["Nauczyciel CZ46", "Nauczyciel CZ47", "Nauczyciel CZ48<br>Nauczyciel CZ48a", "Nauczyciel CZ49", "Nauczyciel CZ50", "Nauczyciel CZ51", "Nauczyciel CZ52", "Nauczyciel CZ53", "Nauczyciel CZ54"],
            // PRZERWA 7 (Czwartek)
            ["Nauczyciel CZ55", "Nauczyciel CZ56", "Nauczyciel CZ57<br>Nauczyciel CZ57a", "Nauczyciel CZ58", "Nauczyciel CZ59", "Nauczyciel CZ60", "Nauczyciel CZ61", "Nauczyciel CZ62", "Nauczyciel CZ63"],
            // PRZERWA 8 (Czwartek)
            ["Nauczyciel CZ64", "Nauczyciel CZ65", "Nauczyciel CZ66<br>Nauczyciel CZ66a", "Nauczyciel CZ67", "Nauczyciel CZ68", "Nauczyciel CZ69", "Nauczyciel CZ70", "Nauczyciel CZ71", "Nauczyciel CZ72"]
        ],
        "piątek": [
            // PRZERWA 1 (Piątek)
            ["Nauczyciel PT1", "Nauczyciel PT2", "Nauczyciel PT3<br>Nauczyciel PT3a", "Nauczyciel PT4", "Nauczyciel PT5", "Nauczyciel PT6", "Nauczyciel PT7", "Nauczyciel PT8", "Nauczyciel PT9"],
            // PRZERWA 2 (Piątek)
            ["Nauczyciel PT10", "Nauczyciel PT11", "Nauczyciel PT12<br>Nauczyciel PT12a", "Nauczyciel PT13", "Nauczyciel PT14", "Nauczyciel PT15", "Nauczyciel PT16", "Nauczyciel PT17", "Nauczyciel PT18"],
            // PRZERWA 3 (Piątek)
            ["Nauczyciel PT19", "Nauczyciel PT20", "Nauczyciel PT21<br>Nauczyciel PT21a", "Nauczyciel PT22", "Nauczyciel PT23", "Nauczyciel PT24", "Nauczyciel PT25", "Nauczyciel PT26", "Nauczyciel PT27"],
            // PRZERWA 4 (Piątek)
            ["Nauczyciel PT28", "Nauczyciel PT29", "Nauczyciel PT30<br>Nauczyciel PT30a", "Nauczyciel PT31", "Nauczyciel PT32", "Nauczyciel PT33", "Nauczyciel PT34", "Nauczyciel PT35", "Nauczyciel PT36"],
            // PRZERWA 5 (Piątek)
            ["Nauczyciel PT37", "Nauczyciel PT38", "Nauczyciel PT39<br>Nauczyciel PT39a", "Nauczyciel PT40", "Nauczyciel PT41", "Nauczyciel PT42", "Nauczyciel PT43", "Nauczyciel PT44", "Nauczyciel PT45"],
            // PRZERWA 6 (Piątek)
            ["Nauczyciel PT46", "Nauczyciel PT47", "Nauczyciel PT48<br>Nauczyciel PT48a", "Nauczyciel PT49", "Nauczyciel PT50", "Nauczyciel PT51", "Nauczyciel PT52", "Nauczyciel PT53", "Nauczyciel PT54"],
            // PRZERWA 7 (Piątek)
            ["Nauczyciel PT55", "Nauczyciel PT56", "Nauczyciel PT57<br>Nauczyciel PT57a", "Nauczyciel PT58", "Nauczyciel PT59", "Nauczyciel PT60", "Nauczyciel PT61", "Nauczyciel PT62", "Nauczyciel PT63"],
            // PRZERWA 8 (Piątek)
            ["Nauczyciel PT64", "Nauczyciel PT65", "Nauczyciel PT66<br>Nauczyciel PT66a", "Nauczyciel PT67", "Nauczyciel PT68", "Nauczyciel PT69", "Nauczyciel PT70", "Nauczyciel PT71", "Nauczyciel PT72"]
        ]
    }
};
