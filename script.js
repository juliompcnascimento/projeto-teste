let url = "https://script.google.com/macros/s/AKfycbww0SLu5_EuH6ELq5BgxkvWT96F1-JaUzvy-IGI4Co9zCP9dOtLKfsV_1osfC4PQi_d/exec?action=getInfo";

const listaClientes = () => {
    return fetch(url)
    .then( resposta => {
    return resposta.json()
    })
  }

function testeFetch() {
    alert("Entrou");

    // let url = "https://script.google.com/macros/s/AKfycbzgt4c800NjRUJDF-8gnoNbsa8hS-YYD3VqCPxSzNBmRmy1jAGySmXil2cJAGQXU2dbng/exec?action=getInfo";

    

    // const url = `https://viacep.com.br/ws/${60325-582}/json/`;
    
    listaClientes()
    .then(data => {
            alert("ok");
    })
}

function funcaoOne() {
    document.getElementById("parag").innerHTML = "fetch response no";
}