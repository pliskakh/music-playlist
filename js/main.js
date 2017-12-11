;(function(){
    "use strict";

    var playList = [
        {
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
        {
            author: "queen",
            song: "bohemian rhapsody",
            duration: "2:30"
        },
        {
            author: "lynyrd skynyrd",
            song: "free bird",
            duration: "1:56"
        },
        {
            author: "deep purple",
            song: "smoke on the water",
            duration: "3:03"
        },
        {
            author: "jimi hendrix",
            song: "all along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "back in black",
            duration: "2:43"
        },
        {
            author: "queen",
            song: "we will rock you",
            duration: "2:13"
        },
        {
            author: "metallica",
            song: "enter sandman",
            duration: "3:03"
        }
    ];

    function changePlaylistTitle(title){
        var playerTitle = document.querySelector('.ba-playlist__title');
        playerTitle.innerText = title;
    }

    changePlaylistTitle("Playlist");


    playList.forEach(function(item){
        var songList = document.querySelector('.ba-playlist__list');

        var songElement = document.createElement('li');
        songElement.classList.add('ba-tune');

        var like = document.createElement('svg');
        like.classList.add('ba-tune__like');
        like.insertAdjacentHTML('afterBegin', '<use xlink:href="#icon-heart" />');

        var songDuration = document.createElement('span');
        songDuration.classList.add('ba-tune__duration');
        songDuration.innerHTML = item.duration;

        var songAuthor = document.createElement('span');
        songAuthor.classList.add('ba-tune__author');
        songAuthor.innerHTML = item.author;

        var baTop = document.createElement('div');
        baTop.classList.add('ba-tune__top');

        var song = document.createElement('div');
        song.classList.add('ba-tune__song');

        songList.appendChild(songElement);
        songElement.appendChild(like);
        songElement.appendChild(baTop);
        songElement.appendChild(song);
        baTop.appendChild(songDuration);
        baTop.appendChild(songAuthor);

        song.innerHTML = item.song;

    });

})();