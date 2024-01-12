
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import BtnPrimary from "../buttons/primary";
import Image from "next/image";
import { AboutImg } from "@/assets";

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    return (
        <section id="about" className="section" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row">
                    <div className="flex">
                        <div className="flex-1 p-10">
                            <Image src={AboutImg} alt="about" title="about" width="50%" height="50%" />
                        </div>
                        <div className="flex-1 ml-4">
                            <h2 className="h2 text-pink-500">Sobre mim</h2>
                            <h3>Eu sou um desenvolvedor full-stack com mais de 15 anos de experiencia</h3>
                            <p>
                                !Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div>
                                    <div className="text-[40px] text-gradient">
                                        {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                                    </div>
                                    <div className="text-sm tracking-[2px]">Anos de <br />experiência</div>
                                </div>
                                <div>
                                    <div className="text-[40px] text-gradient">
                                        {InView ? <CountUp start={0} end={13} duration={3} /> : null}
                                    </div>
                                    <div className="text-sm tracking-[2px]">Anos de <br />experiência</div>
                                </div>
                                <div>
                                    <div className="text-[40px] text-gradient">
                                        {InView ? <CountUp start={0} end={13} duration={3} /> : null} K+
                                    </div>
                                    <div className="text-sm tracking-[2px]">Projetos <br />Completos</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-8 items-center">
                                <BtnPrimary type="anchor" href="#">Contatos</BtnPrimary>
                                <a href="#" className="text-gradient">Meu portifolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}