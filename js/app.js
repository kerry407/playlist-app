const playlist = new Playlist();

const hello = new Song("Hello", "Adele", "3:43", "http://static.stereogum.com/blogs.dir/2/files/2011/12/Adele-21.jpg");
const californication = new Song("Californication", "Red Hot Chili Pepers", "3:50", "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg");
const sixinch = new Song("6 INCH", "Beyonce", "4:00", "http://images.rapgenius.com/59fc635f7dbe6b5cd1e07e5e605c96b5.640x640x1.jpg");

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


playButton.addEventListener( "click", function() {
    
    if ( playButton.id === "play" ) {
        playlist.play();
        this.id = "stop";
        this.textContent = "stop"
    }else {
        playlist.stop();
        this.id = "play";
        this.textContent = "play_arrow"
    }
    playlist.renderInElement(playListElement);
});

nextButton.addEventListener( "click", function() {

    if ( !playlist.inShuffle ) {
        playlist.next();
    }else {
        playlist.shuffleOn();
    }
    playButton.textContent = "stop"
    playlist.renderInElement(playListElement);
});


previousButton.addEventListener( "click", function() {

    if ( !playlist.inShuffle ) {
        playlist.previous();
    }else {
        playlist.shuffleOn();
    }
    playButton.textContent = "stop"
    playlist.renderInElement(playListElement);
});


shuffleButton.addEventListener( "click", function(){
    
    if ( !playlist.inShuffle ){
        this.style.color = "rgb(86, 247, 12)";
        playlist.inShuffle = true;   
    }else {
        this.style.color = "#fff";
        playlist.shuffleOff()
    }
    playlist.renderInElement(playListElement);
})