
import { createSlice  } from '@reduxjs/toolkit';
export const api = createSlice({
    name: 'api',
    initialState:{
      dadosHitoricos: [],
      dolar: [],
      datas: { dataInicial: '01-01-2018', dataFinal: '01-04-2021' },
      status: 'ocioso',
      mensagem: '' ,
      download: 0
    },
    reducers: {
      setDados: (state, action) => {
        state.dadosHitoricos = action.payload
      },
      setDolar: (state,action) => {
        state.dolar = action.payload
      },
      setStatus: (state, action) => {
        state.status = action.payload
      },
      setDownload: (state, action) => {
        state.download = action.payload
      },
      setData: (state, action) => {
        const update = {
          ...state,
          datas: {
            ...state.datas,
            [action.payload.key]: action.payload.state[action.payload.key]
          }
        }
        return update
      }
    }
  })

export const { setDados , setStatus ,setDownload  , setData, setDolar  } = api.actions
export const apiReducer = api.reducer
