// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////
// variable
let listHtmlContent = ''
let lyricsHtmlContent
let recordTargetElement

// display song list
album.tracks.forEach((track) => {
  //console.log('track', track)
  listHtmlContent += `
    <li class="nav-item">
      <a class="nav-link" href="#">${track}</a>
    </li>
  `
})
 songList.innerHTML = listHtmlContent

// function
function getLyrics(title){
  axios.get(`${BASE_URL}${album.artist}/${title}`)
  .then(res => {
    //console.log(res.data.lyrics)
    lyricsHtmlContent = res.data.lyrics
    lyricsPanel.innerHTML = `<pre>${lyricsHtmlContent}</pre>`
   })
  .catch(error => {
     console.log(error);
  })
}

// add listener
songList.addEventListener('click', function(event){
  if (event.target.classList.contains('nav-link')){
    // clean active element css
    let activeSongListElement = document.querySelector('.active')
    if (activeSongListElement) {
      //console.log(activeSongListElement)
      activeSongListElement.classList.remove('active')
    }
    // add active css for cilcked event target
    event.target.classList.add('active')
    console.log(event.target.textContent)
    getLyrics(event.target.textContent)
  }
})