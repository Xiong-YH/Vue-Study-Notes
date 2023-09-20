import {initState} from './state'

export function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        //创造vm实例，其中this的指向是调用该方法的对象
        const vm = this
        //$option绑定传入的options
        vm.$options = options

        initState(vm)
    }
}