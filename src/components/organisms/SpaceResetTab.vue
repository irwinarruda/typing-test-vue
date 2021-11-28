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
                    <option value="10s">10 seconds</option>
                    <option value="30s">30 seconds</option>
                    <option value="60s">60 seconds</option>
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
            padding="4"
            border="1px solid"
            borderColor="gray.500"
            borderRadius="7px"
            backgroundColor="gray.50"
        >
            <c-text as="span"></c-text>
        </c-box>
        <c-flex marginTop="6">
            <c-button
                v-bind:rightIcon="timerIconVisibility"
                width="7rem"
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
                v-model="input"
            />
            <c-icon-button
                icon="add"
                aria-label="Restart Timer"
                marginLeft="5"
                color="white"
                backgroundColor="blue.500"
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

export default Vue.extend({
    data: function () {
        return {
            options: {
                duration: '60s',
                textStyle: 'common',
            },
            input: '',
            timer: 999,
            timerIsVisible: true,
        };
    },
    methods: {
        toggleTimerVisibility: function () {
            this.timerIsVisible = !this.timerIsVisible;
        },
    },
    computed: {
        timerIconVisibility: function (): string {
            return this.timerIsVisible ? 'triangle-down' : 'triangle-up';
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
