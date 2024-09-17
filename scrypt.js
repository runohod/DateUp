function handleResponse(answer) {
    if (answer === 'yes') {
        // Перенаправляем на другую страницу
        window.location.href = 'response.html'; // Наименование следующей страницы
    } else {
        alert('Жаль, что вам не понравилось. 😔');
    }
}

function moveButton() {
    const button = document.querySelector('.no');
    const x = Math.random() * 200 - 100; // Случайное смещение по оси X
    const y = Math.random() * 200 - 100; // Случайное смещение по оси Y
    button.style.transform = `translate(${x}px, ${y}px)`; // Применяем смещение
}