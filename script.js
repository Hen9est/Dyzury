// script.js - Logika do generowania wszystkich tabel dyżurów

document.addEventListener('DOMContentLoaded', function() {
    // Sprawdzenie, czy dane dyżurów są dostępne
    if (typeof dutyScheduleData === 'undefined') {
        console.error("Błąd: Nie znaleziono danych w pliku data.js!");
        return;
    }

    const { breaks, locations, dailySchedules } = dutyScheduleData;
    const daysOfWeek = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek"];

    /**
     * Generuje kompletną tabelę HTML dla określonego dnia tygodnia.
     * @param {string} dayName - Nazwa dnia (np. "poniedziałek").
     */
    function generateTableForDay(dayName) {
        const schedule = dailySchedules[dayName];
        if (!schedule) return; // Pomiń, jeśli brak danych dla tego dnia

        const tableId = `table-${dayName}`;
        const tableElement = document.getElementById(tableId);
        if (!tableElement) return; // Pomiń, jeśli nie znaleziono elementu tabeli w HTML

        // 1. Tworzenie nagłówka tabeli (thead) z nazwami lokalizacji
        const thead = document.createElement('thead');
        let headerRowHTML = '<tr><th>Przerwa</th>';
        locations.forEach(location => {
            headerRowHTML += `<th class="location-header" style="background-color: ${location.color};">${location.name}</th>`;
        });
        headerRowHTML += '</tr>';
        thead.innerHTML = headerRowHTML;
        tableElement.appendChild(thead);

        // 2. Tworzenie ciała tabeli (tbody) z dyżurami
        const tbody = document.createElement('tbody');
        breaks.forEach((breakName, breakIndex) => {
            const row = document.createElement('tr');
            // Unikalne ID dla każdego wiersza, np. "poniedziałek-break-0"
            row.id = `${dayName}-break-${breakIndex}`; 
            
            // Komórka z nazwą przerwy
            row.innerHTML = `<td class="break-name">${breakName}</td>`;

            // Komórki z nazwiskami nauczycieli
            const teachersOnBreak = schedule[breakIndex] || [];
            locations.forEach((_, locationIndex) => {
                // Użycie `innerHTML` pozwala na interpretację tagu <br> dla dwóch nauczycieli
                const teacherName = teachersOnBreak[locationIndex] || '';
                row.innerHTML += `<td>${teacherName}</td>`;
            });
            tbody.appendChild(row);
        });
        tableElement.appendChild(tbody);
    }

    // Pętla generująca tabele dla wszystkich dni roboczych
    daysOfWeek.forEach(day => {
        generateTableForDay(day);
    });
    
    /**
     * Podświetla wiersz w tabeli odpowiadający aktualnie trwającej przerwie.
     */
    function highlightCurrentBreak() {
        const now = new Date();
        const currentDayName = now.toLocaleDateString('pl-PL', { weekday: 'long' }).toLowerCase();
        
        // Funkcja działa tylko w dni robocze
        if (!daysOfWeek.includes(currentDayName)) {
            return;
        }

        breaks.forEach((breakName, breakIndex) => {
            const timeMatch = breakName.match(/(\d{1,2}:\d{2})-(\d{1,2}:\d{2})/);
            if (!timeMatch) return;

            const [_, startTimeStr, endTimeStr] = timeMatch;
            
            const start = new Date(now);
            const [startHours, startMinutes] = startTimeStr.split(':');
            start.setHours(parseInt(startHours), parseInt(startMinutes), 0, 0);

            const end = new Date(now);
            const [endHours, endMinutes] = endTimeStr.split(':');
            end.setHours(parseInt(endHours), parseInt(endMinutes), 0, 0);

            const rowId = `${currentDayName}-break-${breakIndex}`;
            const row = document.getElementById(rowId);
            if (!row) return;

            // Najpierw usuń podświetlenie, aby uniknąć duplikatów
            row.classList.remove('current-break-row');

            // Jeśli aktualny czas jest w trakcie przerwy, dodaj podświetlenie
            if (now >= start && now <= end) {
                row.classList.add('current-break-row');
            }
        });
    }

    // Uruchom podświetlanie od razu i ustaw odświeżanie co minutę
    highlightCurrentBreak();
    setInterval(highlightCurrentBreak, 60000);
});
