<script lang="ts">
import Vue, { VNode } from 'vue';
import { observer } from 'mobx-vue';
import {
    CBox,
    CTabs,
    CTabList,
    CTabPanels,
    CTabPanel,
    CTab,
    CImage,
} from '@chakra-ui/vue';

import { CardTabsStore } from '@/stores/CardTabsStore';

type CardTabsData = { tabsStore: CardTabsStore };

export default observer(
    Vue.extend({
        props: {
            defaultStep: {
                type: Number,
                default: 0,
            },
        },
        data: function (): CardTabsData {
            return {
                tabsStore: new CardTabsStore(this.defaultStep),
            };
        },
        methods: {
            onTabChange: function (step: number): void {
                this.tabsStore.goToStep(step);
            },
        },
        provide: function (): CardTabsData {
            return {
                tabsStore: this.tabsStore,
            };
        },
        render: function (create): VNode {
            const tabsProps = this.$slots.default?.map((slot) => {
                return {
                    title: (slot.componentOptions?.propsData as any).title,
                    icon: (slot.componentOptions?.propsData as any).icon,
                };
            });

            const tabList = create(
                'CTabList',
                {},
                tabsProps?.map((tab) =>
                    create('CTab', {}, [
                        `${tab.title}`,
                        create('CImage', {
                            attrs: {
                                src: require(`@/assets/icons/${tab.icon}`),
                                width: '11',
                                marginLeft: '5',
                            },
                        }),
                    ]),
                ),
            );
            const tabPanels = create(
                'CTabPanels',
                {},
                this.$slots.default?.map((slot) =>
                    create('CTabPanel', {}, [slot]),
                ),
            );

            const tabs = create(
                'CTabs',
                {
                    attrs: {
                        'is-fitted': true,
                        defaultIndex: this.defaultStep,
                    },
                    on: {
                        change: this.onTabChange,
                    },
                },
                [tabList, tabPanels],
            );

            const container = create(
                'CBox',
                {
                    attrs: {
                        overflow: 'hidden',
                        width: '100%',
                        minWidth: '48.125rem',
                        height: '100%',
                        marginTop: '6',
                        borderRadius: 'lg',
                        bgColor: 'white',
                        boxShadow: '0px 0px 7px 0px rgba(255, 255, 255, 0.25)',
                    },
                },
                [tabs],
            );

            return container;
        },
        components: {
            CBox,
            CTabs,
            CTabList,
            CTabPanels,
            CTabPanel,
            CTab,
            CImage,
        },
    }),
);
</script>
