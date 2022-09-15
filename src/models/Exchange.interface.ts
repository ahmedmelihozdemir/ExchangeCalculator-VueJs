export interface IExchange{
    base: string;
    date: string;
    rates: {
        [key: string]: number;
    };
    
}