import props from './libs/config/props.js'

const $x = {
	props
}

uni.$x = $x

const install = (Vue) => {
	Vue.prototype.$x = $x
}

export default {
	install
}