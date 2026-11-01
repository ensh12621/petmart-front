import Link from "next/link";

export default function FooterContent() {
    return (
        <section>
            <h1 className="hidden">푸터 영역</h1>

            <div className="bg-[#f5f0e9] text-center">

                <div className="text-sm">
                    <span>Petmart</span>

                    <p>
                        반려동물과 함께하는 특별한 일상을 위한 펫 라이프스타일 스토어
                    </p>
                    <p>
                        대표전화: 02-1234-xxxx | 이메일 help@petmart.com
                    </p>
                    <p>
                        영업시간 평일 10:00 ~ 18:00 (주말, 공휴일 휴무)
                    </p>
                </div>

                <nav className="mt-3">
                    <ul className="flex gap-5 w-6/10 justify-center m-auto ">
                        <li>
                            <Link href="#"
                                className="text-sm">
                                이용약관
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="#"
                                className="text-sm">
                                개인정보처리방침
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-sm">
                                홈
                            </Link>
                        </li>
                        <li>
                            <Link href="#"
                                className="text-sm">
                                문의하기
                            </Link>
                        </li>
                    </ul>
                </nav>

            </div>

        </section>
    );

}