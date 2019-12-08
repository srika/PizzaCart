import React, { Fragment } from "react";

const ServingList = ({
    data,
    incrementServingQuantity,
    decrementServingQuantity
}) => {
    const btnVisibility = (id, count) => {
        if (id === 0) {
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
                        onClick={() => decrementServingQuantity(id)}
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
                        onClick={() => decrementServingQuantity(id)}
                    >
                        <i className='fas fa-minus-circle fa-lg minus' />
                    </span>
                );
            }
        }
    };
    return (
        <Fragment>
            {data.map((d, id) => (
                <tr key={id}>
                    <td className='icon-1'>
                        <i className={`${d.icon} pizza`}></i>
                    </td>
                    <td className='item-1'>{d.serve_title}</td>
                    <td className='price-1'>
                        <div className='input-group custom-group'>
                            <div className='input-group-prepend'>
                                {btnVisibility(id, d.count)}
                            </div>
                            <input
                                type='text'
                                className='form-control-plaintext form-text'
                                placeholder=''
                                name='prepTime'
                                value={d.count}
                                // onChange={e =>
                                //     onChange(e)
                                // }
                                // disabled={true}
                                readOnly
                            />
                            <div className='input-group-append'>
                                <span
                                    className='input-group-text'
                                    onClick={() => incrementServingQuantity(id)}
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
export default ServingList;
