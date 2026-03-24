import { motion } from "framer-motion"
import * as Variants from "@/lib/motionVariants"
import { overviewData } from "@/constants"
import { overviewBanner } from "@/assets"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import ReactPlayer from "react-player"
const Player = ReactPlayer as any;



export const Overview = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="section-head">
                    <motion.p
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-subtitle">
                        {overviewData.sectionSubtitle}
                    </motion.p>

                    <motion.h2
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-title">
                        {overviewData.sectionTitle}
                    </motion.h2>

                    <motion.p
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-text">
                        {overviewData.sectionText}
                    </motion.p>
                </div>

                <div>
                    <motion.div 
                    variants={Variants.fadeInScale}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="relative max-w-4xl mx-auto shadow-xl">
                        <motion.figure>
                            <img
                                src={overviewBanner}
                                alt=""
                                width={900}
                                height={600}
                            />
                        </motion.figure>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"
                                >
                                    <div className="sr-only">Play Video</div>
                                    <Play fill="primary" size={50} />
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="!p-0 overflow-hidden max-w-[640] xl-max-w-[1000px]">
                                <AspectRatio ratio={16 / 9}>
                                    <Player
                                        url="https://youtu.be.com/cvd2XGJBgLg"
                                        width="100%"
                                        height="100%"
                                    />

                                </AspectRatio>
                            </DialogContent>
                        </Dialog>

                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 xl:grid-cols-2  xl:items-center gap-5 mt-8 md:top-16">
                    <motion.p 
                    variants={Variants.fadeInRight}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="section-title text-center lg:max-w-[30ch] lg:mx-auto xl:text-left">
                        {overviewData.listTitle}
                    </motion.p>

                    <motion.div 
                    variants={Variants.staggerContainer}
                    initial="start"
                    whileInView="end"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-5 md:gap-10 xl:gap-8">
                        {overviewData.list.map(({ title, text }, index) => (
                            <motion.div 
                            variants={Variants.fadeInLeft}
                            initial="start"
                            whileInView="end"
                            viewport={{ once: true }}
                            key={index}
                            className="text-center"
                            >
                                <h3 className="text-3xl">{title}</h3>
                                <p className="text-muted-foreground">{text}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    )
}