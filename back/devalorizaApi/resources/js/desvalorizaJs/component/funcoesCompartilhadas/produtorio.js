import {mapInflacoes} from './mapInflacoes';

const produtorio = (array) =>{
    if(array.length){   
        var a = (mapInflacoes(array).reduce( (e,a,i,arr) => {
            return ((a/100) + 1)*e
            },1
        )
    )
    }else{
        return 0
    }    
    return a.toFixed(6)
}
export default produtorio
export {  mapInflacoes }