import Image from '../../common/Image.jsx';
import "./Airbnb.css";

export default function RoomAvatar({ img, alt, roomTitle, roomData, roomPrice, roomRating, isGuest, isLike, key}) {
    return (
        <div className="room_container" key={key}>
            <Image  img={img} 
                    alt={alt} 
                    className="room_img"/>
            {isGuest && <span className='guest_preference'>게스트 선호</span>}
            {isLike && <span className='like'>🤍</span>}
            <p className='room_title'>{roomTitle}</p>
            <p className='room_date'>{roomData}</p>
            <div className='room_price'>
                <p >총액 {roomPrice}</p>
                <p>⭐ {roomRating}</p>
            </div>

        </div>
    )
}