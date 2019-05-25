<template>
    <div class="row align-left align-stretch mx-0 mb-4">
        <div v-for="product in products" :key="product.id" class="columns small-4 large-expand p-1">
            <a class="button mb-0 expanded h-100" :class="activeId === product.id ? 'active' : 'hollow color-dark-gray'" @click.prevent="activeId !== product.id ? $emit('clicked', product.id) : null">
                <p>{{ product.button.l1 }}</p>
                <span>{{ product.button.l2 }}</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    // START CONFIGURATION
    props: {
        products: {
            type: Array,
            required: true
        },
        activeId: {
            type: Number,
            required: true
        }
    }
    // END CONFIGURATION
};
</script>

<style lang="scss" scoped>
a.button {
    padding: 7px 5px 2px 5px;
    margin-right: 10px;
    border: 1px solid $dark-gray;
    & span {
        font-family: 'Museo-300';
        font-size: 0.8rem;
        line-height: 1.4;
        color: $dark-gray;
    }
    & p {
        font-family: 'Museo-300';
        font-size: 1.3rem;
        line-height: 1.4;
        color: $dark-gray;
        margin-bottom: 0.2rem;
    }
    &.active {
        border: 1px solid get-color(primary);
        & span, p {
            color: $white;
        }
    }
}
</style>
