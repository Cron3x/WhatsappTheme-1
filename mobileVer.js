window.onload = function() {
    if (window.innerWidth < 697)
    {
        let conv = document.querySelector('div[class="ldL67 _3sh5K"]');
        conv.classList.add('nascosto');
    }
};


window.addEventListener('resize', function() {
    if (window.innerWidth < 697)
    {
        let conv = document.querySelector('div[class="ldL67 _3sh5K"]');
        conv.classList.add('nascosto');
    }

});


// cerca il div contenitore delle chat -> esegue main()
cercaChats();
function cercaChats() 
{
    console.log('cerco...')

    var contenitoreChats = document.querySelector('div[class="_3uIPm WYyr1"]');

    try 
    {
        contenitoreChats.innerHTML;
    }
    catch
    {
        console.log('eh no');
        setTimeout(() => {
            cercaChats();
        }, 1000);
    }
    finally {
        if(contenitoreChats.innerHTML) 
        {
            console.log('trovato');
            main(contenitoreChats);
        }

    }
}


// aggiunge listener di click per ogni chat
function main(contenitoreChats) 
{
    chats = contenitoreChats.children;

    for (let i = 0; i < chats.length; i++) {
        chats[i].addEventListener("click", function(this) {
            var contenitoreConversazione = document.querySelector('div[class="ldL67 _3sh5K"]');
            var side = document.querySelector('div[class="ldL67 _2i3T7 _191H_"]')
            var headerConv = document.querySelector('header[class="_23P3O"]')

            back = document.createElement(div);
            back.classList.add('tastoIndietro');
            back.innerHTML = '<';

            console.log(this);
            side.classList.add('nascosto');
            headerConv.appendChild(back);
        });
    }

}