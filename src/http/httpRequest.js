
export class HttpRequest {
  constructor(service){
    this.service = service;
  }
   get(url){
    return this.service.get(url).catch((error)=>{console.log("error: ",error)})
  }
   patch(id,data){
    return  this.service.patch(`/${id}`,data)
  }
  
}

