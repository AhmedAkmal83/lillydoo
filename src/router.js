import Vue from 'vue';
import Router from 'vue-router';
import TestPacket from './views/TestPacket.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'test-packet',
            meta: { layout: 'content-minimal' },
            component: TestPacket,
            props: {
                // Simulating data received from backend when this view is requested
                backendData: {
                    activeId: 235218347282,
                    primary: {
                        name: 'diapers',
                        items: [
                            {
                                id: 235218347282,
                                name: '2-3-kg-windeln',
                                image: {
                                    src: 'test-packet/lillydoo-testpaket-10.jpg',
                                    alt: 'Lillydoo Testpaket mit Windeln in Größe 1 und 15 Feuchttüchern'
                                },
                                thumbnail: {
                                    src: 'thumbnails/lillydoo-little-blowballs-design-preview-tp.jpg',
                                    alt: 'Lillydoo Windel Design - Little Blowballs'
                                },
                                description: {
                                    header: '10 LILLYDOO WINDELN',
                                    details: [
                                        '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
                                        'Extra weich und mit idealer Passform'
                                    ]
                                },
                                button: {
                                    l1: '1',
                                    l2: '(2-3 KG)'
                                },
                                secondaryProduct: 'water-wipes'
                            },
                            {
                                id: 545432898121,
                                name: '3-4-kg-windeln',
                                image: {
                                    src: 'test-packet/lillydoo-testpaket-20.jpg',
                                    alt: 'Lillydoo Testpaket mit Windeln in Größe 2 und 15 Feuchttüchern'
                                },
                                thumbnail: {
                                    src: 'thumbnails/lillydoo-little-blowballs-design-preview-tp.jpg',
                                    alt: 'Lillydoo Windel Design - Little Blowballs'
                                },
                                description: {
                                    header: '10 LILLYDOO WINDELN',
                                    details: [
                                        '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
                                        'Extra weich und mit idealer Passform'
                                    ]
                                },
                                button: {
                                    l1: '2',
                                    l2: '(3-4 KG)'
                                },
                                secondaryProduct: 'water-wipes'
                            },
                            {
                                id: 982364235123,
                                name: '4-7-kg-windeln',
                                image: {
                                    src: 'test-packet/lillydoo-testpaket-30.jpg',
                                    alt: 'Lillydoo Testpaket mit Windeln in Größe 3 und 15 Feuchttüchern'
                                },
                                thumbnail: {
                                    src: 'thumbnails/lillydoo-little-blowballs-design-preview-tp.jpg',
                                    alt: 'Lillydoo Windel Design - Little Blowballs'
                                },
                                description: {
                                    header: '10 LILLYDOO WINDELN',
                                    details: [
                                        '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
                                        'Extra weich und mit idealer Passform'
                                    ]
                                },
                                button: {
                                    l1: '3',
                                    l2: '(4-7 KG)'
                                },
                                secondaryProduct: 'sensitive-wipes'
                            },
                            {
                                id: 456365233523,
                                name: '7-10-kg-windeln',
                                image: {
                                    src: 'test-packet/lillydoo-testpaket-40.jpg',
                                    alt: 'Lillydoo Testpaket mit Windeln in Größe 4 und 15 Feuchttüchern'
                                },
                                thumbnail: {
                                    src: 'thumbnails/lillydoo-little-blowballs-design-preview-tp.jpg',
                                    alt: 'Lillydoo Windel Design - Little Blowballs'
                                },
                                description: {
                                    header: '10 LILLYDOO WINDELN',
                                    details: [
                                        '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
                                        'Extra weich und mit idealer Passform'
                                    ]
                                },
                                button: {
                                    l1: '4',
                                    l2: '(7-10 KG)'
                                },
                                secondaryProduct: 'sensitive-wipes'
                            },
                            {
                                id: 987123543544,
                                name: '10-12-kg-windeln',
                                image: {
                                    src: 'test-packet/lillydoo-testpaket-50.jpg',
                                    alt: 'Lillydoo Testpaket mit Windeln in Größe 5 und 15 Feuchttüchern'
                                },
                                thumbnail: {
                                    src: 'thumbnails/lillydoo-little-blowballs-design-preview-tp.jpg',
                                    alt: 'Lillydoo Windel Design - Little Blowballs'
                                },
                                description: {
                                    header: '10 LILLYDOO WINDELN',
                                    details: [
                                        '0 % Parfüme & Lotionen, 100 % LILLYDOO Schutz',
                                        'Extra weich und mit idealer Passform'
                                    ]
                                },
                                button: {
                                    l1: '5',
                                    l2: '(10-12 KG)'
                                },
                                secondaryProduct: 'sensitive-wipes'
                            }
                        ]
                    },
                    secondary: {
                        name: 'wipes',
                        items: [
                            {
                                id: 389287103236,
                                name: 'water-wipes',
                                image: { },
                                thumbnail: {
                                    src: 'thumbnails/water-wipes-15-small.jpg',
                                    alt: 'LILLYDOO 15 Feuchttücher mit 99% Wasser'
                                },
                                description: {
                                    header: '15 FEUCHTTÜCHER MIT 99 % WASSER',
                                    details: [
                                        '0 % Parfüme & PEGs, 100 % biologisch abbaubar',
                                        'Natürlich rein, extra mild, Alternative zu "Wasser & Watte"'
                                    ]
                                }
                            },
                            {
                                id: 618722830239,
                                name: 'sensitive-wipes',
                                image: { },
                                thumbnail: {
                                    src: 'thumbnails/sensitive-wipes-15-small.jpg',
                                    alt: 'LILLYDOO 15 sensitive Feuchttücher'
                                },
                                description: {
                                    header: '15 SENSITIVE FEUCHTTÜCHER',
                                    details: [
                                        '0 % Parfüme & PEGs, 100 % biologisch abbaubar',
                                        'Extra dickes und kompostierbares Tuch'
                                    ]
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            path: '/alternate',
            name: 'test-packet-alternate',
            meta: { layout: 'content-full' },
            component: TestPacket
        }
    ]
});
