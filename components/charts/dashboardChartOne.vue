<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted() {
    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0, 0, 0, 450)

    this.gradient.addColorStop(0, 'rgba(76 ,175 ,80, 0.5)')
    this.gradient.addColorStop(0.4, 'rgba(76 ,175 ,80, 0.3)')
    this.gradient.addColorStop(0.6, 'rgba(76 ,175 ,80, 0.1)')
    this.gradient.addColorStop(1, 'rgba(76 ,175 ,80, 0)')

    this.gradient2.addColorStop(0, 'rgba(0, 231, 255, 0)')
    this.gradient2.addColorStop(0.5, 'rgba(0, 231, 255, 0)')
    this.gradient2.addColorStop(1, 'rgba(0, 231, 255, 0)')

    this.renderChart(
      {
        labels: [
          this.$t('dashboard.january'),
          this.$t('dashboard.february'),
          this.$t('dashboard.march'),
          this.$t('dashboard.april'),
          this.$t('dashboard.may'),
          this.$t('dashboard.june'),
          this.$t('dashboard.july'),
          this.$t('dashboard.august'),
          this.$t('dashboard.september'),
          this.$t('dashboard.october'),
          this.$t('dashboard.november'),
          this.$t('dashboard.december')
        ],
        datasets: [
          {
            label: this.$t('dashboard.sales'),
            borderColor: '#4CAF50',
            pointBackgroundColor: 'white',
            borderWidth: 3,
            pointBorderColor: '#4CAF50',
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 60, 40, 30, 40, 50, 40, 80]
          },
          {
            label: this.$t('dashboard.profit'),
            borderColor: '#F44336',
            pointBackgroundColor: 'white',
            pointBorderColor: '#F44336',
            borderWidth: 2,
            backgroundColor: this.gradient2,
            data: [60, 55, 32, 10, 2, 12, 50, 65, 50, 32, 60, 50]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    )
  }
}
</script>
