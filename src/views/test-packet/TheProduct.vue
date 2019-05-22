<template>
    <div class="the-product">
        <div class="row align-justify">
            <div class="columns small-12 large-6">

            </div>
            <div class="columns small-12 large-5">
                <base-button-group :buttons="buttons"/>
            </div>

        </div>
    </div>
</template>

<script>
import BaseButtonGroup from '@/components/BaseButtonGroup';

export default {
    // START CONFIGURATION
    components: {
        BaseButtonGroup
    },
    // END CONFIGURATION

    // START DATA
    data() {
        return {
            buttons: [
                { l1: '1', l2: '(2-3 KG)' },
                { l1: '2', l2: '(3-4 KG)' },
                { l1: '3', l2: '(4-7 KG)' },
                { l1: '4', l2: '(7-10 KG)' },
                { l1: '5', l2: '(10-12 KG)' }
            ]
        };
    }
    // END DATA
};
</script>
