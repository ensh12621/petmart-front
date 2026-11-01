"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";



export default function HeaderContent() {

    const pathname = usePathname();

    return (
        <section>
            <h1 className="hidden">헤더</h1>

            <div className="bg-[#faf6f0] ">
                <div className="w-8/10 flex justify-between items-center m-auto">

                    <Link href="/"
                        className="text-2xl font-bold text-orange-600 cursor-pointer py-5">
                        Petmart
                    </Link>

                    <nav>
                        <ul className="flex gap-4">
                            <li>
                                <Link href="/"
                                    className={`text-md font-bold  cursor-pointer ${pathname == '/' ? "text-orange-500" : "text-[#644b46]"} `}>
                                    홈
                                </Link>
                            </li>

                            <li>
                                <Link href="/intro"
                                    className={`text-md font-bold  cursor-pointer ${pathname == '/intro' ? "text-orange-500" : "text-[#644b46]"} `}>
                                    소개하기
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                    className={`text-md font-bold  cursor-pointer ${pathname == '/contact' ? "text-orange-500" : "text-[#644b46]"} `}>
                                    문의하기
                                </Link>
                            </li>
                        </ul>

                    </nav>

                    <Link href="/login">
                        <FaUser />
                    </Link>

                </div>





            </div>



        </section>
    );
}