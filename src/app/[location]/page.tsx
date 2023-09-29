import HomeButton from "@/components/HomeButton";
import {getForecast} from "@/utils/getForecast";

export function generateMetadata({params, searchParams}: Props) {
    return {
        title: `날씨 앱 - ${searchParams.name}`,
        description: `${searchParams.name}의 날씨 정보를 알려드립니다`
    }
}

type Props = {
    params: {
        location: String
    },
    searchParams: {
        name: String
    }
}

export default async function Detail({params, searchParams}: Props) {
    const name = searchParams.name
    const res = await getForecast(params.location);
    return <>
        <h1>{name}의 3일 예보</h1>
        <ul>
                {res.forecast.forecastday.map(day => (
                    <li key={day.date}>{day.date} / {day.day.condition.text} / {day.day.avgtemp_c}</li>
                ))}
        </ul>
        <HomeButton/>
    </>
}