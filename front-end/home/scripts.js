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
    let name = document.getElementById('nikname').value;
    let password = document.getElementById('password').value;
    // document.getElementById('infoPanel').innerHTML = res.body;
    infoPanel ??= document.getElementById('infoPanel');

    fetch("http://localhost:8080/registr/addUser/",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({"name": name, "password": password})
    })
        .then(res => res.ok ? "res gooood" : "you lox").then(a => console.log(a))
        // .then(res=>res.json())
        // .then(res => infoPanel.innerHTML = res)  //.body

    // fetch("http://localhost:8080/registr/").then(res=>res.json()).then(data=>console.log(data))
}


start()