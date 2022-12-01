$(document).ready(function() {
    skinList.forEach(e => {
        $('#app>.content').append(
            `<div
                class="skin-list-item"
                data-name="skin/${e.name}"
                data-url="skin/${e.url}"
            >
                <div class="img">
                    <div class="p1" style="background-image: url(skin/${e.url});"></div>
                    <div class="p2" style="background-image: url(skin/${e.url});"></div>
                </div>
                <div class="name">${e.name}</div>
            </div>`
        );
    });
    
    $('.skin-list-item').click(function() {
        $('#skin-show').attr('style', `--skin: url(../../${$(this).data('url')});`);
        $('#skin-show').attr('data-url', `${$(this).data('url')}`);
    });

    $('#skin-show').click(function() {
        if ($(this).attr('data-url') != undefined) {
            window.open($(this).attr('data-url'));
        }
    });
});