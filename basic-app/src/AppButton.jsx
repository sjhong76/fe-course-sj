import Button from './components/button/Button.jsx';

export default function App() {
    const styleObj = {
        w:"100px",
        h:"50px",
        bg:"magenta",
        color:"white"
    }
    const styleObj2 = {
        w:"200px",
        h:"30px",
        bg:"gray",
        color:"white"
    }



    return (
        <>
            <Button type="button"
                    name="버튼1"
                    styles={styleObj}
            />
            <Button type="submit"
                    name="회원가입"
                    styles={styleObj2}
            />
        </>
    )
}