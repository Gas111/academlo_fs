import {configureStore} from "@reduxjs/toolkit"
import userName from "./slices/username.slice"

export default configureStore({
reducer:{

    userName
}
})

