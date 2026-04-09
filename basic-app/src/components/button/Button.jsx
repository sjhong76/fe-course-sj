
export default function Button({type, name, styles}) {
    let { w, h, bg, color } = styles;

    const handleClick = () => {
        alert('버튼 클릭!!');
    }

    return (        
        <button type={type}
                name={name}
                style={{width: w, 
                        height: h,
                        backgroundColor: bg,
                        color: color}}
                onClick={handleClick}>{name}</button>        
    )
}