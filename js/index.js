document.addEventListener("DOMContentLoaded", () => {
    let botonGuardar = document.getElementById("buttonText");

    botonGuardar.addEventListener("click", (event) => {

        let info = document.getElementById("inputText").value;

        localStorage.setItem('dato',info); 
        });
    });
