<template>



  <div>
sdsd/


{{users}}

    <br>
<!--    {{ users() }}-->

  </div>



<!--  <ChartBar/>-->
</template>




<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { getters, RootState } from '~/store/users'
// import ChartBar from "~/components/ChartBar.vue";
// @Component({
//   components: {ChartBar}
// })
@Component
export default class UserTasks extends Vue {




  get users() {
    return (this.$store.state as RootState).users
  }

  mounted() {
    let test = (this.$store.state as getters).users
    console.log(test)

    const name = this.$store.getters['name'] as ReturnType<typeof getters.name>
    //
    // console.log('$store.getters[\'users\']',name)
    // this.$store.commit()
    this.$store.dispatch('users/fetchUsers','fetchUsers')
  }
}


</script>
