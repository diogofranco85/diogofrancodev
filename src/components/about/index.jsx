
import CountUp from "react-countup";
import { InView, useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import BtnPrimary from "../buttons/primary";
import Image from "next/image";
import { AboutImg } from "@/assets";
import Translator from "../i18n/translator";

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.5
    })
    return (
        <section id="about" className="section" ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    <div className="flex">
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex-1 lg:p-10">
                            <Image src={AboutImg} alt="about" title="about" width="50%" height="50%" />
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex-1 ml-4">
                            <h2 className="h2 text-pink-500">Sobre mim</h2>
                            <h3>
                                <Translator path="about.title" />
                            </h3>
                            <p className="mb-6">
                                <Translator path="about.message" />
                            </p>
                            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                                <div>
                                    <div className="text-[28px] lg:text-[40px] text-gradient">
                                        {inView ? <CountUp start={0} end={20} duration={10} /> : null}
                                    </div>
                                    <div className="text-sm tracking-[2px]">
                                        <Translator path="about.experience" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[28px] lg:text-[40px] text-gradient">
                                        {inView ? <CountUp start={0} end={23} duration={10} /> : null}
                                    </div>
                                    <div className="text-sm tracking-[2px]">
                                        <Translator path="about.project" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[28px] lg:text-[40px] text-gradient">
                                        {inView ? <CountUp start={0} end={2} duration={3} /> : null} K+
                                    </div>
                                    <div className="text-sm tracking-[2px]">
                                        <Translator path="about.user" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 flex gap-x-8 items-center">
                                <BtnPrimary type="anchor" href="#">Contatos</BtnPrimary>
                                <a href="#" className="text-gradient">Meu portifolio</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}