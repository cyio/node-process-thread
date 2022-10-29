const { workerData, parentPort } = require('worker_threads')
const { num } = workerData

const start = Date.now()
// 斐波那契数列
const fibo = (n) => {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1
}
const ans = fibo(num)

parentPort.postMessage({
    pid: process.pid,
    ans: ans,
    duration: Date.now() - start
})
