import { fetchConfig,fetchConfigMethod } from './interface';
let config:fetchConfig={
    url:"",
    data:{},
    header:{
        "content-type":"application/json"
    },
    method:"POST",
    timeout:60000,
    dataType:"json",
    responseType:"text",
    sslVerify:true,
    withCredentials:false,
    firstIpv4:false
}
function request(cog:fetchConfig = config,complete?:Function,beforeRequest?:Function,afterRequest?:Function){
    let newConfig = {...config,...cog}
    return new Promise(async (resolve,reject)=>{
        if(typeof beforeRequest === 'function'){
            let opts = await beforeRequest(newConfig);
            if(typeof opts !=='object'){
                opts = {};
            }
            newConfig = {...newConfig,...opts};
        }
        uni.request({
            url:newConfig.url||"",
            data:newConfig.data,
            header:newConfig.header,
            method:newConfig.method,
            timeout:newConfig.timeout,
            dataType:newConfig.dataType,
            responseType:newConfig.responseType,
            sslVerify:newConfig.sslVerify,
            withCredentials:newConfig.withCredentials,
            firstIpv4:newConfig.firstIpv4,
            async success(result) {
                if(typeof afterRequest === 'function'){
                    let opts = await afterRequest(result);
                    if(typeof opts !=='object'){
                        opts = result;
                    }
                    result = {...result,...opts};
                }
                resolve(result)
            },
            fail(result) {
                reject(result)
            },
            complete(result) {
                if(typeof complete === "function"){
                    complete(result)
                }
            },
        })
    })
}
export class fetchNet {
    beforeRequest:Function = (val:fetchConfig)=>val;
    afterRequest:Function = (val:fetchConfig)=>val;
    
    /**
     * 构建新的请求
     * @param cog 请示配置见：fetchConfig
     * @param beforeRequest 访问前执行的函数，可以是Promise,你可以对执行前的参数进行修改之类的，将以你最新的修改参数为准进行请求。
     * @param afterRequest 访问后执行的函数，可以是Promise,提供请示后的数据，你可以在这里修改，返回，这样所有请求的数据返回后都为返回你修改后的数据。
     */
    constructor(cog:fetchConfig,beforeRequest?:Function,afterRequest?:Function){
        config = {...config,...(cog||{})};
        if(typeof beforeRequest == 'function'){
            this.beforeRequest = beforeRequest;
        }
        if(typeof afterRequest == 'function'){
            this.afterRequest = afterRequest;
        }
    }
    static get(url:string,data:object={},method:fetchConfigMethod ="GET",opts:fetchConfig={}){
        let cfg:fetchConfig =  {...config,...(opts||{}),url:url,method:method,data:data};
        return request(cfg)
    }
    static post(url:string,data:object={},method:fetchConfigMethod ="POST",opts:fetchConfig={}){
        let cfg:fetchConfig =  {...config,...(opts||{}),url:url,method:method,data:data};
        return request(cfg)
    }
    /**
     * 请求
     * @param cog 配置
     * @param complete 访问结束后执行的函数
     */
     request(cog:fetchConfig = config,complete?:Function){
        let newConfig = {...config,...cog}
        return request(newConfig,complete,this.beforeRequest,this.afterRequest);
    }
}
