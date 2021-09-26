import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  tasks: [] as string[],
  name: 'TasksStore',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  tasks: state => state.tasks,
}

export const mutations: MutationTree<RootState> = {
  GET_TASKS: (state, tasks: []) => (state.tasks = tasks),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchTasks({ commit }) {
    const tasks = await this.$axios.$get('932711ca-96f8-453d-90e6-dd114ac25c25')  // get tasks mock
    commit('GET_TASKS', tasks)
  },

}
