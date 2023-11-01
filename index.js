document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formPay");
    const ticketPrice = document.getElementById("ticketPrice");
    const alertTotalPay = document.getElementById("alertTotalPay");
    const selectElement = document.getElementById("floatingSelectGrid");
    const resetButton = document.getElementById("resetButton");

    let price = 200;
    ticketPrice.innerHTML = `<strong>${price}</strong>`

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        let cant = parseInt(document.getElementById("cantidadTickets").value);

        console.log(cant);

        var valorSeleccionado = selectElement.value;
        console.log(valorSeleccionado);

        if (cant < 0 || !cant) {
            alertTotalPay.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Valor no valido
                </div>
            `
        } else {
            let totalToPay = calculatePrice(price, cant, valorSeleccionado);
            console.log("Calculo total: " + totalToPay);
            alertTotalPay.innerHTML = `
                <div class="alert alert-info" role="alert">
                    Total a pagar: $ <strong>${totalToPay}</strong>
                </div>
            `
        }
    })


    resetButton.addEventListener("click", function () {
        alertTotalPay.innerHTML = ''
        form.reset();
    });

    var elementosSpan = document.querySelectorAll("span[value]");


    elementosSpan.forEach(function (elemento) {
        elemento.addEventListener("click", function () {
            var valor = elemento.getAttribute("value");
            selectElement.value = valor;
        });
    });


    const ESTUDIANTES = "1";
    const TRAINEE = "2";
    const JUNIOR = "3";

    let calculatePrice = (price, cant, valorSeleccionado) => {
        let totalToPay
        let priceXcant = price * cant
        switch (valorSeleccionado) {
            case ESTUDIANTES:
                let _80Off = priceXcant * 0.80;
                totalToPay = priceXcant - _80Off;
                break;
            case TRAINEE:
                let _50Off = priceXcant * 0.50;
                totalToPay = priceXcant - _50Off;
                break;
            case JUNIOR:
                let _15Off = priceXcant * 0.15;
                totalToPay = priceXcant - _15Off;
                break;
            default:
                totalToPay = 0;
                break;
        }
        return totalToPay;
    }


})