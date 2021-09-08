type historyStateProps = { (data: any, unused: string, url?: string | URL | null | undefined): void; (data: any, unused: string, url?: string | URL | null | undefined): void; apply?: any }

const state = (microFn: historyStateProps, name: string) => {
    return function(){
        const e = new Event(name)
        // 普通函数this指向调用者，这里指window.history
        microFn.apply(this, arguments)
        console.log('this', this)
        console.log('arguments', arguments)
        window.dispatchEvent(e)
    }
}

const returnFn = () => {
    console.log('调用了')
}

/**
 * @description 路由拦截
 */
export const intercept = () => {
    console.log('window.history.pushState', window.history)
    window.history.pushState = state(window.history.pushState, 'micro_push_state')
    window.history.replaceState = state(window.history.replaceState, 'micro_replace_state')

    window.addEventListener('micro_push_state', returnFn)

    window.addEventListener('micro_replace_state', returnFn)

    // 监听返回
    window.onpopstate = () => {
        returnFn()
    }
}