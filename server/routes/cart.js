const router = require('koa-router')()

router.prefix('/cart')
router.get('/cartlist', async (ctx, next) => {
    console.log(ctx.request.query)
    const cartData = [
        {
            name: '林肯领航员NAVIGATOR',
            url: 'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/navigator2020.jpg'
        },
         {
            name: '林肯飞行家插电式混动版',
            url: '	https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/phev.jpg'
        },
        {
            name: '新款林肯飞行家AVIATOR',
            url: 'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/2021aviator.jpg'
        },
        {
            name: '林肯领航员NAVIGATOR',
            url: 'https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/navigator2020.jpg'
        },
         {
            name: '林肯飞行家插电式混动版',
            url: '	https://www.lincoln.com.cn/content/dam/lincoln/cn/l_cn_zh/nameplate/thumbnail/phev.jpg'
        }
    ]
    ctx.body = {
        code: 200,
        data: cartData
    }
})

module.exports = router