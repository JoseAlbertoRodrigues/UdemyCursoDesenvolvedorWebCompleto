var nomeCanal = 'backtotriangle';
var upload_id;

$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/channels", {
            part: 'contentDetails',
            forUsername: nomeCanal,
            key: 'AIzaSyB49WfTkgfK2menTbmVCkLG0f9cYWQ9XKU'},
            function(data) {
                upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
                pegarVideos(upload_id);
            }
    )
    
    function pegarVideos(id) {
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                    part:'snippet',
                    maxResults: 12,
                    playlistId: id,
                    key: 'AIzaSyB49WfTkgfK2menTbmVCkLG0f9cYWQ9XKU'},
            function(data) {
                var imagem;
                var arquivo;
                
                $.each(data.items, function(i, item) {
                    videoId     = item.snippet.resourceId.videoId;
                    arquivo = '<li><iframe width="320" height="180" src="https://www.youtube.com/embed/X3Hy28nwiXc?si=' + videoId + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>';
                    $('div#janela ul').append(arquivo);
                });
            }
        )
    }
    
    function formatarData(data) {
        return data.substr(8,2) + '/' + data.substr(5,2) + "/" + data.substr(0,4);   
    }
});