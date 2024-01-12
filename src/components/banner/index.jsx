"use client"

import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { BannerImg } from "../../assets";
import { fadeIn } from "../../utils/variants";
import Translator from '../i18n/translator'
import Image from "next/image";
import BtnPrimary from "../buttons/primary";

export default function Banner() {
    return (
        <section id="banner" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
            <div className="container mx-auto text-white">
                <div className="flex flex-col lg:flex-row gap-y-8 lg:items-center lg:gap-y-12">
                    <div className="flex-1 text-center lg:text-left">
                        <motion.h1
                            variants={fadeIn('up', 0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="mb-3 text-[55px] font-bold leading-[0.8] lg:text-[70px]"
                        >
                            DIOGO <span>FRANCO</span>
                        </motion.h1>
                        <motion.div
                            className="mb-6 text-[24px] lg:text-[36px] font-semibold uppercase leading-[1]"
                            variants={fadeIn('up', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <span className="mr-4">
                                <Translator path="banner.title" />
                            </span>
                            <TypeAnimation sequence={[
                                "Developer",
                                2000,
                                "Software Enginner",
                                2000,
                                "Tech Lead",
                                2000,
                            ]}
                                speed={50}
                                className="text-purple-600"
                                wrapper="span"
                                repeat={Infinity}
                            />

                        </motion.div>
                        <motion.p
                            className="mb-8 max-w-lg mx-auto lg:mx-0"
                            variants={fadeIn('up', 0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                        >
                            <Translator path="banner.message" />
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up', 0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex max-w-max gap-x-6 items-center mb-12"
                        >
                            <BtnPrimary type="scroll" href="contact">
                                <Translator path="banner.btnContact" />
                            </BtnPrimary>
                            <a href="#" className="text-gradient">
                                <Translator path="banner.linkPortfolio" />
                            </a>
                        </motion.div>
                        <motion.div
                            variants={fadeIn('up', 0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
                            className="flex tex-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                            <FaGithub />
                            <FaYoutube />
                            <FaDribbble />
                        </motion.div>
                    </div>
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="hidden lg:flex flex-1 max-w-[400px] lg:max-w-[500px] mx-auto">
                        <Image src={BannerImg} alt="Banner" title="Banner" />
                    </motion.div>
                </div>

            </div>
        </section>
    )
}