import { Manifest } from '../types/Manifest.type'

import { about } from '../articles/about'
import { capoeiraSongBot, stockOverflow, iaiaioio } from '../articles/projects'

export const MicroCopy: Manifest = {
    'Home': {
        head: 'HELLO THERE',
        body: `I'm Sami - a self-taught full-stack web developer & full-on Capoeira instructor`,
        bottom: ['Based in Hamburg, Germany 📍']
    },
    'About': {
        head: `MY MOM AND DAD MADE THIS`,
        body: `Hi - I'm Sami.`,
        bottom: [about],
    },
    'Blog': {
        head: 'I WROTE THIS',
        body: 'Thoughts on life and software',
        bottom: [``]
    },
    'Projects': {
        head: 'I MADE THIS',
        body: '',
        bottom: [
            capoeiraSongBot,
            stockOverflow,
            iaiaioio
        ]
    }
}