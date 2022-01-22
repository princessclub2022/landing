

export const sanitizeHtmlOptions = {
    allowedTags: ["h1", "h2", "h3", "img", "p", "iframe", "span"],
    allowedAttributes: {'*': ['href', 'alt', "src", "style"]},
    allowedSchemes: ['http', 'https'],
    allowedSchemesByTag: {img: ['data', "src"]},
}
