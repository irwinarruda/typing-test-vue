<template>
    <c-box
        position="relative"
        width="100%"
        height="100%"
        minHeight="100vh"
        bgColor="black"
    >
        <c-box
            position="absolute"
            bottom="50%"
            right="50%"
            transform="translate(50%, 50%)"
        >
            <c-heading color="white" textAlign="center">
                Teste de Digitação
            </c-heading>
            <card-tabs>
                <card-tab title="Space Reset" icon="space.svg">
                    <space-reset-tab />
                </card-tab>
                <card-tab title="Real Reset" icon="enter.svg">
                    <c-box>Olá Mundão</c-box>
                </card-tab>
            </card-tabs>
        </c-box>
        <typing-test-stats-modal />
    </c-box>
</template>
<script lang="ts">
import Vue from 'vue';
import { CBox, CHeading } from '@chakra-ui/vue';

import CardTabs from '@/components/organisms/CardTabs.vue';
import CardTab from '@/components/organisms/CardTab.vue';
import SpaceResetTab from '@/components/organisms/SpaceResetTab.vue';
import TypingTestStatsModal from '@/components/organisms/TypingTestStatsModal.vue';

export default Vue.extend({
    components: {
        CBox,
        CHeading,
        CardTabs,
        CardTab,
        SpaceResetTab,
        TypingTestStatsModal,
    },
});
</script>
