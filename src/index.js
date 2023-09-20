import {initMixin} from "./init"
//vue是一个构造函数,传入options

function Vue (options) {
    //_init方法是挂载在vue原型上方法
    this._init(options)
}
//通过引入文件的方式进行原型挂载需要传入Vue
initMixin(Vue)

export default Vue