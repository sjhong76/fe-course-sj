import { useState } from 'react';
import BasicCounter from './components/counter/BasicCounter.jsx';

export default function App() {
    const [totalCount, setTotalCount] = useState(0);

    const handleTotalCount = (diff) => {
        setTotalCount(prev => prev + diff);
    };

    return (
        <>
            <h1>AppCounter</h1>
            <h1>Total Count :: <span><b>{totalCount}</b></span></h1>
            <BasicCounter click={handleTotalCount} total={totalCount}/>
            <BasicCounter click={handleTotalCount} total={totalCount}/>
            <BasicCounter click={handleTotalCount} total={totalCount}/>
        </>
    );
}