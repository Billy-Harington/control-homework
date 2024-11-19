export function openModal(item, cards, reload, columns) {
    // Создаём элементы модального окна
    const modal = document.createElement('div');
    const modalContent = document.createElement('div');
    const inputName = document.createElement('input');
    const inputAge = document.createElement('input');
    const applyButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    inputName.type = 'text';
    inputName.value = item.name;
    inputAge.type = 'number';
    inputAge.value = item.age;
    applyButton.innerText = 'Применить';
    cancelButton.innerText = 'Отменить';

    // Добавляем функциональность кнопкам
    applyButton.onclick = () => {
        item.name = inputName.value.trim();
        item.age = parseInt(inputAge.value.trim());

        if (!item.name || isNaN(item.age)) {
            alert('Пожалуйста, заполните оба поля корректно!');
            return;
        }

        reload(cards, Card, columns);
        document.body.removeChild(modal); // Убираем модальное окно
    };

    cancelButton.onclick = () => {
        document.body.removeChild(modal); // Убираем модальное окно
    };

    // Добавляем элементы в модальное окно
    modalContent.append(
        document.createElement('h3').innerText = 'Редактировать карточку',
        inputName,
        inputAge,
        applyButton,
        cancelButton
    );
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
}
