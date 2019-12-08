import React, { useState, useEffect } from "react";
import "./App.css";
import PizzaList from "./components/PizzaList";
import ServingList from "./components/ServingList";

const App = () => {
    const [cartData, setCartData] = useState([]);
    const [servingList, setServingList] = useState([]);
    const [total, setTotal] = useState(200);

    useEffect(() => {
        const list = [
            {
                id: 1,
                icon: "fas fa-pizza-slice fa-sm",
                pizza_type: "Small",
                count: 0
            },
            {
                id: 2,
                icon: "fas fa-pizza-slice fa-md",
                pizza_type: "Medium",
                count: 1
            },
            {
                id: 3,
                icon: "fas fa-pizza-slice fa-lg",
                pizza_type: "Large",
                count: 0
            }
        ];
        const servingList = [
            {
                id: 1,
                icon: "fas fa-user fa-sm",
                serve_title: "ADULTS",
                count: 1
            },
            {
                id: 2,
                icon: "fas fa-child fa-md",
                serve_title: "CHILDREN",
                count: 0
            }
        ];
        setCartData(list);
        setServingList(servingList);
    }, []);
    const incrementPizzaQuantity = id => {
        const cart = [...cartData];
        const servingData = [...servingList];
        cart[id].count += 1;
        const index = cart[id].id;
        if (index === 1) {
            if (cart[0].count % 2 === 0) {
                cart[1].count += cart[0].count / 2;
                let balance = total - (cart[0].count - 1) * 150;
                let price = balance + (cart[0].count / 2) * 200;
                cart[0].count = 0;
                if (price <= 1000) {
                    setTotal(price);
                    servingData[0].count += 1;
                    servingData[1].count = 0;
                }
            } else {
                let price = total + 150;
                if (price <= 1000) {
                    setTotal(price);
                    servingData[1].count += 1;
                }
            }
            // console.log(object);
        } else if (index === 2) {
            if (cart[1].count % 2 === 0) {
                cart[2].count += cart[1].count / 2;
                let balance = total - (cart[1].count - 1) * 200;
                let price = balance + (cart[1].count / 2) * 300;
                cart[1].count = 0;
                if (price <= 1000) {
                    setTotal(price);
                    servingData[0].count += 1;
                    servingData[1].count = 0;
                }
            } else {
                let price = total + 200;
                if (price <= 1000) {
                    setTotal(price);
                    servingData[0].count += 1;
                }
            }
        } else {
            let price = total + 300;
            if (price <= 1000) {
                setTotal(price);
                servingData[0].count += 2;
            }
        }
        setCartData(cart);
        setServingList(servingData);
        // console.log(id);
    };
    const decrementPizzaQuantity = id => {
        const cart = [...cartData];
        const servingData = [...servingList];
        cart[id].count -= 1;
        const index = cart[id].id;
        if (index === 1) {
            let price = total - 150;
            if (price >= 200) {
                setTotal(price);
                servingData[1].count -= 1;
            }

            // console.log(object);
        } else if (index === 2) {
            let price = total - 200;
            if (price >= 200) {
                setTotal(price);
                servingData[0].count -= 1;
            }
        } else {
            if (cart[2].count === 0) {
                if (cart[1].count === 0) {
                    cart[1].count += 1;
                    let price = 200;
                    if (price >= 200) {
                        setTotal(price);
                        servingData[0].count = 1;
                    }
                } else {
                    let price = total - 300;
                    if (price >= 200) {
                        setTotal(price);
                        servingData[0].count -= 2;
                    }
                }
            } else {
                let price = total - 300;
                if (price >= 200) {
                    setTotal(price);
                    servingData[0].count -= 2;
                }
            }
        }
        setCartData(cart);
        setServingList(servingData);
    };

    const incrementServingQuantity = id => {
        const cart = [...cartData];
        const servingData = [...servingList];
        servingData[id].count += 1;
        // setTotal(total+200);
        const index = servingData[id].id;
        if (index === 1) {
            // console.log(index, "hello");
            let price = total + 200;
            if (price <= 1000) {
                setTotal(price);
                cart[1].count += 1;
            }
            if (cart[1].count % 2 === 0) {
                cart[2].count += cart[1].count / 2;
                let balance = total - (cart[1].count - 1) * 200;
                let price = balance + (cart[1].count / 2) * 300;
                cart[1].count = 0;
                if (price <= 1000) {
                    setTotal(price);
                }
                // console.log(index, "hello1");
            } else {
                let price = total + 200;
                if (price <= 1000) {
                    setTotal(price);
                }
                // console.log(index, "hello2");
            }
        } else {
            if (servingData[1].count % 2 === 0) {
                // console.log(index, "hel1");
                cart[1].count += 1;
                let balance = total - cart[0].count * 150;
                let updated = balance + 200;
                // console.log(balance, updated, cart[0].count * 150);
                cart[0].count = 0;
                if (updated <= 1000) {
                    setTotal(updated);
                    servingData[0].count += 1;
                    servingData[1].count = 0;
                }
            } else {
                // console.log(index, "hel2");
                let price = total + 150;
                if (price <= 1000) {
                    setTotal(price);
                    cart[0].count += 1;
                }
            }
        }
        setCartData(cart);
        setServingList(servingData);
    };
    const decrementServingQuantity = id => {
        const cart = [...cartData];
        const servingData = [...servingList];
        servingData[id].count -= 1;
        const index = servingData[id].id;
        if (index === 1) {
            if (cart[2].count > 1) {
                let price = total - 300;
                if (price <= 1000) {
                    setTotal(price);
                    cart[2].count -= 1;
                }
            } else {
                setTotal(200);
                cart[1].count += 1;
                cart[2].count = 0;
            }
        } else {
            let price = total - 150;
            if (price <= 1000) {
                setTotal(price);
                cart[0].count -= 1;
            }
        }
        setCartData(cart);
        setServingList(servingData);
    };

    return (
        <main className='page cart-page'>
            <section className='cart-form dark'>
                <div className='container cartSection'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-7'>
                            <h2 className='heading'>
                                <span className='text-1'>Order</span>
                                <span className='text-2'> Pizza</span>
                            </h2>
                            <div className='products'>
                                <table className='table table-sm table-responsive-lg'>
                                    <tbody>
                                        <PizzaList
                                            list={cartData}
                                            incrementPizzaQuantity={id =>
                                                incrementPizzaQuantity(id)
                                            }
                                            decrementPizzaQuantity={id =>
                                                decrementPizzaQuantity(id)
                                            }
                                        />
                                    </tbody>
                                </table>
                                <table className='table table-sm table-responsive-lg custom-table'>
                                    <tbody>
                                        <ServingList
                                            data={servingList}
                                            incrementServingQuantity={id =>
                                                incrementServingQuantity(id)
                                            }
                                            decrementServingQuantity={id =>
                                                decrementServingQuantity(id)
                                            }
                                        />
                                    </tbody>
                                </table>
                            </div>
                            <div className='total'>
                                <span className='text-1'>Order</span>
                                <span className='text-2'> Total</span>
                                <span className='serve-count'>{total}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default App;
