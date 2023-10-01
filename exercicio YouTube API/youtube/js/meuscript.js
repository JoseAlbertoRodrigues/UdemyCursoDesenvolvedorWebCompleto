// var nomeCanal = 'https://www.youtube.com/@josealberto5907'
// var nomeCanal = 'backtotriangle'
var nomeCanal = 'CursoemVideo'
var upload_id

// var API_KEY =  'AIzaSyBGKX-glXik7ogakKTCIPGWgctRv2qkPyI' // esse é do meu google developer (chave de acesso)
// var API_KEY =  'AIzaSyB49WfTkgfK2menTbmVCkLG0f9cYWQ9XKU' // key do curso
var API_KEY =  'AIzaSyApOgZL0IYO4tc8BErUaRBEFCWHjMNJDU8' // esse é do meu google developer (Chave de API 2)


$(document).ready(function() {
    // alert("ver se esta funcionando")
    $.get("https://youtube.googleapis.com/youtube/v3/channels", {
        part: 'contentDetails',
        forUsername: nomeCanal,
        key: API_KEY},
        function(data) {
            upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
            pegarVideos(upload_id);

        }
    )

    function pegarVideos(id) {
        // console.log(id)
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
            part: 'snippet',
            maxResults: 10,
            playlistId: id,
            key: API_KEY
        },
        function(data) {
            // console.log(data)
            var imagem
            var arquivo
            $.each(data.items, function(i, item) {
                imagem = item.snippet.thumbnails.medium.url
                titulo = item.snippet.title
                // description = item.snippet.description
                publicada = formatarData(item.snippet.publishedAt)
                videoId = item.snippet.resourceId.videoId
                arquivo = '<li class="principal"><a class="fancybox-media" href="https://www.youtube.com/watch?v=' + videoId +'"></a><div class="foto"><img src="' + imagem +'"><div class="legenda"><h5>' + titulo + '</h5> <p>Data: ' + publicada + '</p></div></div></li>'
                $('div#janela ul').append(arquivo)
            })
        })
    }

    // DATA DO BRASIL
    function formatarData(data) {
        return data.substr(8,2) + '/' + data.substr(5,2) + '/' + data.substr(0,4)
    }
})




// GET https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=cursoemVideo&key=[YOUR_API_KEY] HTTP/1.1


// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
