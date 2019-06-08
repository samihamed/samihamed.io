import { Manifest } from '../types/Manifest.type'

import { about } from '../articles/about'
import { capoeiraSongBot, stockOverflow, iaiaioio } from '../articles/projects'

export const MicroCopy: Manifest = {
    'Home': {
        head: `HI, I'M SAMI`,
        body: `Self-taught full-stack web developer & full-on Capoeira instructor`,
        bottom: ['Based in Hamburg, Germany 📍']
    },
    'About': {
        head: `MY MOM AND DAD MADE THIS`,
        body: ``,
        bottom: [about],
    },
    'Blog': {
        head: 'I WROTE THIS',
        body: 'Thoughts on life and software',
        bottom: [``]
    },
    'Projects': {
        head: 'I MADE THIS',
        body: 'Some things I build or contribute to',
        bottom: [
            capoeiraSongBot,
            stockOverflow,
            iaiaioio
        ]
    }
}