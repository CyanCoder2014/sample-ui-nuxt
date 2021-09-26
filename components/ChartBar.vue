<template>


  <div>

    <bar-chart v-if="data" :chart-data="data" :options="options" :width="300" :height="500"></bar-chart>

  </div>


</template>





<script>

import BarChart from '../plugins/vue-chart.js'


export default {

  components: {
    BarChart
  },

  props:{
    data: null
  },

  data: () => ({

    options: {
      plugins: {
        title: {
          display: true,
          text: 'Chart Bar Stacked'
        },
      },
      responsive: true,
      maintainAspectRatio:false,
      scales: {
        xAxes: [{
          stacked: true,
          categoryPercentage: 0.5,
          barPercentage: 1
        }],
        yAxes: [{
          stacked: true
        }]
      }
    }


  }),




}
</script>
