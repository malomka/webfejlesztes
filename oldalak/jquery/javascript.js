document.addEventListener("DOMContentLoaded", function () {
    function arkalkulator() {
        event.preventDefault();
        let osszeg = 0;
        osszeg += getSelectedValue("tesztafajtak");
        osszeg += getSelectedValue("hus");
        osszeg += getSelectedValue("feltet");
        osszeg += getSelectedValue("extra");
        document.getElementById("output").innerHTML = `A végösszeg ${osszeg}.- Ft`;
    }

    function getSelectedValue(name) {
        let osszeg = 0;
        const elemek = document.getElementsByName(name);
        for (let i = 0; i < elemek.length; i++) {
            if (elemek[i].type === "checkbox" && elemek[i].checked) {
                osszeg += Number(elemek[i].value);
            } else if (elemek[i].type === "radio" && elemek[i].checked) {
                osszeg += Number(elemek[i].value);
                break;
            }
        }
        return osszeg;
    }

    document.getElementById("sajatteszta").addEventListener("submit", arkalkulator);
});

