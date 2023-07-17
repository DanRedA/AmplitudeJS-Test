window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the down button to slide down the playlist.
*/
document.getElementsByClassName('down-header')[0].addEventListener('click', function(){
  var list = document.getElementById('list');

  list.style.height = ( parseInt( document.getElementById('flat-black-player-container').offsetHeight ) - 135 ) + 'px';

  document.getElementById('list-screen').classList.remove('slide-out-top');
  document.getElementById('list-screen').classList.add('slide-in-top');
  document.getElementById('list-screen').style.display = "block";
});

/*
  Handles a click on the up arrow to hide the list screen.
*/
document.getElementsByClassName('hide-playlist')[0].addEventListener('click', function(){
  document.getElementById('list-screen').classList.remove('slide-in-top');
  document.getElementById('list-screen').classList.add('slide-out-top');
  document.getElementById('list-screen').style.display = "none";
});

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  // "bindings": {
  //   37: 'prev',
  //   39: 'next',
  //   32: 'play_pause'
  // },
  "songs": [
    {
      "name": "Ocho",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/ocho.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Agua",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/Agua.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Epílogo",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/Epilogo.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Fase",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/Fase.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Madamme Sin Nombre",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/madamme.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Cero",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/Cero.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Cuarto Blanco",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/cuarto-blanco.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    },
    {
      "name": "Entre Líneas",
      "artist": "Red Arteria",
      "album": "Demos 2021",
      "url": "../songs/Entre-lineas.mp3",
      "cover_art_url": "../album-art/album-cover.jpg"
    }
  ]
});