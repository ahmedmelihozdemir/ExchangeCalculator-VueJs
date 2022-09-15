<template>
    <div class="container">
        <div class="con-row row">
            <div class="calculator col-sm-3">
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
                            @keyup.enter="turn"
                        />
                    </div>
                </label>
            </div>
            <div class="calculator col-sm-3">
                <div class="date">{{ date }}</div>
            </div>
            <div class="calculator col-sm-3">
                <label for="amount">
                    Turned
                    <div class="form-floating mb-3">
                        <input disabled class="form-control" v-model="turned" />
                    </div>
                </label>
            </div>
        </div>

        <div class="row cal-row">
            <div class="calculator-el col-sm-3">
                <label for="from">
                    From
                    <div class="form-floating">
                        <select class="form-select" v-model="fromValue">
                            <option
                                v-for="(rat, name, idx) in rate"
                                :key="idx"
                                :selected="name == 'EUR'"
                                :value="rat"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </label>
            </div>
            <div class="calculator-el col-sm-3">
                <button class="btn btn-turn material-icons" @click="turn">
                    currency_exchange
                </button>
            </div>
            <div class="calculator-el col-sm-3">
                <button
                    class="btn btn-switch material-icons"
                    @click="switchValue"
                >
                    swap_horiz
                </button>
            </div>
            <div class="calculator-el col-sm-3">
                <label for="to">
                    To
                    <div class="form-floating">
                        <select class="form-select" v-model="toValue">
                            <option
                                v-for="(rat, name, idx) in rate"
                                :key="idx"
                                :selected="name === 'USD'"
                                :value="rat"
                            >
                                {{ name }}
                            </option>
                        </select>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ExchangeService } from "@/services/ExchangeService";
import { IExchange } from "@/interfaces/IExchange";

@Component
export default class MainComponent extends Vue {
    amount = null;
    turned = null;
    constanValue = null;
    fromValue = null;
    toValue = null;
    date = null;

    private exchangeService = new ExchangeService();
    rate = [] as IExchange[];
    detailRate = {} as IExchange;

    getExchangeRate() {
        this.exchangeService.getExchange().then((response) => {
            this.rate = response.rates;
            this.date = response.date;
            this.detailRate = response;
            console.log(this.detailRate);
        });
    }

    turn() {
        this.constanValue = this.toValue / this.fromValue;
        this.turned = this.amount * this.constanValue;
        this.turned = this.turned.toFixed(5);
    }

    mounted() {
        this.getExchangeRate();
    }
    selectAll() {
        const input = document.getElementById("amount");
        input.select();
    }
    switchValue() {
        const temp = this.fromValue;
        this.fromValue = this.toValue;
        this.toValue = temp;
        this.turn();
    }
}
</script>

<style lang="scss" scoped>
@import "./MainComponent.scss"; 

</style>
