import axios from "axios";

export default {
    state: {
        exchangeRates: [],
    },
    getters: {
        getExchangeRates: (state: any) => state.exchangeRates,
    },
    mutations: {
        setExchangeRates: (state: any, payload: any) => (state.exchangeRates = payload),
    },
    actions: {
        exchangeApi({commit}: any) {
            axios
                .get("https://api.exchangerate.host/latest")
                .then((response) => response.data)
                .then((data) => {
                    console.log(data);
                    commit("setExchangeRates", data.rates);
                })
                .catch((error) => console.log(error));
        },
    },
};
