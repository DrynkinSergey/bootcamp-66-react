import { createStore } from 'redux'
import { counterReducer } from './counter/reducer'
import { devToolsEnhancer } from '@redux-devtools/extension'

const enhancer = devToolsEnhancer()
export const store = createStore(counterReducer, enhancer)
