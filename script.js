// ===== DRAGGABLE WIDGETS ===== //
interact('.widget').draggable({
    inertia: true,
    modifiers: [
        interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
        })
    ],
    autoScroll: true,
    listeners: {
        move: dragMoveListener
    }
});

function dragMoveListener(event) {
    const target = event.target;
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
    target.style.transform = `translate(${x}px, ${y}px)`;
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

// ===== CLOCK ===== //
function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });
    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}
setInterval(updateClock, 1000);
updateClock();

// ===== SPOTIFY INTEGRATION ===== //
// Note: Spotify Web Playback SDK requires authentication (OAuth).
// This is a simplified mockup. Full integration requires a backend service.
document.getElementById('play-pause').addEventListener('click', () => {
    console.log("Play/Pause Spotify (requires OAuth)");
    // Actual implementation: https://developer.spotify.com/documentation/web-playback-sdk/
});

// ===== SYSTEM STATS (Mockup - Real stats require Node.js/Electron) ===== //
// For a browser-only solution, we can mock this or use a lightweight API.
setInterval(() => {
    document.getElementById('cpu-load').textContent = `${Math.floor(Math.random() * 30) + 10}%`;
    document.getElementById('ram-usage').textContent = `${Math.floor(Math.random() * 40) + 20}%`;
}, 2000);
