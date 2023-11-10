// let url = "https://script.google.com/macros/s/AKfycbww0SLu5_EuH6ELq5BgxkvWT96F1-JaUzvy-IGI4Co9zCP9dOtLKfsV_1osfC4PQi_d/exec?action=getInfo";

let url = "https://script.google.com/macros/s/AKfycbzt7ZeVMgDl7agJSBXD16QiH1vXv7AboqTWzuoBmCYbV8e9Lv52XsJrN4QoFVUu9TwuKA/exec?link=${'https://docs.google.com/spreadsheets/d/1lLdSovGe_9jWfMGg-P8fzEZiaet4VuSLEnw9S1Y6R78/edit'}&pagina=${'pag1'}&celulas={'A1:F'}";

function fazerRequisicao() {
    axios.get(url)
        .then(function (response) {
        document.getElementById('parag').innerHTML = 'Dados recebidos: ' + JSON.stringify(response.data);
        })
        .catch(function (error) {
        document.getElementById('parag').innerHTML = 'Erro: ' + error.message;
        });
}