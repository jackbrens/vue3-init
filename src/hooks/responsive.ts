import { reactive } from 'vue'

interface Responsive {
  width: number
  height: number
}
const responsive: Responsive = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
  mobile() {
    return this.width <= 768
  },
  tablet() {
    return this.width <= 900
  },
  desktop() {
    return this.width <= 1200
  },
  wide() {
    return this.width >= 1200
  },
})

window.addEventListener('resize', () => {
  responsive.width = window.innerWidth
  responsive.height = window.innerHeight
})

export default responsive
