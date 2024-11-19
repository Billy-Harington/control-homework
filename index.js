import { Card } from "./components/Card.js";
import { cards } from "./utils/bl.js";
import { reload } from "./utils/reload.js";



console.log(cards);

const form = document.forms.namedItem("form");


const places = [
    document.getElementById("under20"),
    document.getElementById("under50"),
    document.getElementById("others")
];





form.onsubmit = (e) => {
    e.preventDefault();

    const val_name = new FormData(form).get("name")?.trim() || "";
    const val_age = new FormData(form).get("age")?.trim() || "";

    if (val_name.length === 0 || val_age.length === 0) {
        alert("Дорогой гражданин, будьте добры заполнить планки");
        return;
    }

    const card = {
        id: crypto.randomUUID(),
        name: val_name,
        age: parseInt(val_age)
    };
   
    Card(card)

    cards.push(card); 
    form.reset(); 

    reload(cards, Card, places); 
};
