module.exports = {
    "defaultLocale": "en",
    "locales": ["en", "pl"],
    "pages": {
        "*": ["common"]
    },
    "loadLocaleFrom": (lang, ns) => import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
}

