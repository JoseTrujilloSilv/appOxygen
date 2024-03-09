window.addEventListener('load',codigo);

function codigo() {

    var datesIN = document.getElementById('result').value;
    var datesOUT = document.getElementById('insert').value;
    var medida = document.getElementById('medidas').value;
    var result = 0;
    var medidaEntrada = document.getElementById('insertMedida');
    var medidaSalida = document.getElementById('resultMedida');
    var rowCont = 0;
    var contfile = 0;
    

    document.getElementById('medidas').addEventListener('change', calcMedidas);

    document.getElementById('insert').addEventListener('keydown',calcMedidas);

    document.getElementById('insert').addEventListener('input',calcMedidas);


    document.getElementById('cambio').addEventListener('click',cambioMedida);

    document.getElementById('corazon').addEventListener('click',insertData);


    function kmMiles(input,medida) {
        medida==='1'?result = input/1.60934:result = input*1.60934;
        if (medida==='1') {
            medidaEntrada.innerHTML='km';
            medidaSalida.innerHTML='miles';
        }else{
            medidaEntrada.innerHTML='miles';
            medidaSalida.innerHTML='km';
        }
        return result;
    }



    function footM(input,medida) {
        medida==='3'?result = input/3.28084:result = input*3.28084;
        if (medida==='3') {
            medidaEntrada.innerHTML='feet';
            medidaSalida.innerHTML='metres';
        }else{
            medidaEntrada.innerHTML='metres';
            medidaSalida.innerHTML='feet';
        }
        return result;
    }


    function pulcm(input,medida) {
        medida==='5'?result = input/2.54:result = input*2.54;
        if (medida==='5') {
            medidaEntrada.innerHTML='inches';
            medidaSalida.innerHTML='cm';
        }else{
            medidaEntrada.innerHTML='cm';
            medidaSalida.innerHTML='inches';
        }
        return result;
    }


    function calcMedidas() {

        if (this.id==='medidas') {
            medida = this.value; ;
        }   
        

        let input = parseFloat(document.getElementById('insert').value);
        if (input===null||isNaN(input)) {
            input=0;
        }
        
        switch (medida) {
            case '1':
                document.getElementById('result').innerHTML=kmMiles(input,medida).toFixed(2);
                break;
            case '2':
                document.getElementById('result').innerHTML=kmMiles(input,medida).toFixed(2);
                break;
                case '3':
                    document.getElementById('result').innerHTML=footM(input,medida).toFixed(2);
                    break;
                    case '4':
                        document.getElementById('result').innerHTML=footM(input,medida).toFixed(2);
                        break;

                        case '5':
                            document.getElementById('result').innerHTML=pulcm(input,medida).toFixed(2);
                            break;

                            case '6':
                                document.getElementById('result').innerHTML=pulcm(input,medida).toFixed(2);
                                break;
            default:
                break;
        }
    }   




    function cambioMedida() {

        if (datesIN===null||isNaN(datesIN)) {
            datesIN=0;
        }
        

        switch (medida) {
            case '1':
                medida = '2';
                document.getElementById('result').innerHTML=kmMiles(datesIN,medida).toFixed(2);
                break;
            case '2':
                medida = '1';
                document.getElementById('result').innerHTML=kmMiles(datesIN,medida).toFixed(2);
                break;
                case '3':
                    medida = '4';
                    document.getElementById('result').innerHTML=footM(datesIN,medida).toFixed(2);
                    break;
                    case '4':
                        medida = '3';
                        document.getElementById('result').innerHTML=footM(datesIN,medida).toFixed(2);
                        break;

                        case '5':
                            medida = '6';
                            document.getElementById('result').innerHTML=pulcm(datesIN,medida).toFixed(2);
                            break;

                            case '6':
                                medida = '5';
                                document.getElementById('result').innerHTML=pulcm(datesIN,medida).toFixed(2);
                                break;
            default:
                break;
        }
    }




    function insertData() {
        datesIN = document.getElementById('insert').value;
        datesOUT = document.getElementById('result').innerHTML;

        let medidaIN = '';
        let medidaOUT = '';

        switch (medida) {
            case '1':
                medidaIN = 'km';
                medidaOUT = 'miles';
                break;
                case '2':
                    medidaIN = 'miles';
                    medidaOUT = 'km';
                    break;
                    case '3':
                        medidaIN = 'feet';
                        medidaOUT = 'metres';
                        break;
                        case '4':
                            medidaIN = 'metres';
                            medidaOUT = 'feet';
                            break;
                            case '5':
                                medidaIN = 'inches';
                                medidaOUT = 'cm';
                                break;
                                case '5':
                                    medidaIN = 'cm';
                                    medidaOUT = 'inches';
                                    break;
            default:
                break;
        }

        let id =parseInt(Math.random() * (9999 - 1) + 1);
        let cad = datesIN+medidaIN+' → '+datesOUT+medidaOUT; 
        sessionStorage.setItem(id,cad);
      

        console.log(sessionStorage.getItem(id));

        
        if (contfile%2===0) {
            document.getElementById('box_main_result--pather').innerHTML+= 
        '<div id="box_main_result--row'+rowCont+'"                       class="box_main_result--row">'
            +'<div id="box_result?'+id+'" class="box_main_result--col">'+
                '<div id="box_result_text" class="box_main_result--col--col1"><p>'+datesIN+medidaIN+' → '+datesOUT+medidaOUT+'</p><img id="'+id+'" class="close" src="./js/back/x-lg.svg" alt="">'+
                '</div>'+
            '</div>'
        '</div>';
        contfile++;
        }else{
            document.getElementById('box_main_result--row'+rowCont).innerHTML+= 
            '<div id="box_result?'+id+'" class="box_main_result--col">'+
                    '<div id="box_result_text" class="box_main_result--col--col1"><p>'+datesIN+medidaIN+' → '+datesOUT+medidaOUT+'</p><img id="'+id+'" class="close" src="./js/back/x-lg.svg" alt="">'+
                    '</div>'+
                '</div>';
                contfile++;
                rowCont++;
        }
      
        for (const value of document.getElementsByClassName('close')) {
            value.addEventListener('click',eliminaMedida);
        }

        document.getElementsByTagName('footer')[0].classList.remove('footerAbsolute');
        
    }
    
    function eliminaMedida() {
        sessionStorage.removeItem(this.id);
        document.getElementById('box_result?'+this.id).innerHTML='';
    }


}