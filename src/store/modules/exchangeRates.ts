import axios from "axios";


export default {
    state: {
        exchangeRates: [],
        date: null,
    },
    getters: {
        getExchangeRates: (state: any) => state.exchangeRates,
        getDate: (state: any) => state.date,
    },
    mutations: {
        setExchangeRates: (state: any, payload: any) => (state.exchangeRates = payload),
        setDate: (state:any, payload:any)=>{
            state.date = payload;
        },
    },
    actions: {
        exchangeApi({commit}: any) {
            axios
                .get("https://api.exchangerate.host/latest")
                .then((response) => response.data)
                .then((data) => {
                    console.log(data);
                    commit("setExchangeRates", data.rates);
                    commit("setDate", data.date);
                })
                .catch((error) => console.log(error));
        },
    },
};
