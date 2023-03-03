import useAsset from "ultra/hooks/use-asset.js";

export const getFontStyles = () => `/* red-hat-display-700 - latin-ext_latin */
@font-face {
    font-display: swap;
    font-family: "Red Hat Display";
    font-style: normal;
    font-weight: 700;
    src: url(${useAsset(
      "/fonts/red-hat-display-v14-latin-ext_latin-700.woff2"
    )})
        format("woff2");
}
/* noto-sans-display-700 - cyrillic-ext_cyrillic */
@font-face {
    font-display: swap;
    font-family: "Noto Sans Display";
    font-style: normal;
    font-weight: 700;
    src: url(${useAsset(
      "/fonts/noto-sans-display-v20-cyrillic-ext_cyrillic-700.woff2"
    )})
        format("woff2");
}
/* red-hat-text-regular - latin-ext_latin */
@font-face {
    font-display: swap;
    font-family: "Red Hat Text";
    font-style: normal;
    font-weight: 400;
    src: url(${useAsset(
      "/fonts/red-hat-text-v13-latin-ext_latin-regular.woff2"
    )})
        format("woff2");
}
/* red-hat-text-italic - latin-ext_latin */
@font-face {
    font-display: swap;
    font-family: "Red Hat Text";
    font-style: italic;
    font-weight: 400;
    src: url(${useAsset(
      "/fonts/red-hat-text-v13-latin-ext_latin-italic.woff2"
    )})
        format("woff2");
}
/* red-hat-text-600 - latin-ext_latin */
@font-face {
    font-display: swap;
    font-family: "Red Hat Text";
    font-style: normal;
    font-weight: 600;
    src: url(${useAsset(
      "/fonts/red-hat-text-v13-latin-ext_latin-600.woff2"
    )}) format("woff2");
}
/* noto-sans-regular - cyrillic-ext_cyrillic */
@font-face {
    font-display: swap;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 400;
    src: url(${useAsset(
      "/fonts/noto-sans-v27-cyrillic-ext_cyrillic-regular.woff2"
    )})
        format("woff2");
}
/* noto-sans-italic - cyrillic-ext_cyrillic */
@font-face {
    font-display: swap;
    font-family: "Noto Sans";
    font-style: italic;
    font-weight: 400;
    src: url(${useAsset(
      "/fonts/noto-sans-v27-cyrillic-ext_cyrillic-italic.woff2"
    )})
        format("woff2");
}
/* noto-sans-600 - cyrillic-ext_cyrillic */
@font-face {
    font-display: swap;
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 600;
    src: url(${useAsset(
      "/fonts/noto-sans-v27-cyrillic-ext_cyrillic-600.woff2"
    )})
        format("woff2");
}
/* source-code-pro-regular - latin */
@font-face {
    font-display: swap;
    font-family: "Source Code Pro";
    font-style: normal;
    font-weight: 400;
    src: url(${useAsset(
      "/fonts/source-code-pro-v22-latin-regular.woff2"
    )}) format("woff2");
}

body {
    font-family: "Red Hat Text", "Noto Sans", sans-serif;
}`;