console.log("Let's write javascript");
let currentSong=new Audio();
let songs;
let currFolder;
function convertSeconds(seconds) {
    // Ensure the input is a number and is an integer
    seconds = Math.floor(Number(seconds));

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

async function getSongs(folder) {
    currFolder= folder;
    let a = await fetch(`http://127.0.0.1:3000/${folder}/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    //show all the songs in the playlists
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML=""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" src="music.svg" alt="">
        <div class="info">
            <div>${song.replaceAll("%20", " ")}</div>
            <div>taylor swift</div>
        </div>
        <div class="playNow">
            <span>Play Now</span>
            <img class="invert" src="play.svg" alt="">
        </div> </li>`;
    }

    //attach an event listner to each songs 
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click",element=>{           
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
}

const playMusic=(track,pause=false)=>{
    // let audio =new Audio("/songs/"+ track)
    currentSong.src=`/${currFolder}/`+ track
    if(!pause){
        currentSong.play()
        play.src="paused.svg"
    }
    document.querySelector(".songinfo").innerHTML=decodeURI(track)
    document.querySelector(".songtime").innerHTML="00:00 / 00:00"

    
}
async function displayAlbums(){
    let a = await fetch(`http://127.0.0.1:3000/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors=div.getElementsByTagName("a")
    let cardcontainer=document.querySelector(".cardcontainer")
    let array= Array.from(anchors)
        for (let index = 0; index < array.length; index++) {
            const e = array[index];
            
        
        if(e.href.includes("/songs")){
            let folder=e.href.split("/").slice(-2)[0];      
            //get the metadata of the folder
            let a = await fetch(`http://127.0.0.1:3000/songs/${folder}/info.json`)
            let response = await a.json();  
            cardcontainer.innerHTML=cardcontainer.innerHTML+`<div data-folder="cs" class="card ">
            <div  class="play">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="24" height="24">
                    <circle cx="14" cy="14" r="12" fill="#1fdf64" />
                    <path
                        d="M18.8906 13.846C18.5371 15.189 16.8667 16.138 13.5257 18.0361C10.296 19.8709 8.6812 20.7884 7.37983 20.4196C6.8418 20.2671 6.35159 19.9776 5.95624 19.5787C5 18.6139 5 16.7426 5 13C5 9.2574 5 7.3861 5.95624 6.42132C6.35159 6.02245 6.8418 5.73288 7.37983 5.58042C8.6812 5.21165 10.296 6.12907 13.5257 7.96393C16.8667 9.86197 18.5371 10.811 18.8906 12.154C19.0365 12.7084 19.0365 13.2916 18.8906 13.846Z"
                        fill="#000" stroke="black" stroke-width="1.5" stroke-linejoin="round"
                        transform="translate(2, 2)" />
                </svg>

            </div>
            <img src="/songs/${folder}/cover.jpeg" alt="">
            <h2>${response.title}</h2>
            <p>${response.description}</p>
        </div>`   
        }
    }

    //load the playlist when card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e=>{
        e.addEventListener("click",async item =>{
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)
            
        })
    })
}
async function main() {
    //get the list of all the songs
    await getSongs("songs/ncs")
    playMusic(songs[0],true)

    //dispaly all the albums on the page
    displayAlbums()
    
    //attach an event listeners to play ,prev n next
    play.addEventListener("click",()=>{
        if(currentSong.paused){
            currentSong.play()
            play.src="paused.svg"
        }
        else{
            currentSong.pause()
            play.src="play.svg"
        }
        
    })
   
    //listen for timeupdate event
    currentSong.addEventListener("timeupdate",()=>{
        document.querySelector(".songtime").innerHTML=`${convertSeconds(currentSong.currentTime)}/${convertSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left =(currentSong.currentTime/currentSong.duration)*100 +"%";
    })
 
    //add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click",e=>{
        let percent =(e.offsetX/e.target.getBoundingClientRect().width)* 100;
        document.querySelector(".circle").style.left=percent +"%";      
        currentSong.currentTime = ((currentSong.duration )*percent)/100;
    })


    //add an event listner for hamburger
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".left").style.left="0";
    })

    //add an event listener for close button
    document.querySelector(".close").addEventListener("click",()=>{
        document.querySelector(".left").style.left="-120%";
    })
    // add an event listeners to prev n next
    previous.addEventListener("click",()=>{
        // currentSong,pause()
         
       
        let index =songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index-1)>=0){
            playMusic(songs[index-1])
        }  
    })
    next.addEventListener("click",()=>{
        let index =songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index+1)<songs.length){
            playMusic(songs[index+1])
        }
    })
    //add an aevent to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change",(e)=>{
      
        currentSong.volume = parseInt(e.target.value)/100
    })

    

}
main()