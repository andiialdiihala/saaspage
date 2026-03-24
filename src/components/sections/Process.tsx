import { motion } from "framer-motion"
import { processData } from "@/constants"
import * as Variants from "@/lib/motionVariants"
import { processBanner } from "@/assets"


export const Process = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="section-head">
                    <motion.p
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-subtitle">
                        {processData.sectionSubtitle}
                    </motion.p>

                    <motion.h2
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-title">
                        {processData.sectionTitle}
                    </motion.h2>

                    <motion.p
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-text">
                        {processData.sectionText}
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 lg:items-center">
                    {/* Kolom kiri: list */}
                    <div className="grid gap-7 lg:gap-10">
                        {processData.list.map(({ icon, text, title }, index) => (
                            <motion.div
                                key={index}
                                variants={Variants.staggerContainer}
                                initial="start"
                                whileInView="end"
                                viewport={{ once: true }}
                                className="flex flex-col md:flex-row lg:items-center items-start gap-4"
                            >
                                <motion.div 
                                variants={Variants.fadeInScale}
                                className="flex justify-center">
                                    {icon}
                                </motion.div>

                                <div className="grid gap-2 md:gap-3">
                                    <motion.h3 
                                    variants={Variants.fadeInLeft}
                                    className="text-xl lg:text-2xl">
                                        {title}
                                    </motion.h3>
                                    <motion.p 
                                    variants={Variants.fadeInLeft}
                                    className="text-sm text-muted-foreground md:text-base">
                                        {text}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Kolom kanan: gambar */}
                    <motion.figure 
                    variants={Variants.fadeInUp}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="max-lg:-order-1 mx-auto bg-muted-foreground/50 rounded-3xl max-w-[580px] overflow-hidden p-8 !pb-0 lg:p-10">
                        <img
                            src={processBanner}
                            alt=""
                            width={500}
                            height={500}
                            className="w-full h-full object-contain object-bottom"
                        />
                    </motion.figure>
                </div>
            </div>
        </div>
    )
}