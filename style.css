// Krok 1: Twoje dane z pliku CSV w formacie JavaScript
const scheduleData = [
    { day: "pon.", time: "8:45-8:55", location: "parter", teacher: "Nowak A." },
    { day: "pon.", time: "8:45-8:55", location: "I piętro", teacher: "Barańska" },
    { day: "pon.", time: "9:40-9:50", location: "parter", teacher: "Głowacka" },
    { day: "pon.", time: "9:40-9:50", location: "I piętro", teacher: "Barańska" },
    { day: "pon.", time: "10:35-10:50", location: "parter", teacher: "Nowak A." },
    { day: "pon.", time: "10:35-10:50", location: "I piętro", teacher: "Kowalczyk" },
    { day: "pon.", time: "11:35-11:45", location: "parter", teacher: "Zając" },
    { day: "pon.", time: "11:35-11:45", location: "I piętro", teacher: "Kowalczyk" },
    { day: "wt.", time: "8:45-8:55", location: "parter", teacher: "Zając" },
    { day: "wt.", time: "8:45-8:55", location: "I piętro", teacher: "Głowacka" },
    { day: "wt.", time: "9:40-9:50", location: "parter", teacher: "Nowak A." },
    { day: "wt.", time: "9:40-9:50", location: "I piętro", teacher: "Głowacka" },
    { day: "wt.", time: "10:35-10:50", location: "parter", teacher: "Barańska" },
    { day: "wt.", time: "10:35-10:50", location: "I piętro", teacher: "Kowalczyk" },
    { day: "wt.", time: "11:35-11:45", location: "parter", teacher: "Barańska" },
    { day: "wt.", time: "11:35-11:45", location: "I piętro", teacher: "Kowalczyk" },
    { day: "śr.", time: "8:45-8:55", location: "parter", teacher: "Głowacka" },
    { day: "śr.", time: "8:45-8:55", location: "I piętro", teacher: "Barańska" },
    { day: "śr.", time: "9:40-9:50", location: "parter", teacher: "Głowacka" },
    { day: "śr.", time: "9:40-9:50", location: "I piętro", teacher: "Nowak A." },
    { day: "śr.", time: "10:35-10:50", location: "parter", teacher: "Zając" },
    { day: "śr.", time: "10:35-10:50", location: "I piętro", teacher: "Nowak A." },
    { day: "śr.", time: "11:35-11:45", location: "parter", teacher: "Zając" },
    { day: "śr.", time: "11:35-11:45", location: "I piętro", teacher: "Kowalczyk" },
    { day: "czw.", time: "8:45-8:55", location: "parter", teacher: "Kowalczyk" },
    { day: "czw.", time: "8:45-8:55", location: "I piętro", teacher: "Głowacka" },
    { day: "czw.", time: "9:40-9:50", location: "parter", teacher: "Kowalczyk" },
    { day: "czw.", time: "9:40-9:50", location: "I piętro", teacher: "Głowacka" },
    { day: "czw.", time: "10:35-10:50", location: "parter", teacher: "Nowak A." },
    { day: "czw.", time: "10:35-10:50", location: "I piętro", teacher: "Barańska" },
    { day: "czw.", time: "11:35-11:45", location: "parter", teacher: "Nowak A." },
    { day: "czw.", time: "11:35-11:45", location: "I piętro", teacher: "Barańska" },
    { day: "pt.", time: "8:45-8:55", location: "parter", teacher: "Zając" },
    { day: "pt.", time: "8:45-8:55", location: "I piętro", teacher: "Nowak A." },
    { day: "pt.", time: "9:40-9:50", location: "parter", teacher: "Zając" },
    { day: "pt.", time: "9:40-9:50", location: "I piętro", teacher: "Nowak A." },
    { day: "pt.", time: "10:35-10:50", location: "parter", teacher: "Kowalczyk" },
    { day: "pt.", time: "10:35-10:50", location: "I piętro", teacher: "Barańska" },
    { day: "pt.", time: "11:35-11:45", location: "parter", teacher: "Kowalczyk" },
    { day: "pt.", time: "11:35-11:45", location: "I piętro", teacher: "Barańska" },
];

// Mapowanie skrótów dni na numery używane przez JavaScript (0-niedziela, 1-poniedziałek, etc.)
const dayMap = { "pon.": 1, "wt.": 2, "śr.": 3, "czw.": 4, "pt.": 5 };

function updateSchedule() {
    const now = new Date();
    const currentDay = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Czas w minutach od północy

    // Ustawienie daty w nagłówku
    document.getElementById('header-date').innerText = `Dyżury na dzień: ${now.toLocaleDateString('pl-PL')}`;

    // Filtrowanie dyżurów tylko dla dzisiejszego dnia
    const todaySchedule = scheduleData.filter(duty => dayMap[duty.day] === currentDay);

    // Znajdowanie przerwy do podświetlenia
    let highlightIndex = -1;
    let nextBreakIndex = -1;
    let foundNextBreak = false;

    for (let i = 0; i < todaySchedule.length; i++) {
        const [startTimeStr, endTimeStr] = todaySchedule[i].time.split('-');
        const [startHour, startMinute] = startTimeStr.split(':').map(Number);
        const [endHour, endMinute] = endTimeStr.split(':').map(Number);
        const startTime = startHour * 60 + startMinute;
        const endTime = endHour * 60 + endMinute;

        // Sprawdź, czy przerwa właśnie trwa
        if (currentTime >= startTime && currentTime < endTime) {
            highlightIndex = i;
            break;
        }

        // Jeśli nie, znajdź pierwszą nadchodzącą przerwę
        if (currentTime < startTime && !foundNextBreak) {
            nextBreakIndex = i;
            foundNextBreak = true;
        }
    }
    
    // Jeśli żadna przerwa nie trwa, użyj najbliższej nadchodzącej
    if (highlightIndex === -1 && nextBreakIndex !== -1) {
        highlightIndex = nextBreakIndex;
    }

    // Wyświetlanie dyżurów w tabeli
    const tableBody = document.getElementById('schedule-body');
    tableBody.innerHTML = ''; // Czyszczenie tabeli przed dodaniem nowych danych

    todaySchedule.forEach((duty, index) => {
        const row = document.createElement('tr');
        if (index === highlightIndex) {
            row.classList.add('highlight');
        }
        row.innerHTML = `
            <td>${duty.time}</td>
            <td>${duty.location}</td>
            <td>${duty.teacher}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Uruchom funkcję od razu po załadowaniu strony, a potem odświeżaj co minutę
updateSchedule();
setInterval(updateSchedule, 60000); // 60000 milisekund = 1 minuta
