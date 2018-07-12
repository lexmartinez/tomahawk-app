import { INFO_URL } from '../config/Constants'
export const fetchAppInfo = () => (
    fetch(INFO_URL).then((res) => res).catch((err) => err)
)
