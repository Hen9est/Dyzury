document.addEventListener('DOMContentLoaded', function() {
    // Sprawdzenie, czy dane dyżurów są dostępne
    if (typeof dutyScheduleData === 'undefined') {
        console.error("Błąd: Nie znaleziono danych w pliku data.js!");
        document.getElementById('main-title').textContent = "Błąd ładowania danych!";
        return;
    }

    const { breaks, locations, dailySchedules } = dutyScheduleData;
    const tableElement = document.getElementById('duty-table');
    const titleElement = document.getElementById('main-title');
    
    // Ustawia, ile minut przed przerwą ma się ona podświetlić jako "nadchodząca"
    const PRE_BREAK_HIGHLIGHT_MINUTES = 10; 

    /**
     * Generuje tabelę z harmonogramem dyżurów dla bieżącego dnia.
     */
    function generateScheduleForToday() {
        const now = new Date();
        const dayName = now.toLocaleString('pl-PL', { weekday: 'long' }).toLowerCase();
        const schedule = dailySchedules[dayName];
        
        const capitalizedDayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
        titleElement.textContent = `Harmonogram dyżurów - ${capitalizedDayName}`;

        if (!schedule || !tableElement) {
            titleElement.textContent = "Dzisiaj brak dyżurów";
            if(tableElement) tableElement.innerHTML = '';
            return;
        }

        tableElement.innerHTML = '';

        const thead = document.createElement('thead');
        let headerRowHTML = '<tr><th>Przerwa</th>';
        locations.forEach(location => {
            headerRowHTML += `<th class="location-header" style="background-color: ${location.color};">${location.name}</th>`;
        });
        headerRowHTML += '</tr>';
        thead.innerHTML = headerRowHTML;
        tableElement.appendChild(thead);

        const tbody = document.createElement('tbody');
        breaks.forEach((breakName, breakIndex) => {
            const row = document.createElement('tr');
            row.id = `break-${breakIndex}`;
            
            row.innerHTML = `<td class="break-name">${breakName}</td>`;

            const teachersOnBreak = schedule[breakIndex] || [];
            locations.forEach((_, locationIndex) => {
                const teacherName = teachersOnBreak[locationIndex] || '';
                // Użycie innerHTML pozwala na obsługę tagu <br>
                row.innerHTML += `<td>${teacherName}</td>`;
            });
            tbody.appendChild(tbody);
        });
        tableElement.appendChild(tbody);
    }

    /**
     * Podświetla wiersz z przerwą, która aktualnie trwa lub wkrótce się rozpocznie.
     */
    function highlightCurrentAndUpcomingBreak() {
        const now = new Date();
        const dayName = now.toLocaleString('pl-PL', { weekday: 'long' }).toLowerCase();

        if (!dailySchedules[dayName]) return;
        
        document.querySelectorAll('#duty-table tr').forEach(row => {
            row.classList.remove('current-break-row', 'upcoming-break-row');
        });

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
            
            const preBreakTime = new Date(start.getTime() - PRE_BREAK_HIGHLIGHT_MINUTES * 60000);

            const row = document.getElementById(`break-${breakIndex}`);
            if (!row) return;

            if (now >= start && now <= end) {
                row.classList.add('current-break-row');
            } else if (now >= preBreakTime && now < start) {
                row.classList.add('upcoming-break-row');
            }
        });
    }

    generateScheduleForToday();
    highlightCurrentAndUpcomingBreak();
    setInterval(highlightCurrentAndUpcomingBreak, 60000); 
});

