document.getElementById('burger').onclick = function()
{
    let menu = document.getElementById('menu');
    if (menu.style.display == 'block')
    {
        menu.style.display = 'none';
    }
    else
    {
        menu.style.display = 'block';
    }
}

document.body.onresize = function()
{
    let menu = document.getElementById('menu');
    if (window.innerWidth >= 768)
    {
        menu.style.display = 'block'
    }
    else
    {
        menu.style.display = 'none';
    }
}
