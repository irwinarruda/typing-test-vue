<template>
    <c-box marginBottom="5">
        <c-flex
            alignItems="center"
            justifyContent="space-between"
            width="70%"
            margin="0 auto"
        >
            <c-box flex="1">
                <c-text as="span" display="block" fontSize="md">
                    Duration
                </c-text>
                <c-select
                    size="sm"
                    width="100%"
                    borderColor="gray.400"
                    borderRadius="7px"
                    :_hover="{ borderColor: 'gray.500' }"
                    v-model="options.duration"
                >
                    <option value="10">10 seconds</option>
                    <option value="30">30 seconds</option>
                    <option value="60">60 seconds</option>
                </c-select>
            </c-box>
            <c-box flex="1" marginLeft="8">
                <c-text as="span" display="block" fontSize="md">
                    Text Style
                </c-text>
                <c-select
                    size="sm"
                    width="100%"
                    borderColor="gray.400"
                    borderRadius="7px"
                    :_hover="{ borderColor: 'gray.500' }"
                    v-model="options.textStyle"
                >
                    <option value="common">Most common wordss</option>
                </c-select>
            </c-box>
        </c-flex>
        <c-box
            width="100%"
            height="32"
            marginTop="10"
            padding="2"
            border="1px solid"
            borderColor="gray.500"
            borderRadius="7px"
            backgroundColor="gray.50"
            overflow="hidden"
        >
            <c-text as="span">{{ wordsText }}</c-text>
        </c-box>
        <c-text
            >Acertos {{ successes }}, Erros: {{ mistakes }}, tempo:
            {{ this.timer }}</c-text
        >
        <c-flex marginTop="6">
            <c-button
                v-bind:rightIcon="timerIconVisibility"
                width="8rem"
                fontFamily="heading"
                fontWeight="semibold"
                fontSize="lg"
                backgroundColor="white"
                border="1px solid"
                borderColor="gray.500"
                borderRadius="7px"
                v-on:click="toggleTimerVisibility"
            >
                {{ timerIsVisible ? timer : '---' }}s
            </c-button>
            <c-input
                marginLeft="5"
                fontSize="lg"
                borderColor="gray.400"
                borderRadius="7px"
                :_hover="{ borderColor: 'gray.500' }"
                v-on:input="this.onInputChange"
                v-bind:value="this.input"
            />
            <c-icon-button
                icon="add"
                aria-label="Restart Timer"
                marginLeft="5"
                color="white"
                backgroundColor="blue.500"
                :disabled="testIsOn"
                :_hover="{ backgroundColor: 'blue.600' }"
                :_active="{ backgroundColor: 'blue.600' }"
            />
        </c-flex>
    </c-box>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    CBox,
    CFlex,
    CText,
    CSelect,
    CInput,
    CButton,
    CIconButton,
} from '@chakra-ui/vue';
import { words } from '@/helpers/words';

export default Vue.extend({
    data: function () {
        return {
            options: {
                duration: '60',
                textStyle: 'common',
            },
            input: '',
            timer: 60,
            timerIsVisible: true,
            testIsOn: false,
            words: words,
            wordsTyped: -1,
            successes: 0,
            mistakes: 0,
            timeInterval: -1,
        };
    },
    methods: {
        toggleTimerVisibility: function () {
            this.timerIsVisible = !this.timerIsVisible;
        },
        resetValues: function () {
            this.timer = Number(this.options.duration);
            this.wordsTyped = -1;
            this.successes = 0;
            this.mistakes = 0;
            this.timeInterval = -1;
        },
        startTyping: function () {
            this.resetValues();
            this.testIsOn = true;
            this.timeInterval = setInterval(() => {
                this.timer = Math.round((this.timer - 0.01) * 1000) / 1000;
                if (this.timer <= 0) {
                    clearInterval(this.timeInterval);
                    this.timer = Number(this.options.duration);
                    this.testIsOn = false;
                }
            }, 10);
        },
        handleSpacePress: function () {
            if (this.wordsTyped === -1) {
                this.testIsOn = true;
            }
            this.wordsTyped++;
            if (this.input === this.words[this.wordsTyped]) {
                this.successes++;
            } else {
                this.mistakes++;
            }
            this.input = '';
        },
        onInputChange: function (value: string) {
            if (!this.testIsOn && value.length > 0) {
                this.startTyping();
            }
            if (value[value.length - 1] === ' ') {
                this.handleSpacePress();
            } else {
                this.input = value;
            }
        },
    },
    computed: {
        timerIconVisibility: function (): string {
            return this.timerIsVisible ? 'triangle-down' : 'triangle-up';
        },
        wordsText: function (): string {
            return this.words
                .filter((_, index) => index > this.wordsTyped)
                .join(' ');
        },
    },
    components: {
        CBox,
        CFlex,
        CText,
        CSelect,
        CInput,
        CButton,
        CIconButton,
    },
});
</script>
