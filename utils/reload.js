export function reload(arr, component, places) {
    
    places.forEach(place => {
        const cardsContainer = place.querySelector(".cards-container");
        if (cardsContainer) {
            cardsContainer.innerHTML = ""; 
        }
    });

   
    for (const item of arr) {
        const elem = component(item, arr, reload, places);

        if (item.age < 20) {
            places[0].querySelector(".cards-container").append(elem); // Люди до 25
        } else if (item.age < 50) {
            places[1].querySelector(".cards-container").append(elem); // Люди до 50
        } else {
            places[2].querySelector(".cards-container").append(elem); // Остальные
        }
    }
}
