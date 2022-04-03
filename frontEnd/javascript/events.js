
fetch("../javascript/eventsJson.json")
.then(response => {
   return response.json();
})
.then(data => {
   var last= data.events[data.events.length-1];
   console.log(last);
   let hero = document.querySelector('.hero');
   hero.innerHTML = "";
   let divContent= document.createElement('div')
   divContent.innerHTML = ` <div class="text">
                        <h1>${last.name}</h1>
                        <p>${last.description}</p>
                     </div>
                     <div class="info">
                        <ul>
                           <li>
                              <ion-icon name="calendar"></ion-icon>
                              ${last.date}
                           </li>
                           <li>
                              <ion-icon name="location"></ion-icon>
                              ${last.location}
                           </li>
                           <li>
                              <ion-icon name="ticket"></ion-icon>
                              ${last.tickets}
                           </li>
                        </ul>
                     </div>`;
   hero.appendChild(divContent);
   divContent.classList.add("content");


   let events = document.querySelector('.events');
   events.innerHTML = "";
   data.events.forEach(event => {
      let div = document.createElement('div')
      div.innerHTML = `<div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h2 class="text-gray-900 text-xl leading-tight font-medium mb-2">${event.name}</h2>
                        <p class="text-gray-700 text-base mb-4">
                        ${event.description}
                        </p>
                        <div class="info">
                           <ul>
                              <li>
                                    <ion-icon name="calendar"></ion-icon>
                                    ${event.date}
                              </li>
                              <li>
                                    <ion-icon name="location"></ion-icon>
                                    ${event.location}
                              </li>
                              <li>
                                    <ion-icon name="ticket"></ion-icon>
                                    ${event.tickets}
                              </li>
                           </ul>
                        </div>
                  </div>`;
      events.appendChild(div);
      div.classList.add("flex");
      div.classList.add("justify-center");
  })
});
