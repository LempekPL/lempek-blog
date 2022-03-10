module.exports = {
    "defaultLocale": "en",
    "locales": ["en", "pl"],
    "pages": {
        "*": ["common", "navbar"]
    },
    "loadLocaleFrom": (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
    domains: [
        {
            domain: "lempek.dev",
            defaultLocale: "en",
        },
        {
            domain: "pl.lempek.dev",
            defaultLocale: "pl",
        },
    ],
}

