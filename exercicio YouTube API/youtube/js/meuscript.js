// var nomeCanal = 'backtotriangle'
var nomeCanal = 'CursoemVideo'
var upload_id


$(document).ready(function() {
    // alert("ver se esta funcionando")
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part: 'contentDetails',
        forUsername: nomeCanal,
        key: 'AIzaSyBGKX-glXik7ogakKTCIPGWgctRv2qkPyI'},
        function(data) {
            upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
            pegarVideos(upload_id);

        }
    )

    function pegarVideos(id) {
        console.log(id)
    }
})


// GET https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=nomeCanal&key=[AIzaSyBGKX-glXik7ogakKTCIPGWgctRv2qkPyI] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
