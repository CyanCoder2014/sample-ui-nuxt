<template>

  <div>

    <v-row>
      <v-col>
        <ChartBar :data="chartData()"/>
      </v-col>
    </v-row>

    <v-row>

      <v-col class="text-left">
        <h2>Users Tasks:</h2>
        <div v-if="users.users" v-for="(user, userKey) in users.users" class="my-3">
          <b>{{ user.id }} - {{ user.name }}</b>
          <ul v-if="user.id" class="my-2">
            <li v-for="(task, taskKey) in userTasks(tasks, user.id)">
              {{task.title}}
            </li>
          </ul>
          <br>
        </div>
      </v-col>

    </v-row>


  </div>


</template>


<script lang="ts">

import {Component, Vue} from 'nuxt-property-decorator'
import {getters, RootState} from '~/store/users'
import ChartBar from "~/components/ChartBar.vue";

import {Task} from "~/types/task";
import {User} from "~/types/User";

@Component({
  components: {ChartBar}
})

export default class UserTasks extends Vue {

  get users() {
    return (this.$store.state as RootState).users
  }

  get tasks() {
    return (this.$store.state as RootState).tasks
  }

  protected userTasks(tasksObject: object, userId: bigint) {
    const userTasks: [] = []
    if (tasksObject.tasks)
      Array.prototype.forEach.call(tasksObject.tasks, item => {
        if (item.userId == userId)
          userTasks.push(item)
      });
    return userTasks
  }


  protected chartData() {
    let datacollection: object = {
      labels: [],
      datasets: [
        {
          label: 'Completed',
          backgroundColor: '#f43a04',
          data: []
        },
        {
          label: 'UnCompleted',
          backgroundColor: '#00c853',
          data: []
        }
      ]
    }

    const tasks: [] = this.tasks

    let users: [] = []
    if (this.users)
      users = this.users.users

    Array.prototype.forEach.call(users, user => {

      let userTasks: [] = []
      if (user.id) {
        userTasks = this.userTasks(tasks, user.id)

        let userName: string = ''
        if (user.name)
          userName = user.name
        else
          userName = user.id
        datacollection.labels.push(userName)


        let completedTasks: bigint = 0
        let unCompletedTasks: bigint = 0
        Array.prototype.forEach.call(userTasks, task => {
          if (task.completed)
            completedTasks++
          else
            unCompletedTasks++
        });

        datacollection.datasets[0].data.push(completedTasks)
        datacollection.datasets[1].data.push(unCompletedTasks)

      }

    });

    return datacollection
  }

  public pluck(array, key) {
    return array.map(function (obj) {
      return obj[key];
    });
  }


  mounted() {
    this.$store.dispatch('users/fetchUsers')
    this.$store.dispatch('tasks/fetchTasks')
  }


}


</script>
