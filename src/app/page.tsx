import Link from "next/link";
import style from './style.module.css';
import {getCurrentWeather} from "@/utils/getCurrentWeather";
import {getTime} from "@/utils/getTime";
import RevalidateButton from "@/components/RevalidateButton";

export default async function Home() {
    const res = await getCurrentWeather('seoul');
    const time = await getTime(res.location.tz_id);

    // 날짜 및 시간 포맷팅 함수
    const formatDateTime = (dateTime: String) => {
        const date = new Date(dateTime);
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
    };

    console.log(res);
    return <>
        <h1>날씨 앱</h1>
        <h3>{formatDateTime(time.dateTime)}</h3>
        <ul className={style.list}>
            <li>
                <Link href="/seoul?name=서울">서울</Link>
                <span>{res.current.condition.text}</span>
            </li>
            <li>
                <Link href="/NYC?name=뉴욕">뉴욕</Link>
            </li>
            <li>
                <Link href="/london?name=런던">런던</Link>
            </li>
        </ul>
        <RevalidateButton tag={'time'}/>
    </>;
}
