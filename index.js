const panels = document.querySelectorAll(".panels");
let audioArray = ["music/Ed Sheeran - Thinking Out Loud (Official Music Video).mp3", "music/Skrillex and Diplo - Where Are Ü Now with Justin Bieber (Official Video).mp3", "music/Dave - Location ft. Burna Boy (Lyrics).mp3", "music/STORMZY - SHUT UP.mp3", "music/NF - Let You Down.mp3"];

let imageArray = ["images/ed_sheeran_x.jpg", "images/justin_bieber_prupose.jpg", "images/Dave_location.jpg", "images/stormzy_shut_up.jpg", "images/nf_let_you_down.jpg"];

let edDiv = document.querySelector(".ed");
let justinDiv = document.querySelector(".justin");
let daveDiv = document.querySelector(".dave");
let stormzyDiv = document.querySelector(".stormzy");
let nfDiv = document.querySelector(".nf");
let audio = new Audio ();


edDiv.addEventListener ("click", () =>{
  audio.pause();
  document.body.className = "";
  document.body.classList.add("ed");
  audio = new Audio (audioArray[0]);
  audio.play()
})
justinDiv.addEventListener ("click", () =>{
  audio.pause();
  document.body.className = "";
  document.body.classList.add("justin");
  audio = new Audio (audioArray[1]);
  audio.play()
})
daveDiv.addEventListener ("click", () =>{
  audio.pause();
  document.body.className = "";
  document.body.classList.add("dave");
  audio = new Audio (audioArray[2]);
  audio.play()
})
stormzyDiv.addEventListener ("click", () =>{
  audio.pause();
  document.body.className = "";
  document.body.classList.add("stormzy");
  audio = new Audio (audioArray[3]);
  audio.play()
})
nfDiv.addEventListener ("click", () =>{
  audio.pause();
  document.body.className = "";
  document.body.classList.add("nf");
  audio = new Audio (audioArray[4]);
  audio.play()
})

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    console.log(panel);
    removeActiveClasses();
    panel.classList.add("active");
  })
})

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove("active");
  })
}  
