

export function Card(item, cards, reload, columns) {
    const card = document.createElement('div');
    const name = document.createElement('p');
    const button = document.createElement('button');
    const age = document.createElement('p');

    card.classList.add('card');
    name.classList.add('name');
    button.classList.add('delete');
    age.classList.add('age');

    name.innerText = item.name;
    age.innerText = `Age: ${item.age}`;
    button.innerText = "X";


    button.onclick = () => {
        const index = cards.findIndex(c => c.id === item.id);
        if (index !== -1) {
            cards.splice(index, 1);
            reload(cards, Card, columns);
        }
    };

    card.ondblclick = () => {
        const dialog = document.querySelector('dialog')
        const form = dialog.querySelector('form')
        const inps = dialog.querySelectorAll('input')

        dialog.showModal()

        for (let key in item) {
            const inp = form.querySelector(`input[name=${key}]`)

            if (inp) {
                inp.value = item[key]
            }
        }

        form.onsubmit = (e) => {
            e.preventDefault()


            const fm = new FormData(e.target)

            const updatedItem = {
                id: item.id,
                name: fm.get('name'),
                age: fm.get('age')
            }

            const idx = cards.findIndex((elem) => elem.id === item.id)
            cards.splice(idx, 1, updatedItem)

            console.log(updatedItem);
            name.innerText = updatedItem.name;
            age.innerText = `Age: ${updatedItem.age}`;

            form.reset(),
            dialog.close()
            reload(cards, Card, columns);
        }

    }

    card.append(name, button, age);
    return card;
}
