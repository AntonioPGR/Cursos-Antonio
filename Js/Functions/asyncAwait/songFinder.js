const form = document.querySelector("#searchForm");
form.addEventListener("submit", ev => {
   ev.preventDefault();
   doTheSubmit()
   console.log("Loading search")
})

async function doTheSubmit() {
   const artist = document.querySelector("#artistInput").value;
   const title = document.querySelector("#titleInput").value;

   const songApiResponse = await requestTheSong(artist, title);
   const lyricsObj = await songApiResponse.json();

   showTheLyrics(lyricsObj);
}

function requestTheSong(artist, title){
   return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
}

function showTheLyrics(lyrics){
   try{
      const lyricsDiv = document.querySelector("#result");
      lyricsDiv.innerHTML = lyrics.lyrics
   } catch(e){
      const div = document.createElement("div");
      div.id = "result";
      div.appendChild(lyrics.lyrics);
   }
}

