import { useState, useEffect } from 'react';
import AvatarImageList from "../avatar/AvatarImageList.jsx"
apatcj import AvatarImageList from "../avatar/AvatarImageList.jsx"
import style from "../avatar/Avatar.module.css"
import { fetchData } from '../../util/fetch.js';

export default function EffectFetch2() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        //비동기 함수 fetchData 작성 및 호출
        const fetchData2 = async() => {
            const jsonData = await fetchData("http://localhost:5173/data/avatar.json");
            setData(jsonData.aList);
        }
        loadData();
        // fetch("http://localhost:5173/data/list.json")
        //     .then((response) => response.json())
        //     .then((jsonData) => setData(jsonData))
        //     .catsch((error) => console.log(error));
    }, []);

    console.log('data-->', data);    

    return (
        <>
            {/* <AvatarImageList imgList={list} /> */}
        </>
    )
}