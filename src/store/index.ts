import { createStore } from "vuex";
import exchangeRates from "./modules/exchangeRates";
export default createStore({
    modules: {
        exchangeRates,
    },
});
