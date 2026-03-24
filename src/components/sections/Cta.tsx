import { motion } from "framer-motion"
import { ctaData } from "@/constants"
import * as Variants from "@/lib/motionVariants"
import { Button } from "@/components/ui/button"
import { ctaBanner } from "@/assets"


export const Cta = () => {
    return (
        <div className="section">
            <div className="container">
                <motion.div 
                variants={Variants.fadeInUp}
                initial="start"
                whileInView="end"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 lg:items-center bg-muted-foreground/10 rounded-xl overflow-hidden">
                    <div className="p-8 md:p-16 xl:p-20">
                        <motion.h2
                        variants={Variants.fadeIn}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="text-[24px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10">
                            {ctaData.text}
                        </motion.h2>

                        <motion.div 
                        variants={Variants.fadeIn}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="flex items-center gap-3 lg:gap-4">
                            <Button className="bg-foreground text-background hover:bg-foreground/80">Free Trial</Button>

                            <Button
                                variant='outline'
                                className="!bg-transparent border-current"
                                >
                                Pricing & Plans
                            </Button>
                        </motion.div>
                    </div>

                    <motion.figure 
                    variants={Variants.fadeInLeft}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="-order-1 pt-14 ps-8 sm:ps-12 md:ps-14 lg:order-none lg:p-0">
                        <img 
                        src={ctaBanner}
                        alt="" 
                        className="w-full h-full object-contain object-right"
                        />
                    </motion.figure>
                </motion.div>
            </div>
        </div>
    )
}