$(document).ready(function() {
    skinList.forEach(e => {
        if (e.type == undefined) {
            $('#skin-list').append(
                `<div
                    class="skin-list-item"
                    data-name="${e.name}"
                    data-url="skin/${e.url}"
                >
                    <div class="img">
                        <div class="p1" style="background-image: url(skin/${e.url});"></div>
                        <div class="p2" style="background-image: url(skin/${e.url});"></div>
                    </div>
                    <div class="name">${e.name}</div>
                </div>`
            );
        } else if (e.type == 'h2') {
            $('#skin-list').append(`<h2 id="${e.id}">${e.title}</h2>`);
            $('#index').append(`<p><a href="#${e.id}">▶ ${e.title}</a></p>`);
        }
        
    });

    $('#index').append(`<p><a href="#license">▶ 授权协议与关于 / License & About</a></p>`);
    
    $('.skin-list-item').click(function() {
        $('#skin-show').attr('style', `--skin: url(../../${$(this).data('url')});`);
        $('#skin-show').attr('data-url', `${$(this).data('url')}`);
        $('.skin-info .skin-title').text(`${$(this).data('name')}`);
    });

    $('#skin-show').click(function() {
        if ($(this).attr('data-url') != undefined) {
            window.open($(this).attr('data-url'));
        }
    });

    $('#index-bar').click(function() {
        $('#index').addClass('show');
    });

    $('#index-close').click(function() {
        $('#index').removeClass('show');
    });

    $('#index a').click(function() {
        $('#index').removeClass('show');
    });
});