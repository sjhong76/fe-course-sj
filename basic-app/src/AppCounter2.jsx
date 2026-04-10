import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = (value) => {
        if (value === 'reset') {
            setCount(0);
        } else {
            setCount(prev => prev + value);
        }
    };

    return (
        <div
            style={{
                border: '2px solid #1f3b4d',
                padding: '40px',
                width: '720px',
                margin: '20px auto',
                boxSizing: 'border-box'
            }}
        >
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <h1 style={{ fontWeight: 'normal', marginBottom: '20px' }}>
                    현재 카운트:
                </h1>

                <div style={{fontSize: '84px', lineHeight: 1.1 }}>
                    <b>{count}</b>
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '15px',
                    marginTop: '140px',
                    flexWrap: 'wrap'
                }}
            >
                <button type="button" onClick={() => handleCount(-100)}>-100</button>
                <button type="button" onClick={() => handleCount(-10)}>-10</button>
                <button type="button" onClick={() => handleCount(-1)}>-1</button>
                <button type="button" onClick={() => handleCount(1)}>+1</button>
                <button type="button" onClick={() => handleCount(10)}>+10</button>
                <button type="button" onClick={() => handleCount(100)}>+100</button>
                <button type="button" onClick={() => handleCount('reset')}>초기화</button>
            </div>
        </div>
    );
}