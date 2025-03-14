import { configureStore } from '@reduxjs/toolkit'

import tarefasReducer from './reducers/tarefas'

const store = configureStore ({
  reducer: {
    tarefas: tarefasReducer
  }
})

export type RootRecuder = ReturnType<typeof store.getState>
export default store
