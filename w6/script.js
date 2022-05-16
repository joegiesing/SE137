var tray = document.querySelector('#tray');

tray.addEventListener('click', openClose)

function openClose(e)
{
    var nav = document.querySelector('nav');
    nav.classList.toggle('hidden');
}

var tabs = document.querySelectorAll('#tabs a');
console.log(tabs);

for(let i=0; i < tabs.length; i++)
{
    tabs[i].addEventListener('click', function(e){
        for(let i=0; i < tabs.length; i++)
        {
            tabs[i].getElementsByClassName.backgroundcolor = 'orange';
        }
        e.target.style.backgroundcolor = '#161616'
        document.querySelectorAll('#breadcrumbs a')[3].innerHTML = e.target.innerText
    });
}