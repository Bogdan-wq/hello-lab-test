import React,{useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import getItems from "../../reducers/products/actions";
import renderIf from "../../helpers/renderIf";

import Product from "../Product";
import toggleModal, {toggleModalCheapest} from "../../reducers/modal/actions";
import Modal from "../Modal";

import '../../styles/font.scss';

import {
    app,
    app__products,
    app__product,
    app__footer,
} from './App.scss';

import Loading from "../UIComponents/Loading";
import Button from "../UIComponents/Button";
import Error from "../UIComponents/Error";


const App = () => {

    const dispatch = useDispatch();

    const products = useSelector(s => s.products.data)
    const loading = useSelector(s => s.products.loading)
    const error = useSelector(s => s.products.error)
    const modalOpen = useSelector(s => s.modal.open)

    useEffect(() => dispatch(getItems),[])

    const canRenderProducts = renderIf(products)
    const loadingIndicator = renderIf(loading)(() => <Loading />)
    const errorIndicator = renderIf(error)(() => <Error />)

    return (
        <div className={app}>
                {canRenderProducts(() => (
                    <div className={app__products}>
                        {products.map((productItem) => {
                            return <Product {...productItem}
                                            openModal={() => dispatch(toggleModal(true, productItem))}
                                            className={app__product}
                                            key={Math.random()} />
                        })}
                    </div>
                ))}
                {loadingIndicator}
                {errorIndicator}
            <div className={app__footer}>
                <Button upperCase={false}
                        size="lg"
                        shadow
                        onClick={() => dispatch(toggleModalCheapest(true,products))}>
                    Buy cheapest
                </Button>
            </div>
            <Modal isOpen={modalOpen}
                   toggle={() => dispatch(toggleModal(false,null))} />
        </div>
    )
}

export default App;