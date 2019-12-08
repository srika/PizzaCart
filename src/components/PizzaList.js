import React, { Fragment } from "react";

const PizzaList = ({
    list,
    incrementPizzaQuantity,
    decrementPizzaQuantity
}) => {
    const btnVisibility = (id, count) => {
        if(id === 0) {
            if(count === 0) {
                return (
                    <span
                        className='input-group-text'
                    >
                        <i className='fas fa-minus-circle fa-lg disable' />
                    </span>
                );
            } else {
                return (
                    <span
                        className='input-group-text'
                        onClick={() => decrementPizzaQuantity(id)}
                    >
                        <i className='fas fa-minus-circle fa-lg minus' />
                    </span>
                );
            }
        } else if(id===1){
            if (count <= 1) {
                return (
                    <span className='input-group-text'>
                        <i className='fas fa-minus-circle fa-lg disable' />
                    </span>
                );
            } else {
                return (
                    <span
                        className='input-group-text'
                        onClick={() => decrementPizzaQuantity(id)}
                    >
                        <i className='fas fa-minus-circle fa-lg minus' />
                    </span>
                );
            }
        } else {
            if (count === 0) {
                return (
                    <span className='input-group-text'>
                        <i className='fas fa-minus-circle fa-lg disable' />
                    </span>
                );
            } else {
                return (
                    <span
                        className='input-group-text'
                        onClick={() => decrementPizzaQuantity(id)}
                    >
                        <i className='fas fa-minus-circle fa-lg minus' />
                    </span>
                );
            }
        }
    };
    return (
        <Fragment>
            {list.map((data, id) => (
                <tr key={id}>
                    <td className='icon'>
                        <i className={`${data.icon} pizza`}></i>
                    </td>
                    <td className='item'>{data.pizza_type}</td>
                    <td className='price'>
                        <div className='input-group custom-group'>
                            <div className='input-group-prepend'>
                                {btnVisibility(id, data.count)}
                            </div>
                            <input
                                type='text'
                                className='form-control-plaintext form-text'
                                placeholder=''
                                name='prepTime'
                                value={data.count}
                                // onChange={e =>
                                //     onChange(e)
                                // }
                                // disabled={true}
                                readOnly
                            />
                            <div className='input-group-append'>
                                <span
                                    className='input-group-text'
                                    onClick={() => incrementPizzaQuantity(id)}
                                >
                                    <i className='fas fa-plus-circle fa-lg plus' />
                                </span>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
        </Fragment>
    );
};

export default PizzaList;
