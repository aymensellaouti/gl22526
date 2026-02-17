const a = document.querySelector('a');

a.addEventListener('click', (e)=> {
    if(!confirm('etes vous sur de vouloir quitter le site ?')) {
        // Nkhalih fel page mta3na
        e.preventDefault();
    }
})