function m3(ctx) {
    console.log('m3')
}

module.exports = function () {
    return async function(ctx,next) {
        console.log('m3 start')
        m3(ctx)
        await next()
        console.log('m3 end')
    }
}
