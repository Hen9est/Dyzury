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

    // Rozkłady dyżurów dla poszczególnych dni tygodnia zaktualizowane na podstawie pliku XLSX
    dailySchedules: {
        "poniedziałek": [
            ["K. Matysek-Sobolewska", "M. Szydłowska", "K. Miąsik<br>P. Latosińska", "O. Ginalska", "M. Gil", "K. Bugajska", "T. Zygmunt", "", "K. Czajęcka"],
            ["K. Staszczyk", "R. Ciszewska", "A. Pierzchała-Badura<br>J. Muc", "M. Ankiewicz", "A. Stankiewicz", "J. Wojtan", "R. Rogalski", "", "D. Piątek"],
            ["E. Szostak", "R. Rogalski", "E. Łubińska<br>ks. A. Hepek", "M. Niedbał", "T. Majewski", "M. Gil", "M. Rzepka", "", "J. Jaworska"],
            ["W. Wrzaszcz", "J. Miecznik-Warda", "A. Pierzchała-Badura<br>P. Latosińska", "M. Szeligiewicz", "K. Jochymek", "K. Bugajska", "K. Jakubowska", "", "T. Zygmunt"],
            ["E. Szostak", "M. Szydłowska", "A. Szydłowska<br>J. Muc", "A. Misiołek", "E. Krzyżyk", "I. Wilczyńska", "T. Zygmunt", "J. Jaworska", "D. Piątek"],
            ["W. Wrzaszcz", "J. Miecznik-Warda", "K. Miąsik<br>A. Lorenc", "O. Ginalska", "T. Majewski", "J. Wojtan", "K. Jakubowska", "", "K. Czajęcka"],
            ["", "", "<br>", "", "", "", "", "", ""],
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "wtorek": [
            ["K. Matysek-Sobolewska", "M. Szydłowska", "I. Wilczyńska<br>M. Niedbał", "", "M. Gil", "J. Wojtan", "K. Jakubowska", "", "J. Jaworska"],
            ["E. Szostak", "K. Miąsik", "A. Szydłowska<br>A. Lorenc", "", "T. Majewski", "K. Bugajska", "A. Mizerska", "", "T. Zygmunt"],
            ["W. Wrzaszcz", "J. Miecznik-Warda", "A. Pierzchała-Badura<br>E. Łubińska", "A. Misiołek", "A. Stankiewicz", "K. Jochymek", "K. Jakubowska", "", "K. Matysek-Sobolewska"],
            ["E. Szostak", "R. Ciszewska", "A. Szydłowska<br>D. Kolany", "M. Szeligiewicz", "E. Krzyżyk", "M. Gil", "A. Mizerska", "J. Jaworska", "D. Piątek"],
            ["K. Staszczyk", "K. Miąsik", "A. Pierzchała-Badura<br>J. Muc", "", "T. Majewski", "K. Bugajska", "K. Jakubowska", "", "K. Czajęcka"],
            ["", "", "<br>", "", "", "", "", "", ""],
            ["", "", "<br>", "", "", "", "", "", ""],
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "środa": [
            ["E. Szostak", "M. Szydłowska", "A. Pierzchała-Badura<br>ks. A. Hepek", "A. Misiołek", "J. Szymkowicz", "I. Wilczyńska", "A. Mizerska", "", "D. Piątek"],
            ["K. Matysek-Sobolewska", "M. Szydłowska", "I. Wilczyńska<br>D. Kolany", "O. Ginalska", "M. Gil", "J. Wojtan", "T. Zygmunt", "", "K. Czajęcka"],
            ["K. Staszczyk", "J. Miecznik-Warda", "K. Miąsik<br>P. Latosińska", "A. Misiołek", "A. Stankiewicz", "K. Bugajska", "M. Rzepka", "", "J. Jaworska"],
            ["W. Wrzaszcz", "R. Ciszewska", "A. Szydłowska<br>A. Lorenc", "M. Szeligiewicz", "K. Jochymek", "M. Gil", "K. Jakubowska", "T. Zygmunt", "D. Piątek"],
            ["E. Szostak", "J. Miecznik-Warda", "I. Wilczyńska<br>E. Łubińska", "O. Ginalska", "E. Krzyżyk", "I. Wilczyńska", "A. Mizerska", "J. Jaworska", "K. Matysek-Sobolewska"],
            ["W. Wrzaszcz", "R. Rogalski", "A. Szydłowska<br>D. Gałka", "M. Ankiewicz", "T. Majewski", "J. Wojtan", "K. Jakubowska", "", "K. Czajęcka"],
            ["", "", "<br>", "", "", "", "", "", ""],
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "czwartek": [
            ["K. Matysek-Sobolewska", "R. Ciszewska", "A. Pierzchała-Badura<br>P. Latosińska", "M. Ankiewicz", "J. Szymkowicz", "I. Wilczyńska", "A. Mizerska", "", "K. Czajęcka"],
            ["K. Staszczyk", "M. Szydłowska", "E. Łubińska<br>ks. A. Hepek", "O. Ginalska", "A. Stankiewicz", "J. Wojtan", "M. Rzepka", "", "D. Piątek"],
            ["E. Szostak", "K. Miąsik", "A. Szydłowska<br>A. Lorenc", "M. Szeligiewicz", "T. Majewski", "M. Gil", "K. Jakubowska", "", "J. Jaworska"],
            ["W. Wrzaszcz", "J. Miecznik-Warda", "A. Pierzchała-Badura<br>D. Gałka", "A. Misiołek", "K. Jochymek", "K. Bugajska", "A. Mizerska", "J. Jaworska", "T. Zygmunt"],
            ["K. Staszczyk", "R. Ciszewska", "I. Wilczyńska<br>J. Muc", "M. Ankiewicz", "E. Krzyżyk", "M. Gil", "M. Rzepka", "", "K. Czajęcka"],
            ["W. Wrzaszcz", "K. Miąsik", "E. Łubińska<br>M. Niedbał", "O. Ginalska", "T. Majewski", "J. Wojtan", "K. Jakubowska", "", "K. Matysek-Sobolewska"],
            ["", "", "<br>", "", "", "", "", "", ""],
            ["", "", "<br>", "", "", "", "", "", ""]
        ],
        "piątek": [
            ["E. Szostak", "M. Szydłowska", "A. Pierzchała-Badura<br>P. Latosińska", "M. Ankiewicz", "T. Majewski", "J. Wojtan", "A. Mizerska", "", "T. Zygmunt"],
            ["ks. A. Hepek", "M. Niedbał", "A. Szydłowska<br>D. Gałka", "A. Stankiewicz", "K. Jochymek", "M. Rzepka", "K. Jakubowska", "", "K. Czajęcka"],
            ["E. Szostak", "J. Miecznik-Warda", "I. Wilczyńska<br>J. Muc", "M. Ankiewicz", "E. Krzyżyk", "K. Bugajska", "T. Zygmunt", "", "J. Jaworska"],
            ["W. Wrzaszcz", "R. Ciszewska", "A. Szydłowska<br>D. Kolany", "M. Szeligiewicz", "M. Gil", "I. Wilczyńska", "A. Mizerska", "J. Jaworska", "D. Piątek"],
            ["K. Staszczyk", "R. Rogalski", "K. Miąsik<br>ks. A. Hepek", "O. Ginalska", "M. Gil", "J. Wojtan", "M. Rzepka", "", "K. Matysek-Sobolewska"],
            ["W. Wrzaszcz", "J. Miecznik-Warda", "A. Pierzchała-Badura<br>E. Łubińska", "M. Ankiewicz", "T. Majewski", "K. Jochymek", "K. Jakubowska", "", "K. Czajęcka"],
            ["", "", "<br>", "", "", "", "", "", ""],
            ["", "", "<br>", "", "", "", "", "", ""]
        ]
    }
};
