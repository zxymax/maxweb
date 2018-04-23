import * as types from './mutation-types'

export const changeCount = ({commit}, value)=>{
	commit(types.SET_COUNT, value)
}