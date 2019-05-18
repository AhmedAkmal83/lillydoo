<template>
    <div>
        <the-navigation />
        <main>
            <slot></slot>
        </main>
        <the-footer />
    </div>
</template>

<script>
import TheNavigation from '@/components/layout/TheNavigation';
import TheFooter from '@/components/layout/TheFooter';

export default {
    components: {
        TheNavigation,
        TheFooter
    }
};
</script>
