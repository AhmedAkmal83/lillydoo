<template>
    <div class="the-header">
        <section class="testpacket-header" data-interchange="[assets/img/lillydoo-testpaket-header-small.jpg, small], [assets/img/lillydoo-testpaket-header-medium.jpg, medium], [assets/img/lillydoo-testpaket-header-large.jpg, large]">
            <img src="@/assets/img/certificates/oekotex/oekotex_de.png" alt="Oeko-Tex Certificate" class="oekotex-certificate shadow">
            <div class="row" :class="viewportIsLarge ? 'h-100' : 'h-60'">
                <div class="columns large-6 flex-container flex-dir-column align-center-middle">
                    <h1 class="text-center">Entdecke unsere Hautfreundlichkeit</h1>
                    <a href="#" class="button w-80 mt-3">JETZT DEINE GRÖßE WÄHLEN</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    // START CONFIGURATION
    props: ['viewportIsLarge']
    // END CONFIGURATION
};
</script>
