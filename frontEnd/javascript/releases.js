
fetch("javascript/releasesJson.json")
.then(response => {
   return response.json();
})
.then(data => {
    let releaseDiv = document.querySelector('.releaseHome');
    releaseDiv.innerHTML = "";
    songs = data.releases
   
    const items = songs.slice(0, 4)
    items.forEach(release => {
      let div = document.createElement('div')
      div.innerHTML = `<div class="bg-white rounded-lg mt-5" style="width: 65%;">
                        <img src="${release.image}" class="h-40 rounded-md" alt="" style="width: 100%;" />
                        </div>
                        <div class="contentSong bg-white shadow-lg rounded-lg -mt-4">
                            <div class="py-5 px-5">
                                <span class="font-bold text-gray-800 text-lg">${release.name}</span>
                                <div class="flex items-center justify-between">
                                    <div class="text-sm text-gray-600 font-light">
                                        <a href="${release.spotify}" target="_blank"
                                            class="icon flex rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600">
                                            <i class="fi fi-brands-spotify"></i>
                                        </a>
                                    </div>
                                    <div class="text-2xl text-red-600 font-bold">
                                        <a href="${release.youtube}" target="_blank"
                                            class="icon flex rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600">
                                            <ion-icon name="logo-youtube"></ion-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    releaseDiv.appendChild(div);
      div.classList.add("song");
  })
});


fetch("javascript/releasesJson.json")
.then(response => {
   return response.json();
})
.then(data => {
   let releaseDiv = document.querySelector('.release');
   releaseDiv.innerHTML = "";
   data.releases.forEach(release => {
      let div = document.createElement('div')
      div.innerHTML = `<div class="bg-white rounded-lg mt-5" style="width: 65%;">
                        <img src="${release.image}" class="h-40 rounded-md" alt="" style="width: 100%;" />
                        </div>
                        <div class="contentSong bg-white shadow-lg rounded-lg -mt-4">
                            <div class="py-5 px-5">
                                <span class="font-bold text-gray-800 text-lg">${release.name}</span>
                                <div class="flex items-center justify-between">
                                    <div class="text-sm text-gray-600 font-light">
                                        <a href="${release.spotify}" target="_blank"
                                            class="icon flex rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600">
                                            <i class="fi fi-brands-spotify"></i>
                                        </a>
                                    </div>
                                    <div class="text-2xl text-red-600 font-bold">
                                        <a href="${release.youtube}" target="_blank"
                                            class="icon flex rounded-full font-bold text-white px-4 py-4 transition duration-300 ease-in-out hover:bg-blue-600">
                                            <ion-icon name="logo-youtube"></ion-icon>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    releaseDiv.appendChild(div);
      div.classList.add("song");
  })
});

