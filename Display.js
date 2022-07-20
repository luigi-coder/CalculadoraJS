class Display {

    constructor(displayValorAnterior, displayValorActual){
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            multiplicar: 'X',
            dividir: '%'
        }
    }

    borra(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
    agregarNumero(numero){
        if(numero==='.' && this.valorActual.includes('.')){
            return 
        }

        this.valorActual = this.valorActual.toString() + numero.toString(); 
        console.log(this.valorActual) 
        this.imprimirValores(); 
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || '' }`;
    }
    calcular(){
        const valorActual = parseInt(this.valorActual);
        const valorAnterior = parseInt(this.valorAnterior);

        if(isNaN(valorActual) || isNaN(valorAnterior)){
            return 
        }
        // calcular la operacion
        let resultado = 0;
        switch(this.tipoOperacion){
            case 'sumar':
                resultado = this.calculadora.suma(valorAnterior, valorActual);
                break;
            case 'restar':
                resultado = this.calculadora.restar(valorAnterior, valorActual);
                break;
            case 'multiplicar':
                resultado = this.calculadora.multiplicar(valorAnterior, valorActual);
                break;
            case 'dividir':
                resultado = this.calculadora.dividir(valorAnterior, valorActual);
                break;
            default:
                break;
        }
        this.valorActual = resultado;
        this.imprimirValores();
        
        /* this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior, valorActual); */
    }
}