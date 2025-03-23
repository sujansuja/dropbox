'use client'
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import * as motion from "motion/react-client"
import { useState } from "react";

export default function ShrinkingBox() {

    const [middleBoxProps, setMiddleBoxProps] = useState({
        text: "At Dropbox, our Brand Guidelines help us infuse everything we make with identity.",
        bg: "#fff",
        colour: "#0061fe",
        transitionDuration: "0.4s",
        width: "calc(-2px + min(800px, -64px + min(100vw, 100vh)))"
    })

    const { scrollYProgress } = useScroll();

    const middleBoxWidth = useTransform(scrollYProgress, [0.5, 1], [Math.min(500, Math.min(global?.window?.innerHeight, global?.window?.innerWidth) - 64), global?.window?.innerWidth > 991 ? 89 : 80])

    const box1XProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])
    const box1YProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])

    const box2XProp = useTransform(scrollYProgress, [0, 1], [100, 0])
    const box2YProp = useTransform(scrollYProgress, [0, 1], [-1200, 0])

    const box3XProp = useTransform(scrollYProgress, [0, 1], [1200, 0])
    const box3YProp = useTransform(scrollYProgress, [0, 1], [10, 0])

    const box4XProp = useTransform(scrollYProgress, [0, 1], [2000, 0])
    const box4YProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])

    const box5XProp = useTransform(scrollYProgress, [0, 1], [-2000, 0])
    const box5YProp = useTransform(scrollYProgress, [0, 1], [2000, 0])

    const box6XProp = useTransform(scrollYProgress, [0, 1], [-1200, 0])
    const box6YProp = useTransform(scrollYProgress, [0, 1], [100, 0])

    const box7XProp = useTransform(scrollYProgress, [0, 1], [100, 0])
    const box7YProp = useTransform(scrollYProgress, [0, 1], [1200, 0])

    const box8XProp = useTransform(scrollYProgress, [0, 1], [2000, 0])
    const box8YProp = useTransform(scrollYProgress, [0, 1], [2000, 0])

    const boxesScale = useTransform(scrollYProgress, [0, 1], [2, 1])

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
        if (latest <= 0.12043718301937157) {
            setMiddleBoxProps({
                text: "At Dropbox, our Brand Guidelines help us infuse everything we make with identity.",
                bg: "#fff",
                colour: "#0061fe",
                transitionDuration: "0.4s",
                width: "calc(-2px + min(800px, -64px + min(100vw, 100vh)))"
            })
        }
        else if (latest <= 0.5) {
            setMiddleBoxProps({
                text: "From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.",
                bg: "#0061fe",
                colour: "#fff",
                transitionDuration: "0.4s",
                width: "min(500px, min(100vw, 100vh) - 64px)"
            })
        }
        else {
            setMiddleBoxProps({
                text: "",
                bg: "#0061fe",
                colour: "#fff",
                transitionDuration: "0s",
                width: middleBoxWidth.get() + "px"
            })
            console.log(middleBoxWidth.get() + "px");

        }
    })

    return (
        <main className="main">
            <section className="middle-wrap">
                <motion.div
                    className={`middle phase-${scrollYProgress.get() <= 0.12043718301937157 ? "one" : scrollYProgress.get() <= 0.5 ? "two" : "three"} `}
                    style={{
                        background: middleBoxProps.bg,
                        color: middleBoxProps.colour,
                        transitionDuration: middleBoxProps.transitionDuration,
                        height: middleBoxProps.width,
                        width: middleBoxProps.width,
                    }}
                >
                    <div className="middle-text-cont">
                        <motion.p className="middle-text-one" style={{
                            opacity: scrollYProgress.get() >= 0.5 ? 0 : scrollYProgress.get() <= 0.12043718301937157 ? 1 : 0,
                            transitionDuration: middleBoxProps.transitionDuration
                        }}>At Dropbox, our Brand Guidelines help us infuse everything we make with identity.</motion.p>
                        <motion.p className="middle-text-two" style={{
                            opacity: scrollYProgress.get() <= 0.5 && scrollYProgress.get() >= 0.12043718301937157 ? 1 : 0,
                            transitionDuration: middleBoxProps.transitionDuration
                        }}>From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.</motion.p>
                        <div className="middle-logo">
                            <svg width="60px" height="60px" viewBox="0 -19 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <g fill={middleBoxProps.colour}>
                                    <polygon points="63.9945638 0 0 40.7712563 63.9945638 81.5425125 128 40.7712563">
                                    </polygon>
                                    <polygon points="192.000442 0 128 40.7750015 192.000442 81.5500031 256.000885 40.7750015">
                                    </polygon>
                                    <polygon points="0 122.321259 63.9945638 163.092516 128 122.321259 63.9945638 81.5500031">
                                    </polygon>
                                    <polygon points="192 81.5500031 128 122.324723 192 163.099442 256 122.324723">
                                    </polygon>
                                    <polygon points="64 176.771256 128.005436 217.542513 192 176.771256 128.005436 136">
                                    </polygon>
                                </g>
                            </svg>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section className={`cards-cont ${box1XProp.get() == 0 ? "done" : ""}`}>
                <motion.div
                    style={{
                        transform: `translateX(${box1XProp.get()}px) translateY(${box1YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Framework</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box2XProp.get()}px) translateY(${box2YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Voice & Tone</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box3XProp.get()}px) translateY(${box3YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Logo</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box4XProp.get()}px) translateY(${box4YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Typography</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box5XProp.get()}px) translateY(${box5YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Iconogrophy</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box6XProp.get()}px) translateY(${box6YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Colour</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box7XProp.get()}px) translateY(${box7YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Imagery</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box8XProp.get()}px) translateY(${box8YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >Motion</motion.div>
            </section>
        </main >
    );
}