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
            <div className="container mx-auto w-full">
                <div className="flex flex-1 justify-between items-center w-full">
                    <a href="#">
                        <span className="text-2xl">Diogo Franco</span>
                    </a>
                    <div className="flex justify-center items-center">
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