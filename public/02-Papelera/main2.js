let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let wave = document.getElementById("wave");
let randomIcon = document.querySelector(".fa-random");
let curr_track = document.createElement('audio');

let VolumeIcon = document.querySelector('.fa-volume-up')

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img: 'resources/assets/playerAssets/amiga.jpg',
        name: 'Amiga',
        artist: 'Lucas Sugo',
        music: 'resources/assets/playerAssets/Lucas Sugo - Amiga.mp3'
    },
    {
        img: 'resources/assets/playerAssets/morat1.jpg',
        name: 'Besos en Guerra',
        artist: 'Morat',
        music: 'resources/assets/playerAssets/Besos-en-guerra.mp3'
    },
    {
        img: 'resources/assets/playerAssets/sabras.jpg',
        name: 'Sabrás',
        artist: 'Dj Khalid X Manny Rod X Fran Santos',
        music: 'resources/assets/playerAssets/Sabrás.mp3'
    },
    {
        img: 'resources/assets/playerAssets/correcta.jpg',
        name: 'La Correcta',
        artist: 'Morat y Nabález',
        music: 'resources/assets/playerAssets/La Correcta.mp3'
    },
    {
        img: 'resources/assets/playerAssets/moratVe.jpg',
        name: 'Cuando Nadie Ve',
        artist: 'Morat',
        music: 'resources/assets/playerAssets/Cuando Nadie Ve.mp3'
    }
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset()

    curr_track.src = music_list[track_index].music;
    curr_track.load()

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Reproduciendo canción " + (track_index + 1) + " de " + music_list.length;

    updateTimer = setInterval(setUpdate, 100);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
    let a;

    function populate(a){
        for(let i = 0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x]
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ',' + Color2 + ')';
    document.body.style.background = gradient;    
}

function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}

function playRandom(){
    isRandom = true;
    randomIcon.classList.add("randomActive");
}

function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove("randomActive");
}

function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

let old_random_index = 0;

function nextTrack(){
    if(track_index < music_list.length -1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Math.floor(Math.random() * (music_list.length));
        while(old_random_index == random_index){
             random_index = Math.floor(Math.random() * (music_list.length));
        }
        old_random_index = random_index;
        //let random_index2 = Number.parseInt(Math.random() * (music_list.length));
        console.log("Numero random: " + random_index)
        track_index = random_index;
        console.log("Index " + track_index);        
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}

function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}

function seekTo(){
    pauseTrack();
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
    return playTrack();
}

function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10){currentSeconds = "0" + currentSeconds;}
        if(durationSeconds < 10){durationSeconds = "0" + durationSeconds;}
        if(currentMinutes < 10){currentMinutes = "0" + currentMinutes;}
        if(durationMinutes < 10){durationMinutes = "0" + durationMinutes;}

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


function setNewIcon(){
    if(volume_slider.value <= 50){
        VolumeIcon.classList.add('fa-volume-down');
        VolumeIcon.classList.remove('fa-volume-up');
        VolumeIcon.classList.remove('fa-volume-mute');
    }
    if(volume_slider.value == 1){
        VolumeIcon.classList.add('fa-volume-mute');
        VolumeIcon.classList.remove('fa-volume-up');
        VolumeIcon.classList.remove('fa-volume-down');
        
    }
    if(volume_slider.value > 50){
        VolumeIcon.classList.add('fa-volume-up');
        VolumeIcon.classList.remove('fa-volume-down');
        VolumeIcon.classList.remove('fa-volume-mute');
    }
}


function MaxVolume(){
    curr_track.volume = 1;  
    volume_slider.value = "100";
    setNewIcon();
}

function MinVolume(){
    curr_track.volume = 0;  
    volume_slider.value = "0";
    setNewIcon();
}