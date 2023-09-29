'use client'  // onClick 같은 이벤트 사용 시 CSR 사용

import {useRouter} from "next/navigation";

export default function HomeButton() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/');
    }

    return <button onClick={handleClick}>홈으로</button>
}