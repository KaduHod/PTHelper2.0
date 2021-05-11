

// quero filtrar musculos de acordo com as suas posições0
//infeiror, superior, anterior, posterior e lateral
const musculosReduceRegiao = arrMusculos.reduce(function(objMusculosPorcoes, valorArray){
    arrRegioes = [ 'Posterior', 'Anterior', 'Superior', 'Inferior', 'Lateral']
    arrRegioes.forEach((el)=>{
        if(valorArray.regiao.indexOf(`${el}`)!=-1){objMusculosPorcoes[el].push(valorArray)}
    })
    return objMusculosPorcoes
},{'Posterior':[],'Anterior':[],'Superior':[],'Inferior':[],'Lateral':[]})
//musculosReduceRegiao posso utilizar para separar exercicios de acordo com a regiao recrutada
// console.log(musculosReduceRegiao)

function filtraPorMusculo(musculo){// retorna um objt do musculos ou musculos passados como parametros contendo nome, porções e exercicios
    if(Array.isArray(musculo)== false){
        let musculo_block_html = {
            'Nome do músculo':musculo.nome,
            'Exercícios e porções do músculo': musculo.porcoes,
            'Exercícios agrupados': retornaExerciciosAgrupados(musculo)
        }
        return musculo_block_html
    }else{
       let musculos_block_html = musculo.reduce(function(acumulador,el){
            obj_musc = {
                Nome:el.nome,
                'Exercícios e porções do músculo': el.porcoes,
                'Exercícios agrupados': retornaExerciciosAgrupados(el)
            }
            acumulador.push(obj_musc)
            
            return acumulador
        },[])
        return musculos_block_html
    }
}


// fazer uma função que retorna os todos os exercicios do musculo

function retornaExerciciosAgrupados(musculo){// esta função pega o todos os exercicios e junta em um array único
    
    ExerciciosAgrupados = []
    for(porcao in musculo.porcoes){
        if(Array.isArray(musculo.porcoes[porcao]) == true){
            ExerciciosAgrupados.push(musculo.porcoes[porcao])
        }else{
            for(subporcao in musculo.porcoes[porcao]){
                ExerciciosAgrupados.push(musculo.porcoes[porcao][subporcao])
            }
        }
    }
    arrayConcatenadoExercicios = ExerciciosAgrupados[0]
    ExerciciosAgrupados.forEach((el,index)=>{
        if(index != 0){
            arrayConcatenadoExercicios = arrayConcatenadoExercicios.concat(el)
        }
    })
    return arrayConcatenadoExercicios
}
// console.log(retornaExerciciosAgrupados(Peitoral))
// console.log(filtraPorMusculo(Peitoral))
