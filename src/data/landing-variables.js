
// close on click outside
export const checkerIfClickOutside = (e, setSelectHeader, selectHeader, ref) => {
    if (selectHeader && ref.current && !ref.current.contains(e.target)) {
        setSelectHeader(false)
    }
}

export const formatText = e => {
    if (e.charCode < 46 || (e.charCode > 46 && e.charCode < 48) || e.charCode > 57) {
        e.preventDefault()
        return false
    }
    return true
}

export const sanitizeHtmlOptions = {
    allowedTags: ["h1", "h2", "h3", "img", "p", "iframe", "span"],
    allowedAttributes: {'*': ['href', 'alt', "src", "style"]},
    allowedSchemes: ['http', 'https'],
    allowedSchemesByTag: {img: ['data', "src"]},
}

export const mainTelLink = "tel:+380671588252"
export const mainTelLinkText = "+38 067 158 82 52"
export const mainTelLinkTwo = "tel:+380671588252"
export const mainTelLinkTwoText = "+38 067 158 82 52"
export const mainTel = "+38 067 158 82 52"

export const reviewsGoogleLink = "https://www.google.com/maps/place/Princess+Men%E2%80%99s+Club/@50.451374,30.525201,15z/data=!4m2!3m1!1s0x0:0x8387efd24c1bd0af?sa=X&ved=2ahUKEwi_2r3Ek4L1AhUYzzgGHcXyBK8Q_BJ6BAgZEAU "
export const reviewsZoonLink = "https://zoon.com.ua/kiev/night_clubs/striptiz-klub_princess_mens_club_v_shevchenkovskom_rajone/price/"
export const reviewsRelaxLink = "https://princess-mens-club.relax.ua/"
export const reviewsTOPClubLink = "hhttps://topclub.ua/kiev/place-princess-mens-club.html"
export const AboutClubYouTubeVideoLink = "https://www.youtube.com/watch?v=pwXQjHaZrgE&ab_channel=PrincessMen%27sClubStrip"
