import { IExchange } from "@/models/Exchange.interface";
import { HttpClient, HttpRequestParamsInterface } from "@/models/http-client/index";

export class ExchangeService{
  getExchange(){
    const exchangeRequest: HttpRequestParamsInterface = {
      url: 'https://api.exchangerate.host/latest'
    };
    return HttpClient.get<IExchange>(exchangeRequest);
  }
}
