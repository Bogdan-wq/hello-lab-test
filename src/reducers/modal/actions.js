import {modalSetOpen, modalSetProduct} from "./action-creators";

const toggleModal = (open,product) => (dispatch) => {
    dispatch(modalSetOpen(open))
    dispatch(modalSetProduct(product))
}


const toggleModalCheapest = (open,products) => (dispatch) => {
    const lowestPrice = Math.min(...products.map(product => product.price))
    const cheapestProduct = products.find(product => product.price === lowestPrice)
    dispatch(modalSetOpen(open))
    dispatch(modalSetProduct(cheapestProduct))
}


export default toggleModal;

export {
    toggleModalCheapest
}