import * as types from './mutation-types'

const mutations = {
	[types.SET_COUNT](state, payload) {
		state.count = payload
	}
}

export default mutations