/* refresh page on keydown (Esc) */
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
        let meta = document.createElement('meta');
        meta.httpEquiv = 'refresh';
        meta.content = '1';
        document.head.appendChild(meta);
	}

});