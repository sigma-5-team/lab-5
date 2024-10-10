// Функція для розрахунків периметра, площі та діагоналі
function calculateRectangle() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    // Перевіряємо, чи введені значення валідні
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById('perimeter').innerText = '-';
        document.getElementById('area').innerText = '-';
        document.getElementById('diagonal').innerText = '-';
        return;
    }

    // Розрахунки
    const perimeter = 2 * (length + width);
    const area = length * width;
    const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

    // Виведення результатів
    document.getElementById('perimeter').innerText = perimeter.toFixed(2);
    document.getElementById('area').innerText = area.toFixed(2);
    document.getElementById('diagonal').innerText = diagonal.toFixed(2);
}


// Додаємо обробники подій для зміни в текстових полях (з клавіатури)
document.getElementById('length').addEventListener('input', calculateRectangle);
document.getElementById('width').addEventListener('input', calculateRectangle);