<template>
    <div class="container">
        <div class="row">
            <h1>Exchange Calculator</h1>
            <div class="calculator row">
                <div class="calculator-el col-md-2">
                    <label for="amount">
                        Amount
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                id="floatingInput"
                                placeholder="$"
                            />
                        </div>
                    </label>
                </div>
                <div class="calculator-el col-md-2">
                    <label for="from">
                        From
                        <div class="form-floating">
                            <select
                                class="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                            >
                                <option
                                    value="1"
                                    v-for="currency in currencies"
                                    :key="currency.name"
                                >
                                    {{ currency.name }}
                                </option>
                            </select>
                        </div>
                    </label>
                </div>
                <div class="calculator-el col-md-2">
                    <button class="btn btn-turn material-icons">
                        currency_exchange
                    </button>
                </div>
                <div class="calculator-el col-md-2">
                    <label for="to">
                        To
                        <div class="form-floating">
                            <select
                                class="form-select"
                                id="floatingSelect"
                                aria-label="Floating label select example"
                            >
                                <option
                                    value="1"
                                    v-for="currency in currencies"
                                    :key="currency.name"
                                >
                                    {{ currency.name }}
                                </option>
                            </select>
                        </div>
                    </label>
                </div>
                <div class="calculator-el col-md-2">
                    <label for="amount">
                        Finished
                        <div class="form-floating mb-3">
                            <input
                                type=""
                                class="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                            />
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div>{{}}</div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

onMounted(() => {
    store.dispatch("exchangeApi");
});

const exchange = computed(() => {
    return store.state.exchangeRates;
});

const currencies = ref([
    { name: "TRY", value: "TRY" },
    { name: "USD", value: "USD" },
    { name: "EUR", value: "EUR" },
    { name: "GBP", value: "GBP" },
    { name: "RUB", value: "RUB" },
    { name: "JPY", value: "JPY" },
    { name: "CAD", value: "CAD" },
    { name: "AUD", value: "AUD" },
    { name: "CHF", value: "CHF" },
    { name: "CNY", value: "CNY" },
    { name: "SEK", value: "SEK" },
    { name: "NZD", value: "NZD" },
    { name: "MXN", value: "MXN" },
    { name: "BRL", value: "BRL" },
    { name: "INR", value: "INR" },
]);
</script>

<style lang="scss" scoped>
@import "@/styles/MainComponent.scss";
</style>
