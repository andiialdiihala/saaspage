import { motion } from "framer-motion"
import { reviewData } from "@/constants"
import * as Variants from "@/lib/motionVariants"
import { Card, CardHeader, CardFooter, CardContent, CardTitle } from "@/components/ui/card"

export const Review = () => {
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
                        {reviewData.sectionSubtitle}
                    </motion.p>

                    <motion.h2
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-title">
                        {reviewData.sectionTitle}
                    </motion.h2>
                </div>

                <motion.div 
                variants={Variants.staggerContainer}
                initial="start"
                whileInView="end"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reviewData.reviewCard.map(({ title, text, reviewAuthor, date }, index) => (
                        <motion.div
                            variants={Variants.fadeInUp}
                            key={index}>
                            <Card className="relative border-none bg-muted-foreground/10">
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        {title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <p className="text-sm text-muted-foreground line-clamp-3">
                                        {text}
                                    </p>
                                </CardContent>

                                <CardFooter className="block">
                                    <p>{reviewAuthor}</p>
                                    <p className="text-xs text-muted-foreground">{date}</p>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}