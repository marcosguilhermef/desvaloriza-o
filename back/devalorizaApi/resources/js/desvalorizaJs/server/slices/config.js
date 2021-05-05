import { createSlice  } from '@reduxjs/toolkit';

export const config = createSlice({
    name: 'config',
    initialState:{
          indices: [],
          status: ''
    },
    reducers: {
      setConfig: (state, action) => {
        state.indices = action.payload
      },
      setStatusConfig: (state, action) => {
        state.indices = action.payload
      }
    }
  })

export const { setConfig, setStatusConfig } = config.actions;
export const configReducer = config.reducer;
