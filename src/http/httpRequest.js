
export class HttpRequest {
  constructor(service){
    this.service = service;
  }
  async get(url,callback){
    const response = await this.service.get(url)
    callback(response)
  }
  async patch(id,data){
    this.service.patch(`/${id}`,data)
  }
  
}