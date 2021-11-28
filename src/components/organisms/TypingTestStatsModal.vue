<template>
    <c-box>
        <c-modal :is-open="isOpen" :on-close="onClose" size="sm">
            <c-modal-content ref="content" borderRadius="lg">
                <c-modal-header fontSize="3xl">Run Overview</c-modal-header>
                <c-modal-close-button />
                <c-modal-body>
                    <c-text fontSize="lg">
                        Words Per Minute:
                        <c-text as="span" fontWeight="semibold">
                            {{ typingTestOverview.wpm }}
                        </c-text>
                    </c-text>
                    <c-text fontSize="lg">
                        Accuracy:
                        <c-text as="span" fontWeight="semibold">
                            {{ typingTestOverview.accuracy * 100 }}%
                        </c-text>
                    </c-text>
                    <c-text fontSize="lg">
                        Correct Words:
                        <c-text as="span" fontWeight="semibold">
                            {{ typingTestOverview.correctWords }}
                        </c-text>
                    </c-text>
                    <c-text fontSize="lg">
                        Wrong Words:
                        <c-text as="span" fontWeight="semibold">
                            {{ typingTestOverview.wrongWords }}
                        </c-text>
                    </c-text>
                </c-modal-body>
                <c-modal-footer>
                    <c-button variant-color="blue" @click="onClose">
                        Close
                    </c-button>
                </c-modal-footer>
            </c-modal-content>
            <c-modal-overlay />
        </c-modal>
    </c-box>
</template>
<script lang="ts">
import Vue from 'vue';
import {
    CBox,
    CText,
    CModal,
    CModalOverlay,
    CModalContent,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
} from '@chakra-ui/vue';
import { TypingTestOverviewType } from '@/stores/GlobalStore';

export default Vue.extend({
    methods: {
        onClose: function (): void {
            this.$store.dispatch('statsModalOnClose');
        },
    },
    computed: {
        typingTestOverview: function (): TypingTestOverviewType {
            console.log(this.$store.state.typingTestOverview);
            return this.$store.state.typingTestOverview;
        },
        isOpen: function (): boolean {
            return this.$store.state.statsModalIsOpen;
        },
    },
    components: {
        CBox,
        CText,
        CModal,
        CModalOverlay,
        CModalContent,
        CModalHeader,
        CModalFooter,
        CModalBody,
        CModalCloseButton,
    },
});
</script>
