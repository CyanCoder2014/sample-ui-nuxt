import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  users: [] as string[],
  name: 'UsersStore',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  users: state => state.users,
}

export const mutations: MutationTree<RootState> = {
  GET_USERS: (state, users: []) => (state.users = users),
}

export const actions: ActionTree<RootState, RootState> = {

  async fetchUsers({ commit }) {
    const users = await this.$axios.$get('429711e1-59f6-4910-96bb-4e390c6b0063')  // get users mock
    commit('GET_USERS', users)
  },

}
