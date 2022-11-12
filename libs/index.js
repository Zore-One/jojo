
import props from './config/props.js'

const $x = {
	props
}
uni.$X = $x
console.log('uni',uni)
const install = (Vue) => {
	Vue.prototype.$x = $x
}
export default {
	install
}