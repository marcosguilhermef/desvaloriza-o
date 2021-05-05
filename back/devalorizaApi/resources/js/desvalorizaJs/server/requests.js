class RequestJs{
    //static returnedServer = []
    constructor(url, method, data){
        this.url    = url
        this.method = method | 'GET'
        this.data   = data | []
    }
    async find(){
       const busca = await fetch(this.url)
       return busca
    }
}