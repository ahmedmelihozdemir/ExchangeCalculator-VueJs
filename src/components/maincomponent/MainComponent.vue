<template>
    <div class="container">
        <div class="row">
            <h1>Exchange Calculator</h1>
            <div class="calculator row">
                <div class="calculator-el col-md-2">
                    <label for="amount">
                        Amount Bucks
                        <div class="form-floating mb-3">
                            <input
                                type="number"
                                class="form-control"
                                v-model="amount"
                                id="amount"
                                placeholder="$"
                                @click="selectAll"
                            />
                        </div>
                    </label>
                </div>
                <div class="calculator-el col-md-2">
                    <label for="from">
                        From
                        <div class="form-floating">
                            <select class="form-select" v-model="fromValue">
                                <option
                                    v-for="(rate, name, idx) in rates"
                                    :key="idx"
                                    :selected="name == 'EUR'"
                                    :value="rate"
                                >
                                    {{ name }}
                                </option>
                            </select>
                        </div>
                    </label>
                </div>
                <div class="calculator-el col-md-2">
                    <button class="btn btn-turn material-icons" @click="turn">
                        currency_exchange
                    </button>
                </div>
                <div class="calculator-el col-md-2">
                    <label for="to">
                        To
                        <div class="form-floating">
                            <select class="form-select" v-model="toValue">
                                <option
                                    v-for="(rate, name, idx) in rates"
                                    :key="idx"
                                    :selected="name === 'USD'"
                                    :value="rate"
                                >
                                    {{ name }}
                                </option>
                            </select>
                        </div>
                    </label>
                </div>
                <div class="calculator-el col-md-2">
                    <label for="amount">
                        Turned
                        <div class="form-floating mb-3">
                            <input
                                disabled
                                class="form-control"
                                v-model="turned"
                            />
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <h4>{{ date }}</h4>
        <div class="row mt-n4">
            <button class="btn btn-switch col-md-4 m-auto" @click="switchValue">
                Switch
            </button>
        </div>
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

const rates = computed(() => {
    return store.state.exchangeRates.exchangeRates;
});
const date = computed(() => {
    return store.state.exchangeRates.date;
});

/* const currencies = ref([
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
]); */

const amount = ref(1);
const turned = ref(null);
const constantValue = ref(null);
const fromValue = ref(null);
const toValue = ref(null);

const turn = computed(() => {
    return () => {
        constantValue.value = toValue.value / fromValue.value;
        turned.value = amount.value * constantValue.value;
        turned.value = turned.value.toFixed(2);
    };
});

const switchValue = computed(() => {
    return () => {
        const temp = fromValue.value;
        fromValue.value = toValue.value;
        toValue.value = temp;
    };
});

const selectAll = computed(() => {
    return () => {
        const input = document.getElementById("amount");
        input.select();
    };
});


</script>

<style lang="scss" scoped>
@import "./MainComponent.scss";
</style>
