import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  tasks: [] as string[],
  name: 'Tasks',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  name: state => state.name,
}

export const mutations: MutationTree<RootState> = {
  CHANGE_NAME: (state, newName: string) => (state.name = newName),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchTasks({ commit }) {
    const tasks = await this.$axios.$get('/v1/932711ca-96f8-453d-90e6-dd114ac25c25')  // get tasks mock
    console.log(tasks)
    commit('CHANGE_NAME', 'New title')
  },
}
