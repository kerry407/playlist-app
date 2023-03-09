// SOng: artiste, title, duration, isPlaying, Methods: play, stop, toHTML
// Playlist: songs, nowPlayingIndex, Methods: add, play, next, stop, renderInElement


class Song {

    constructor(title, artiste, duration, cover) {

        this.title = title;
        this.artiste = artiste;
        this.duration = duration;
        this.cover = cover;
        this.isPlaying = false;
    }

    play() {
        this.isPlaying = true;
    }

    stop() {
        this.isPlaying = false;
    }
    
    toHTML() {
        const cover = document.querySelector("img.cover-img");
        const coverTitle = document.querySelector("h3#cover-title");
        const coverArtiste = document.querySelector("p#cover-artiste");

        let htmlString = `
                            <div class="song-2">
                                <div class="info">
                                <div class="img first"> <img src="${this.cover}" alt="" srcset=""></div>
                                    <div class="titles">
                                        <h5>${this.title}</h5>
                                        <p>${this.artiste}</p>
                                        <p>${this.duration}</p>
                                    </div>
                                </div>
                                
                        `;
        if (this.isPlaying) {
            htmlString += `
                        <div class="state playing">
                            <i class="material-icons">equalizer</i>
                            </div>
                        </div>
                      `;
            cover.style.background = `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${this.cover}) center bottom`;
            cover.style.backgroundSize = "cover";
            coverTitle.textContent = this.title;
            coverArtiste.textContent = this.artiste;
        } else {
            htmlString += `
                        <div class="state">
                            <i class="material-icons">play_arrow</i>
                            </div>
                        </div>
                      `;
        }
        return htmlString;
    }
}



class Playlist {

    constructor() {

        this.songs = [];
        this.nowPlayiingIndex = 0;
        this.inShuffle = false;
    }

    add(song) {
        this.songs.push(song);
    }

    play() {

        const currentSong = this.songs[this.nowPlayiingIndex];
        currentSong.play();
    }

    stop() {
        const currentSong = this.songs[this.nowPlayiingIndex];
        currentSong.stop();
    }

    next() {
        this.stop();
        this.nowPlayiingIndex++;

        if (this.nowPlayiingIndex === this.songs.length) {
            this.nowPlayiingIndex = 0;
        }
        this.play();
    }

    previous() {
        this.stop();
        this.nowPlayiingIndex--;

        if (this.nowPlayiingIndex < 0) {
            this.nowPlayiingIndex = this.songs.length - 1;
        }
        this.play();
    }

    shuffleOn() {
        this.stop();
        this.inShuffle = true;
        const lastItem = this.songs.length;
        this.nowPlayiingIndex = Math.floor(Math.random() * lastItem );
        this.play();
        console.log(this.nowPlayiingIndex);
    }

    shuffleOff() {
        this.inShuffle = false;
    }

    renderInElement(list) {
        list.innerHTML = "";
        for (let i = 0; i < this.songs.length; i++) {
            list.innerHTML += this.songs[i].toHTML();
        }
    }
}







