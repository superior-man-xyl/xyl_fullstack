// 封装一个异步加载图片的方法
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image)
        };
        image.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };
        image.src = url;
    });
}