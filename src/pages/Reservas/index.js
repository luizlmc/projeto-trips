import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircle, MdDelete, MdRemoveCircle } from 'react-icons/md';

import { removeReserve, updateAmountReserve } from '../../store/modules/reserve/actions';

import './styles.css';

function Reservas() {

    const dispatch = useDispatch();
    const reserves = useSelector(state => state.reserve);

    function handleRemove(id) {
        dispatch(removeReserve(id));
    }

    function decrementAmount(trip) {
        dispatch(updateAmountReserve(trip.id, trip.amount - 1));
    }

    function incrementAmount(trip) {
        dispatch(updateAmountReserve(trip.id, trip.amount + 1));
    }

    return (
        <div>
            <h1 className="title">Voce solicitou {reserves.length} reservas</h1>

            {reserves.map(reserve => (
                <div className="reservas" key={reserve.id}>
                    <img
                        src={reserve.image}
                        alt={reserve.title}
                    />
                    <strong>{reserve.title}</strong>
                    <div id='amount'>
                        <button disabled={reserve.amount === 1} onClick={() => decrementAmount(reserve)} >
                            <MdRemoveCircle size={25} color={reserve.amount === 1 ? "#EEE" : "#191919"} />
                        </button>
                        <input type="text" readOnly value={reserve.amount} />
                        <button onClick={() => incrementAmount(reserve)}>
                            <MdAddCircle size={25} color="#191919" />
                        </button>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleRemove(reserve.id)}
                    >
                        <MdDelete size={20} color="#191919" />
                    </button>
                </div>
            ))}

            <footer>
                <button type="button">Solicitar Reservas</button>
            </footer>

        </div>
    )
}

export default Reservas;
