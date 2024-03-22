window.addEventListener('load',codigo);

function codigo() {

    /*
    Cambios de codigo: 
    
    - Nueva forma de implementar el DOM gracias al metodo objet HTML, entre las ventajas encontramos: un codigo más legible, 
    un código más optimizado y mejor estructurado.

    Tag:

    Ex: const html={
        div:document.getElementsByTagNames('div')
    }

    Id:

     Ex: const html={
        __name:document.getElementById('name')
    }

    Class:

     Ex: const html={
        __myclass__:document.getElementsByClassname('myclass')
    }

    */

    var html={
        __result:document.getElementById('result'),
        __insert:document.getElementById('insert'),
        __medidas:document.getElementById('medidas'),
        __insertMedida:document.getElementById('insertMedida'),
        __resultMedida:document.getElementById('resultMedida'),
        __cambio:document.getElementById('cambio'),
        __corazon:document.getElementById('corazon'),
        __box_main_result_pather:document.getElementById('box_main_result--pather'),
        __box_main_result_row__:new Array()
    }

    var datesIN = html.__result.value;
    var datesOUT = html.__insert.innerHTML;
    let medida = html.__medidas.value;
    var row;

    var result = 0;
    var rowCont = 0;
    var contfile = 0;
    

    html.__medidas.addEventListener('change', calcMedidas);

    html.__insert.addEventListener('keydown',calcMedidas);

    html.__insert.addEventListener('input',calcMedidas);

    html.__cambio.addEventListener('click',cambioMedida);

    html.__corazon.addEventListener('click',insertData);


    function kmMiles(input,medida) {
        medida==='1'?result = input/1.60934:result = input*1.60934;
        if (medida==='1') {
            html.__insertMedida.textContent='km';
            html.__resultMedida.textContent='miles';
        }else{
            html.__insertMedida.textContent='miles';
            html.__resultMedida.textContent='km';
        }
        return result;
    }



    function footM(input,medida) {
        medida==='3'?result = input/3.28084:result = input*3.28084;
        if (medida==='3') {
            html.__insertMedida.textContent='feet';
            html.__resultMedida.textContent='metres';
        }else{
            html.__insertMedida.textContent='metres';
            html.__resultMedida.textContent='feet';
        }
        return result;
    }


    function pulcm(input,medida) {
        medida==='5'?result = input/2.54:result = input*2.54;
        if (medida==='5') {
            html.__insertMedida.textContent='inches';
            html.__resultMedida.textContent='cm';
        }else{
            html.__insertMedida.textContent='cm';
            html.__resultMedida.textContent='inches';
        }
        return result;
    }


    function calcMedidas() {

        if (this.id==='medidas') {
            medida = this.value; ;
        }   
        

        let input = html.__insert.value;
        if (input===null||isNaN(input)) {
            input=0;
        }
        
        switch (medida) {
            case '1':
                html.__result.textContent=kmMiles(input,medida).toFixed(2);
                break;
            case '2':
                html.__result.textContent=kmMiles(input,medida).toFixed(2);
                break;
                case '3':
                    html.__result.textContent=footM(input,medida).toFixed(2);
                    break;
                    case '4':
                        html.__result.textContent=footM(input,medida).toFixed(2);
                        break;

                        case '5':
                            html.__result.textContent=pulcm(input,medida).toFixed(2);
                            break;

                            case '6':
                                html.__result.textContent=pulcm(input,medida).toFixed(2);
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
                html.__result.textContent=kmMiles(datesIN,medida).toFixed(2);
                break;
            case '2':
                medida = '1';
                html.__result.textContent=kmMiles(datesIN,medida).toFixed(2);
                break;
                case '3':
                    medida = '4';
                    html.__result.textContent=footM(datesIN,medida).toFixed(2);
                    break;
                    case '4':
                        medida = '3';
                        html.__result.textContent=footM(datesIN,medida).toFixed(2);
                        break;

                        case '5':
                            medida = '6';
                            html.__result.textContent=pulcm(datesIN,medida).toFixed(2);
                            break;

                            case '6':
                                medida = '5';
                                html.__result.textContent=pulcm(datesIN,medida).toFixed(2);
                                break;
            default:
                break;
        }
    }




    function insertData() {
        let medidaIN = '';
        let medidaOUT = '';
        datesIN = html.__insert.value;
        datesOUT = html.__result.textContent;


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
                                case '6':
                                    medidaIN = 'cm';
                                    medidaOUT = 'inches';
                                    break;
            default:
                break;
        }

        let id =parseInt(Math.random() * (9999 - 1) + 1);
        let cad = datesIN.value+medidaIN+' → '+datesOUT+medidaOUT; 
        sessionStorage.setItem(id,cad);
      
        
        if (contfile%2===0) {

            html.__box_main_result_pather.insertAdjacentHTML("beforeend",createrow(medidaIN,medidaOUT,id));
            html.__box_main_result_row__.push(document.getElementById('box_main_result--row'+rowCont.toString()));

            console.log(html.__box_main_result_row__);
            
        contfile++;
        }else{

            html.__box_main_result_row__[rowCont].insertAdjacentHTML("beforeend",createcol(medidaIN,medidaOUT,id));
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
        document.getElementById('box_result?'+this.id).textContent='';
    }


    function createrow(medidaIN,medidaOUT,id) {
        
        const p__col = document.createElement('p');
        p__col.textContent=datesIN+medidaIN+' → '+datesOUT+medidaOUT;
        const img_col = document.createElement('img');
        img_col.id=id;
        img_col.classList.add('close');
        img_col.src='./js/back/x-lg.svg';

        const div_col = document.createElement('div');
        div_col.id='box_result_text';
        div_col.classList.add('box_main_result--col--col1');
        div_col.appendChild(p__col);
        div_col.appendChild(img_col);

        var box_main_result_col=document.createElement('div');
        box_main_result_col.id='box_result?'+id;
        box_main_result_col.classList.add('box_main_result--col');
        box_main_result_col.appendChild(div_col);

        var box_main_row = document.createElement('div');
        box_main_row.id='box_main_result--row'+rowCont;
        box_main_row.classList.add('box_main_result--row');
        box_main_row.appendChild(box_main_result_col);

        return box_main_row.outerHTML;

    }



    function createcol(medidaIN,medidaOUT,id) {
        const p__col = document.createElement('p');
        p__col.textContent=datesIN+medidaIN+' → '+datesOUT+medidaOUT;
        const img_col = document.createElement('img');
        img_col.id=id;
        img_col.classList.add('close');
        img_col.src='./js/back/x-lg.svg';

        const div_col = document.createElement('div');
        div_col.id='box_result_text';
        div_col.classList.add('box_main_result--col--col1');
        div_col.appendChild(p__col);
        div_col.appendChild(img_col);

        var box_main_result_col=document.createElement('div');
        box_main_result_col.id='box_result?'+id;
        box_main_result_col.classList.add('box_main_result--col');
        box_main_result_col.appendChild(div_col);

        return box_main_result_col.outerHTML;
    }

}
