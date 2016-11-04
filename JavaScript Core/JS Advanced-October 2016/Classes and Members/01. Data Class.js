class Request{
    constructor(method = undefined, uri = undefined, version = undefined, message = undefined, response = undefined, fulfilled = false){
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
}

console.log(new Request('GET', 'http://google.com', 'HTTP/1.1', ''));