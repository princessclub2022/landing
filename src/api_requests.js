import axios from "axios";
import {CMS} from "./env";


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
