import axios from "axios";
import {CMS} from "./env";

// const CMS = "https://cms.kyrrex.com"

export const getInfoFromCms = (path, setInfo, setError, setLoading) => {
    setLoading(true)
    axios(`${CMS}${path}`).then((res) => {
        setInfo(res.data)
        setLoading(false)
    }).catch(e => {
        console.log(e)
        return setError(e)
    })
}
// export const getInfoFromCmsWithLocale = (path, setInfo, setError, setLoading, locale) => {
//     setLoading(true)
//     axios(`${CMS}${path}${locale !== undefined ? `?_locale=${locale}` : `?_locale=en`}`).then((res) => {
//         setInfo(res.data)
//         setLoading(false)
//     }).catch(e => {
//         console.log(e)
//         return setError(e)
//     })
// }