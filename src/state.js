import {observe} from './observe/index'

// 这里初始化的顺序依次是 prop>methods>data>computed>watch
function initState (vm) {
    const opts = vm.$options

    if(opts.props) {
        initProps(vm)
    }

    if(opts.methods) {
        initMethod(vm)
    }

    if(opts.data) {
        initData(vm)
    }

    if(opts.computed) {
        initComputed(vm)
    }

    if(opts.watch) {
        initWatch(vm)
    }
}

//初始化Data数据
function initData (vm) {
    let data = vm.$options.data

    //vm实例_data就是传入的data
    //vm组件data最好使用函数，防止数据在组件之间因共享导致数据被修改
    //这里的使用data.call(vm)是为了能将return返回的对象赋值给data
    data = vm._data = typeof data === 'function' ? data.call(vm) : data||{}

    for(let key of data) {
        //启用数据代理
        proxy(vm,`_data`,key)
    }

    //观测数据，响应式核心原理
    observe(data)
}

//数据代理
function proxy(object,souceKey,key) {
    object.defineProperty(object,key, {
        get() {
            return object[souceKey][key]
        },
        set(newValue) {
            object[souceKey][key] = newValue
        }
    })
}