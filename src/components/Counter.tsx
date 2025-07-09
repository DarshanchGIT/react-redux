import type React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounter } from "../features/counter/counterSlice";

interface StateType {
    counter: {
        value: number
    }
}

export const Counter: React.FC = () => {
    const count = useSelector((state: StateType) => state.counter.value);
    console.log(count)
    const dispatch = useDispatch()
    return <>
        <div>
            <div className="counter-val">
                COUNT: {count}
            </div>
            <button onClick={() => dispatch(incrementCounter())}>
                Increment count +
            </button>
        </div>
    </>
} 