import BasicCounter from './components/counter/BasicCounter.jsx'


export default function App() {
    return (
        <>
            <h1>Total Count :: <span><b>0</b></span></h1>
            <BasicCounter />
            <BasicCounter />
            <BasicCounter />
        </>
    )
}