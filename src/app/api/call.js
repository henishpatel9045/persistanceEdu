import { create } from "apisauce"
"https://persistanceedu.pythonanywhere.com"
const api = create({
    baseURL: "http://localhost:8000/"
})

export {api}
