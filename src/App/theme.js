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
    indigoDarker: "#506aac",
    razzmatazz: "#D51059",
    camelot: "#953558",
    siren: "#7C0430",
    ceriseRed: "#E53979",
    cranberry: "#E5598D",
}

export const theme = {
    colors: {
        global: {
            background: pallette.indigoLight,
            shadow: pallette.deepSapphire,
            title: pallette.white,
        },
        diagram: {
            background: pallette.indigo,
            border: pallette.sanJuan,
            groupBorder: pallette.deepSapphire,
            number: pallette.deepSapphire,
            field: {
                background: "transparent",
                border: pallette.sanJuan,
                button: {
                    activeBackground: pallette.cranberry,
                    activeMatchingText: pallette.parisM,
                    activeText: pallette.camelot,
                    background: pallette.indigoLight,
                    conflictBackground: pallette.cranberry,
                    conflictOutline: pallette.amethyst,
                    conflictText: pallette.siren,
                    cross: pallette.indigoDarker,
                    focusedShadow: pallette.cranberry,
                    lastClicked: pallette.parisM,
                    numberShadow: pallette.funBlue,
                },
            },
        },
        information: {
            background: pallette.amethyst,
            border: pallette.sanJuan,
            text: pallette.parisM,
        },
        numbers: {
            background: pallette.indigo,
            border: pallette.sanJuan,
            field: {
                activeBackground: pallette.parisM,
                background: pallette.siren,
                focusedShadow: pallette.cranberry,
                text: pallette.white,
                subText: pallette.cranberry,
            }
        },
        tools: {
            background: pallette.indigo,
            border: pallette.sanJuan,
            buttons: {
                activeBackground: pallette.ceriseRed,
                activeText: pallette.siren,
                background: pallette.amethyst,
                highlightBackground: pallette.seance,
                highlightText: pallette.purpleHeart,
                text: pallette.parisM,
            }
        }
    },
    breakpoints: {
        mobile: "320px",
        mobileLandscape: "568px",
        tablet: "767px",
        tabletLandscape: "1024px",
    }
}