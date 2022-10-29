worker-threads 做相同计算任务且同时计算，整体返回时间延长？都是 4s+

![image.png](http://ww1.sinaimg.cn/large/4e5d3ea7ly1h7lycq705ij20bp0ebjuw.jpg)

计算不同任务，快的先返回，最慢 1.2s

![image.png](http://ww1.sinaimg.cn/large/4e5d3ea7ly1h7lyyo3zmyj20dt0e70wm.jpg)

cluster 创建 4 个进程，表现出分批处理，存在排队

![image.png](http://ww1.sinaimg.cn/large/4e5d3ea7ly1h7lybyad6yj20c00e8gow.jpg)
