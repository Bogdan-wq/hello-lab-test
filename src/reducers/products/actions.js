import getProductsAPI from "../../api";
import {productsSetData, productsSetError, productsSetLoading} from "./action-creators";

const getItems = (dispatch) => {
    getProductsAPI()
        .then((res) => {
            dispatch(productsSetLoading(false))
            dispatch(productsSetData(res))
        })
        .catch(() => {
            dispatch(productsSetLoading(false))
            dispatch(productsSetError(true))
        })
}

export default getItems;