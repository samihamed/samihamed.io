export interface ManifestSection {
    head: string,
    body: string,
    bottom: Array<string>
}

export interface Manifest {
    'Home': ManifestSection,
    'About': ManifestSection,
    'Projects': ManifestSection,
    'Blog': ManifestSection,
}