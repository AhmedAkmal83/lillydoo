<template>
    <div class="the-header">
        <section class="testpacket-header" data-interchange="[assets/img/lillydoo-testpaket-header-small.jpg, small], [assets/img/lillydoo-testpaket-header-medium.jpg, medium], [assets/img/lillydoo-testpaket-header-large.jpg, large]">

            <img src="@/assets/img/certificates/oekotex/oekotex_de.png" alt="Oeko-Tex Certificate" class="oekotex-certificate shadow">

            <div class="row" :class="viewportIsLarge ? 'h-100' : 'h-60'">
                <div class="columns large-6 flex-container flex-dir-column align-center-middle">
                    <h1 class="text-center">Entdecke unsere Hautfreundlichkeit</h1>
                    <a href="#" class="button large w-80 mt-3">JETZT DEINE GRÖßE WÄHLEN</a>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    // START CONFIGURATION
    props: {
        viewportIsLarge: {
            type: Boolean,
            required: true
        }
    }
    // END CONFIGURATION
};
</script>

<style lang="scss" scoped>
section.testpacket-header {
    background: #e2e2e0 no-repeat center / cover;
    height: 100vh;
    min-height: 320px;
    max-height: 550px;
    position: relative;
    & .oekotex-certificate {
        position: absolute;
        top: 56%;
        right: 3%;
        width: 27%;
    }
}

@media only screen and #{breakpoint(medium up)} {
    section.testpacket-header .oekotex-certificate {
        top: 46%;
        right: 7%;
        width: 21%;
    }
}

@media only screen and #{breakpoint(large up)} {
    section.testpacket-header {
        height: 37vw;
        & .oekotex-certificate {
            top: 14%;
            right: 3%;
            width: 12%;
        }
    }
}
</style>
