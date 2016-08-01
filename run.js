function main()
{
    givevays = $('div[class="giveaway c-giveaway"]');

    nu = givevays.filter('div[data-price="0"]');
    dd = $('input[class="btn btn-golden"]', nu);
    console.log(dd.size() + " раздач");
    old = 0;
    slt = 0;
    dd.each(function (index, elem)
    {

        console.log(index + " раздача " + (slt - old));
        setTimeout($(elem).click(), slt);
        old = slt;
        slt += Math.floor((Math.random() * 150) + 1);
        slt += 600;
    });
    console.log("Затрачено времени - " + (old / 1000) + " c");
    // return dd;
}
function reload()
{
    window.location.href = "http://gameminer.net/?q=&type=any&enter_price=on&sortby=finish&order=asc&filter_entered=on";
}
main();
window.setTimeout(reload, 47000);
$("[class=next]")
$(window).hashchange(function ()
{
    console.log("сменился адрес");
    setTimeout(main(), 500);
});