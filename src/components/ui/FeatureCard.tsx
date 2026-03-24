import * as Variants from "@/lib/motionVariants"
import { motion, useMotionValue, frame } from "motion/react"
import { useState, useCallback, useRef } from "react"
import type { MouseEvent } from "react"


interface FeatureCardProps {
    classes?: string
    children: React.ReactNode
}

export const FeatureCard = ({ classes, children }: FeatureCardProps) => {
    const glowRef = useRef<HTMLDivElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    const [showGlow, setShowGlow] = useState(false)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = useCallback((e: MouseEvent) => {
        const rect = cardRef.current?.getBoundingClientRect()

        frame.read(() => {
            x.set(e.clientX - Number(rect?.left))
            y.set(e.clientY - Number(rect?.top))
        })
    }, [x, y])

    return (
        <motion.div
            variants={Variants.staggerContainer}
            initial="start"
            whileInView="end"
            viewport={{ once: true }}
            className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
        >
            <div
                className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden"
                ref={cardRef}
                onMouseOver={() => setShowGlow(true)}
                onMouseOut={() => setShowGlow(false)}
                onMouseMove={handleMouseMove}
            >
                {children}
            </div>

            <motion.div
                ref={glowRef}
                className="absolute inset-0 rounded-[14px] pointer-events-none z-[2]"
                style={{
                    background: `radial-gradient(180px circle at ${x.get()}px ${y.get()}px, oklch(0.85 0.02 285.823 / 0.5) 0%, transparent 80%)`,
                    opacity: showGlow ? 1 : 0,
                    transition: "opacity 0.4s ease-in-out",
                    filter: "blur(60px)",
                    mixBlendMode: "soft-light",
                }}
            />


        </motion.div>
    )
}
