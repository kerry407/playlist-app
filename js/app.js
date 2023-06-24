const playlist = new Playlist();

const hello = new Song("Hello", "Adele", "3:43", "https://static.stereogum.com/blogs.dir/2/files/2011/12/Adele-21.jpg");
const californication = new Song("Californication", "Red Hot Chili Pepers", "3:50", "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg");
const sixinch = new Song("6 INCH", "Beyonce", "4:00", "https://images.rapgenius.com/59fc635f7dbe6b5cd1e07e5e605c96b5.640x640x1.jpg");

playlist.add(hello);
playlist.add(californication);
playlist.add(sixinch);

const playListElement = document.querySelector("div.music");
playlist.renderInElement(playListElement);

const playButton = document.querySelector("i#play");
const nextButton = document.querySelector("i#next");
const previousButton = document.querySelector("i#previous");
const cover = document.querySelector("img.cover-img");
const shuffleButton = document.querySelector("i#shuffle");
const song = document.querySelector("div.song-2");


playButton.addEventListener( "click", (e) => {
    
    if ( playButton.id === "play" ) {
        playlist.play();
        e.currentTarget.id = "stop";
        e.currentTarget.textContent = "stop"
    }else {
        playlist.stop();
        e.currentTarget.id = "play";
        e.currentTarget.textContent = "play_arrow"
    }
    playlist.renderInElement(playListElement);
});


nextButton.addEventListener( "click", () => {

    if ( !playlist.inShuffle ) {
        playlist.next();
    }else {
        playlist.shuffleOn();
    }
    playButton.textContent = "stop"
    playlist.renderInElement(playListElement);
});


previousButton.addEventListener( "click", () => {

    if ( !playlist.inShuffle ) {
        playlist.previous();
    }else {
        playlist.shuffleOn();
    }
    playButton.textContent = "stop"
    playlist.renderInElement(playListElement);
});


shuffleButton.addEventListener( "click", (e) => {
    
    if ( !playlist.inShuffle ){
        e.currentTarget.style.color = "rgb(86, 247, 12)";
        playlist.inShuffle = true;   
    }else {
        e.currentTarget.style.color = "#fff";
        playlist.shuffleOff()
    }
    playlist.renderInElement(playListElement);
})