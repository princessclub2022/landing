
export const sanitizeHtmlOptions = {
    allowedTags: ["h1", "h2", "h3", "img", "p", "iframe", "span"],
    allowedAttributes: {'*': ['href', 'alt', "src", "style"]},
    allowedSchemes: ['http', 'https'],
    allowedSchemesByTag: {img: ['data', "src"]},
}




{/*{parse(sanitizeHtml(item.text_before_picture, {*/}
{/*    allowedTags: [*/}
{/*        "h1", "h2", "h3", "h4",*/}
{/*        "h5", "h6", "img", "p", "iframe", "span"*/}
{/*    ],*/}
{/*    allowedAttributes: {*/}
{/*        '*': [ 'href','alt', "src", "style"]*/}
{/*    },*/}
{/*    allowedSchemes: [ 'http', 'https' ],*/}
{/*    allowedSchemesByTag: {*/}
{/*        img: [ 'data', "src" ],*/}
{/*        span: [ 'style'],*/}
{/*        p: [ 'style']*/}
{/*    },*/}
{/*    allowedStyles: {*/}
{/*        '*': {*/}
{/*            'color': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/],*/}
{/*            'text-align': [/^left$/, /^right$/, /^center$/],*/}
{/*            'font-size': [/^\d+(?:px|em|%)$/],*/}
{/*            'background-color:': [/^#(0x)?[0-9a-f]+$/i, /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/]*/}
{/*        },*/}
{/*        'p': {*/}
{/*            'font-size': [/^\d+rem$/]*/}
{/*        }*/}
{/*    }*/}
{/*}))}*/}

