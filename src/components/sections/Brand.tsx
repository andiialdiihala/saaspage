import { motion } from "motion/react"
import { brands } from "@/assets"
import * as variants from "@/lib/motionVariants"

export const Brand = () => {
    return (
        <section className="section">
            <div className="container max-w-screen-lg">
                <motion.p
                    variants={variants.fadeInUp}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="text-center mb-4 md:mb-6">
                    Powering data insights and for today's startup and tomorrow's leader
                </motion.p>

                <motion.div
                    variants={variants.staggerContainer}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-5 md:gap-10">
                    {brands.map((brand, index) => (
                        <motion.figure
                            variants={variants.fadeInUp}
                            key={index}>
                            <img src={brand}
                                alt=""
                                className="opacity-[0.5] grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.figure>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}