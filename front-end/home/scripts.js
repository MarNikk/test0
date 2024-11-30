function start (params){

    document.addEventListener('click', function(event) {

        if (event.target.dataset.counter != undefined) { // если есть атрибут...
          event.target.value++;
        }
        if (event.target.closest('form') && event.target.id == "submit0") { // если есть атрибут...   
            console.log('you take submit0 button')

            getPostQeust();
        }
    
    });
}
function getPostQeust(infoPanel) {
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    // document.getElementById('infoPanel').innerHTML = res.body;
    infoPanel ??= document.getElementById('infoPanel');

    fetch("http://localhost:8080/registr/test/",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({"fname": fname, "lname": lname})
    })
        .then(res => res.ok ? "res gooood" : "you lox").then(a => console.log(a))
        // .then(res=>res.json())
        // .then(res => infoPanel.innerHTML = res)  //.body

    // fetch("http://localhost:8080/registr/").then(res=>res.json()).then(data=>console.log(data))
}


start()