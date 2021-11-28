import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export type TypingTestOverviewType = {
    wpm?: number;
    correctWords?: number;
    wrongWords?: number;
    accuracy?: number;
};

export type GlobalStateType = {
    typingTestOverview?: TypingTestOverviewType;
    statsModalIsOpen: boolean;
};

export const globalStore = new Vuex.Store<GlobalStateType>({
    state: function () {
        return {
            typingTestOverview: {
                wpm: 0,
                correctWords: 0,
                wrongWords: 0,
                accuracy: 0,
            },
            statsModalIsOpen: false,
        };
    },
    mutations: {
        changeTypingTestOverview: function (
            state,
            data: TypingTestOverviewType,
        ) {
            state.typingTestOverview = { ...state.typingTestOverview, ...data };
        },
        emptyTypingTestOverview: function (state) {
            state.typingTestOverview = {};
        },
        changeStatsModalIsOpen: function (state, bool: boolean) {
            state.statsModalIsOpen = !!bool;
        },
    },
    actions: {
        setTypingTestOverview: function (
            context,
            data: TypingTestOverviewType,
        ) {
            context.commit('changeTypingTestOverview', data);
        },
        resetTypingTestOverview: function (context) {
            context.commit('emptyTypingTestOverview');
        },
        statsModalOnOpen: function (context) {
            context.commit('changeStatsModalIsOpen', true);
        },
        statsModalOnClose: function (context) {
            context.commit('changeStatsModalIsOpen', false);
        },
    },
});
