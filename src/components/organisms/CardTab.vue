<template>
    <c-box width="100%" padding="4">
        <slot></slot>
    </c-box>
</template>

<script lang="ts">
import Vue from 'vue';
import { CBox } from '@chakra-ui/vue';

export default Vue.extend({
    props: {
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
    },
    components: {
        CBox,
    },
});
</script>
