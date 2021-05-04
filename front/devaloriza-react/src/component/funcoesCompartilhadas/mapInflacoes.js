export const mapInflacoes = (array) =>{
    return array.map( (e,a,i) => !isNaN(e['taxa']) ? 0 : e['taxa'])
}