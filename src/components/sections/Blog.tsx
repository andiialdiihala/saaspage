import { motion } from "framer-motion"
import { blogData } from "@/constants"
import * as Variants from "@/lib/motionVariants"
import { Card, CardHeader, CardFooter, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export const Blog = () => {
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
                        {blogData.sectionSubtitle}
                    </motion.p>

                    <motion.h2
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-title">
                        {blogData.sectionTitle}
                    </motion.h2>

                    <motion.p
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        className="section-text">
                        {blogData.sectionText}
                    </motion.p>
                </div>

                <motion.div 
                variants={Variants.staggerContainer}
                initial="start"
                whileInView="end"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-none">
                    {blogData.blogs.map(({ imgSrc, title, badge, author: { avatarSrc, authorName, publishDate, readingTime }, }, index) => (
                        <motion.div 
                        key={index}
                        variants={Variants.fadeInUp}
                        initial="start"
                        whileInView="end"
                        viewport={{ once: true }}
                        >
                            <Card className="group border-none bg-muted-foreground/10">
                                <CardHeader>
                                    <figure className="rounded-lg overflow-hidden">
                                        <img 
                                        src={imgSrc} 
                                        alt={title}
                                        className="img-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </figure>
                                </CardHeader>

                                <CardContent>
                                    <Badge className="mb-3">{badge}</Badge>

                                    <CardTitle className="leading-normal">
                                        <a href="#">{title}</a>
                                    </CardTitle>
                                </CardContent>

                                <CardFooter className="gap-3">
                                    <Avatar>
                                        <AvatarImage src={avatarSrc} />

                                        <AvatarFallback>{authorName}</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <p className="text-sm mb-0.5">{authorName}</p>

                                        <div className="flex items-center gap-2">
                                            <time
                                            dateTime={publishDate}
                                            className="text-sm text-muted-foreground"
                                            >
                                                {publishDate}
                                            </time>

                                            <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>

                                            <p className="text-sm text-muted-foreground">{readingTime}</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}