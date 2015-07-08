
$('.contentObj').bind('click', function (e) {
    e.preventDefault();

    var speed = 600;
    var delay = 800;
    var offset = 100;
    var delayN = 100;
    var delayP = 100;
    var obj = this;
    var nextEl = $(obj).nextAll('.contentObj');
    var prevEl = $(obj).prevAll('.contentObj');

    $(obj).animate({
        opacity: 0,
        height: 0
    }, speed);

    nextEl.each(function (index, elem) {
        setTimeout(function () {
            $(elem).animate({
                opacity: 0,
                height: 0
            }, speed, function () {
            });
        }, delayN);
        delayN += offset;
    });

    prevEl.each(function (index, elem) {
        setTimeout(function () {
            $(elem).animate({
                opacity: 0,
                height: 0
            }, speed, function () {
            });
        }, delayP);
        delayP += offset;
    });

    setTimeout(function () {
        document.location = $(obj).attr('href');
    }, delay)

    return false;
});