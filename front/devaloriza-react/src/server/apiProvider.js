import { configReducer, setStatusConfig, setConfig } from '../server/slices/config'
import { apiReducer, setDados , setStatus ,setDownload , setData } from '../server/slices/api'

export const fetchDados =  (datas,callback) => async dispatch  => {
  try{
    dispatch(setStatus('ocioso'))
    const response =  await fetch('http://127.0.0.1:8000/api/ipca?' + new URLSearchParams({...datas}))
    const dados    =  await response.json()
    if(response.ok){
      dispatch(setDados(dados))
      dispatch(setStatus('sucesso'))
    }else{        
      dispatch(setStatus('erro'))
    }
  }catch(e){
    console.log(e)
  }
}

export const fetchConfig =  (callback) => async dispatch  => {
  try{
    const response =  await fetch('http://127.0.0.1:8000/api/indice')
    const dados    =  await response.json()
    if(response.ok){
      dispatch(setConfig(dados))
    }else{        
      dispatch(setStatusConfig('erro'))
    }
  }catch(e){
    console.log(e)
  }
}

export {apiReducer, configReducer, setDados , setStatus ,setDownload  , setData}

   
