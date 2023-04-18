import { Fragment, useState } from "react";
import "./App.css";
import Counter from "./components/counter";

function App() {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 10) {
            setCount((prev) => prev + 1);
        } else {
            alert("count is going above 10, try your luck you can't do that!");
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        } else {
            alert("sorry count can't be less than zero!");
        }
    };

    return (
        <Fragment>
            <Counter
                count={count}
                increment={increment}
                decrement={decrement}
            />
        </Fragment>
    );
}

export default App;
