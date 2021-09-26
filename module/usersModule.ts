import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true,
})
class UsersModule extends VuexModule {
  userList:[] = []

  // @Mutation
  // groupByTasks(tasks:[]) {
  //
  // }
  //
  // addUser(user:object) {
  //   // @ts-ignore
  //   this.userList.push(user)
  // }
  //
  // get users():[] {
  //   return this.userList
  // }

}
