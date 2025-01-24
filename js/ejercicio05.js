const body = document.getElementsByTagName('body')[0];
let div = document.createElement('div');

body.addEventListener('click', (e)=>{
    div.innerHTML= ' ';
    let p = document.createElement('p');
    let turno = '';
    let grado = '';
    let cursos = '';

    if(e.target.parentNode.getAttribute('id') == 'mañana'){
        turno = e.target.parentNode.getAttribute('id');
        grado = grados(e.target);
        cursos = e.target.nextElementSibling.children;
        p.innerHTML = `Has elegido Grado Medio que se imparte en turno de ${turno}` + " <br> " + `Los nº de grupos que se imparten son ${cursos.length}: ${curso(cursos)}`
        div.append(p)
        body.append(div);
        
    }else if(e.target.parentNode.getAttribute('id') == 'tarde'){
        turno = e.target.parentNode.getAttribute('id');
        grado = grados(e.target);
        cursos = e.target.nextElementSibling.children;
        p.innerHTML = `Has elegido Grado Medio que se imparte en turno de ${turno}` + " <br> " + `Los nº de grupos que se imparten son ${cursos.length}: ${curso(cursos)}`
        div.append(p)
        body.append(div);
    }

})

function grados(elemento){
    
    if(elemento.textContent.trim() == 'Grado Superior'){
        return elemento.textContent.trim();
    }else{
        return elemento.textContent.trim();
    }
}

function curso(elemento){
    let cursos = ''

    for(let k = 0; k < elemento.length; k++){
        cursos += elemento[k].textContent+ ' ';
    }
    return cursos;
}