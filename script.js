console.log("Welcome To spotify");
//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Tum Hi Ho", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Tujh Mein Rab Dikhta Hai", filePath: "2.mp3", coverPath: "2.jpg" },
    { songName: "Let me Love You", filePath: "3.mp3", coverPath: "3.jpg" },
    { songName: "Kal Ho Na Ho", filePath: "4.mp3", coverPath: "4.jpg" },
    { songName: "Chaiyya Chaiyya", filePath: "5.mp3", coverPath: "5.jpg" },
    { songName: "Pehla Nasha", filePath: "6.mp3", coverPath: "6.jpg" },
    { songName: "Tere Bina", filePath: "7.mp3", coverPath: "7.jpg" },
    { songName: "Kabhi Kabhi Aditi", filePath: "8.mp3", coverPath: "8.jpg" },
    { songName: "Tum Mile", filePath: "9.mp3", coverPath: "9.jpg" },
    { songName: "Jab Tak Hai Jaan", filePath: "10.mp3", coverPath: "10.jpg" },
];

songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songName;
});

// Handle Play/Pause click
// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex > 0) {
        songIndex -= 1;
    } else {
        songIndex = 0;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
 
document.getElementById('next').addEventListener('click', () => {
    if (songIndex < songs.length - 1) {
        songIndex += 1;
    } else {
        songIndex = songs.length - 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});
