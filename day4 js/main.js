// "arming" these variables for use later on
let song;
let playSong;

// set Spotify Client Credentials (api keys)
const clientId = "56e22f07668d40ac85a1b86134c16ead"
const clientSecret = "e21a8ed8e39f482286577a13dac53239"
// we need async because we have to wait for spotify to send our data back
// Yesterday we use axios.get. fetch is essentially the same thing. Axios just 
// takes care of the promise for us. Here we are setting our asynchronous function “manually”
const getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    // Access the data given to us by the fetch response (promise)
    const data = await result.json()
    console.log(data.access_token);
    return data.access_token
}

/**Function to get the song info when an image is clicked!
 * 
 * @param img_index
 * @param item_index
 * 
 * Function gets song from spotify using the image index of our gallery
 * Then its finds the correct item_index of the JSON response object from 
 * spotify and will produce a preview_url
 */

async function clickedEvent(img_index, item_index){
    // Get Track name from alt text in img element
    let track = document.getElementsByTagName('img')[img_index].attributes[1].value;
    console.log(track);
    let token = await getToken()
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);
    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`, {
        method: 'GET',
        headers: headers
    });
    let result = await fetch(request);

    let response = await result.json();
    console.log(response);
    song = response.tracks.items[item_index].preview_url;
    console.log(song);
    // TODO: Add songSnippet Function to play the song from our preview url
    while (song == null) {
        item_index += 1
        song = response.tracks.items[item_index].preview_url
    }
    
    if (playSong) {
        stopSnippet();
    }
    songSnippet(song)
}
/** 
 * @param id
 * @param event
 * id = image id for gallery image
 * even = mouse event given by the action from our user
 * 
 * function produces a song from the clickEvenet based on the image index
 */

function getSong(id, event) {
    switch(id) {
        case 'fig1': {
            event.stopPropagation()
            // The 0,0 are indexes into the img tag
            clickedEvent(0,0)
            break;
        }
        case 'fig2': {
            event.stopPropagation()
            clickedEvent(1, 0)
            break;
        }
        case 'fig3': {
            event.stopPropagation()
            clickedEvent(2,0)
            break;
        }
        case 'fig4': {
            event.stopPropagation()
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation()
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation()
            clickedEvent(5,0)
            break;
        }
    }
}
/**
 * 
 * @param url
 * 
 * 
 */
function songSnippet(url){
    playSong = new Audio(url)
    return playSong.play()
}
/**
 * 
 * NO PARAMS
 * 
 * function returns event to stop song snippet
 * 
 */
function stopSnippet() {
    return playSong.pause()
}