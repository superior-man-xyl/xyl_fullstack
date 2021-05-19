UDP和TCP的区别是多少？

# TCP协议

头部：请求头上的信息有二十多个
    Sequence number（序列号）: 该序号保证TCP传输的报文都是有序的，接收端就可以通过顺序拼接报文
    Acknowledgement Number（确认序号）：表示接收端期望接受的下一个字节的编码，同时也表示上一个序号的数据已经接受到了
    Window Size：发送数据的窗口大小，表示还能接受多少字节的数据，用于流量控制

# 三次握手
1. 客户端向服务端发送请求报文， 客户端会进入SYN-SENT状态
2. 服务端接收到这个请求后，如果同意，则发送一个应答 应答发送完成之后，便进入SYN-RECEIVED状态
3. 客户端接收到同意的应答后再向服务端发一个确认报文，客户端进入ESTABLISHED状态，服务端也进入ESTABLISHED状态，此时链接建立成功

# 为什么TCP建立链接需要三次握手，明明两次就可以建立链接
两次：当客户端发送一个连接请求A，因为网络原因A请求超时，TCP有超时重传机制，TCP就会启动超时重传机制，重新发送连接请求B，服务端接收到B后进行应答，之后数据传递完成释放连接。
假设此时A在两端关闭后又达到了服务端，那么此时服务端又会以为客户端又需要连接，于是去响应进入ESTABLISHED状态，但是客户端已经CLOSE状态，服务器端就会一直等，造成浪费。

# 四次挥手
1. 客户端认为数据发送完成，向服务端发送释放连接的请求
2. 服务端接收到释放连接的请求后，告诉应用层该释放TCP连接，然后向客户端发送ACK包并进入CLOSE_AWAIT状态。表示不再接受客户端的数据了，但是因为TCP是双向连接，服务器端还能向客户端发送数据
3. 服务端此时如果还有没发完的数据，就会继续发送，完毕后就会向客户端发送连接释放请求，自己进入LAST-ACK状态
4. 客户端接收到服务器端的释放请求，向服务端确认应答，自己进入TIME-WAIT状态，如果服务端2ms没有重新发送请求(数据包大概存活2ms，没有到达是要重传的)，客户端就进入CLOSED状态，服务器端在接收到这个应答后也进入CLOSED状态

# 为什么客户端要进入TIME-WAIT状态，等待2ms后才进入CLOSED状态
为了保证服务端能够接收到客户端的接收应答，如果客户端确认应答后能够直接进入COLOSED状态，万一网络问题导致应答没有被服务器接收到（2ms没有到达是要重传的），那么就会造成服务端无法关闭。
