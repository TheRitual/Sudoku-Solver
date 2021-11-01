const pallette = {
    white: "#FFFFFF",
    black: "#000000",
    seance: "#6018A5",
    minsk: "#522E74",
    parisM: "#330660",
    purpleHeart: "#833DC7",
    amethyst: "#8F56C7",
    funBlue: "#1D44A4",
    sanJuan: "#314473",
    deepSapphire: "#07205F",
    indigo: "#4167C6",
    indigoLight: "#5A79C6",
    razzmatazz: "#D51059",
    camelot: "#953558",
    siren: "#7C0430",
    ceriseRed: "#E53979",
    cranberry: "#E5598D",
}

export const theme = {
    colors: {
        bodyBackground: pallette.indigoLight,
        title: pallette.white,
        shadow: pallette.deepSapphire,
        diagram: pallette.minsk,
        diagramBorder: pallette.siren,
    },
    breakpoints: {
        mobile: "320px",
        mobileLandscape: "568px",
        tablet: "767px",
        tabletLandscape: "1024px",
    }
}