"use client"
import Link from "next/link";
import I18n from "../i18n/i18n";
import Translator from "../i18n/translator";
import { usePathname } from "next/navigation";
import BtnPrimary from "../buttons/primary";

export default function Header() {
    const pathname = usePathname();
    return (
        <header id="home" className="py-8 w-full">
            <div className="container mx-auto w-full flex ">
                <div className="flex flex-1 justify-between flex-col lg:flex-row items-center w-full">
                    <a href="#">
                        <span className="text-4xl mb-4 lg:mb-0 lg:text-2xl">Diogo Franco</span>
                    </a>
                    <div className="flex mt-4 lg:mt-0 lg:justify-center items-center text-[14px]">
                        {
                            pathname === '/'
                                ? <BtnPrimary href="blog" >Blog</BtnPrimary>
                                : <BtnPrimary href="/" >Página Inicial</BtnPrimary>
                        }

                        <BtnPrimary href="/work-with-me">
                            <Translator path="home.workme" />
                        </BtnPrimary>
                        <I18n />
                    </div>
                </div>
            </div>
        </header>
    )
}