import Vue from 'vue'
import _xtoast from './x-toast.vue'

const Xtoast = Vue.extend(_xtoast)
export default {
	install (Vue) {
		let xtoast = null
		
		// Vue.component(_xtoast.name,_xtoast)
		
		Vue.prototype.$xtoast = function(option) {
			option.position = option.position ? option.position : 'bottom',
			option.content = option.content ? option.content : '咩咩咩咩咩咩咩咩咩咩咩咩'
			option.success({msg:'成功'})
			  let $vvm
			  if (!$vvm) {
				$vvm = new Xtoast()
				$vvm.position = option.position
				$vvm.content = option.content
				$vvm.$mount(document.createElement('div')) //关键代码
				document.body.appendChild($vvm.$el) // 关键代码
				return $vvm.$el
		}
		}
		// function show(props) {
		// 	if(!xtoast) {
		// 		const Xtoast = Vue.extend({
		// 			render (h) {
		// 				return h('x-toast',{props})
		// 			}
		// 		})
				
		// 		xtoast = new Xtoast()
		// 		this.vm = xtoast.$mount()
		// 		document.body.appendChild(this.vm.$el)
		// 	}
		// }
		
		// function hide() {
		// 	setTimeout(() => {
		// 		document.body.removeChild(this.vm.$el)
		// 		xtoast.$destroy()
		// 		xtoast = null
		// 		this.vm = null
		// 	},2000)
		// }
	}
}