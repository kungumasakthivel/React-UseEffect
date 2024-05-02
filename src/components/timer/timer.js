import React, {useState, useEffect} from 'react';

const CountdownTimer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer <= 0) {
            return ;
        }

        const timerId = setTimer(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [timer]);

    return (
        <div>
            <p>Time Remaining : {timer}</p>
        </div>
    )
} 

export default CountdownTimer;
