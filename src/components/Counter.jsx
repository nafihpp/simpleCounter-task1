import "./counter.css";

const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <h1 className="counter">{count}</h1>
            <button onClick={increment} className="button-increment">
                Increment
            </button>
            <button onClick={decrement} className="button-decrement">
                Decrement
            </button>
        </div>
    );
};

export default Counter;
