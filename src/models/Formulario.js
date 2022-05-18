// faz as leitura dos formularios
class Formulario {
    static form = document.getElementById("Formulario")
    static value = {}
    static requesFrom(e) {
        e.preventDefault()
        this.values = {}
        const itens = [...e.target]
        itens.forEach(element => {
           const cartegoria=document.querySelector('input[name="categoria"]:checked').value
            if (element.name != "" && element.name != "categoria") {
                this.value[element.name] = element.value
            }
            if(element.name == "categoria"){
                this.value[element.name] = cartegoria
            }

            
        });
    }
}

export { Formulario }
