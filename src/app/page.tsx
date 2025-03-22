'use client'
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import * as motion from "motion/react-client"
import { useRef, useState } from "react";

export default function ShrinkingBox() {

    const [middleBoxProps, setMiddleBoxProps] = useState({
        scale: 1,
        text: "At Dropbox, our Brand Guidelines help us infuse everything we make with identity.",
        bg: "#fff",
        colour: "#0061fe",
        transitionDuration: "0.4s",
        width: "calc(-2px + min(800px, -64px + min(100vw, 100vh)))"
    })

    const middleBoxRef = useRef(null)

    const { scrollYProgress } = useScroll();

    const test = useTransform(scrollYProgress, [0.5, 1], [0.68, 0.1])
    const middleBoxWidth = useTransform(scrollYProgress, [0.5, 1], [Math.min(500, Math.min(global?.window?.innerHeight, global?.window?.innerWidth) - 64), global?.window?.innerWidth > 991 ? 70 : 60])

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

    // useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("scrollY: Page scroll: ", latest)
    // })
    // useMotionValueEvent(scrollX, "change", (latest) => {
    // console.log("scrollX: Page scroll: ", latest)
    // })
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest <= 0.12043718301937157) {
            setMiddleBoxProps({
                scale: 0.98,
                text: "At Dropbox, our Brand Guidelines help us infuse everything we make with identity.",
                bg: "#fff",
                colour: "#0061fe",
                transitionDuration: "0.4s",
                width: "calc(-2px + min(800px, -64px + min(100vw, 100vh)))"
            })
        }
        else if (latest <= 0.5) {
            setMiddleBoxProps({
                scale: 0.68,
                text: "From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.",
                bg: "#0061fe",
                colour: "#fff",
                transitionDuration: "0.4s",
                width: "min(500px, min(100vw, 100vh) - 64px)"
            })
        }
        else {
            setMiddleBoxProps({
                scale: test.get(),
                text: "",
                bg: "#0061fe",
                colour: "#fff",
                transitionDuration: "0s",
                // width: window.innerWidth - latest * 1000 + "px"
                width: middleBoxWidth.get() + "px"
            })
        }
    })

    // useMotionValueEvent(scrollXProgress, "change", (latest) => {
    // console.log("scrollXProgress: Page scroll: ", latest)
    // })



    return (
        <main className="main">
            <section className="middle-wrap">
                <motion.div
                    ref={middleBoxRef}
                    className={`middle phase-${scrollYProgress.get() <= 0.12043718301937157 ? "one" : scrollYProgress.get() <= 0.5 ? "two" : "three"} `}
                    animate={{
                        // scale: middleBoxProps.scale
                    }}
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
                            // display: scrollYProgress.get() >= 0.5 ? "none" : "block",
                            opacity: scrollYProgress.get() >= 0.5 ? 0 : scrollYProgress.get() <= 0.12043718301937157 ? 1 : 0,
                            transitionDuration: middleBoxProps.transitionDuration
                        }}>At Dropbox, our Brand Guidelines help us infuse everything we make with identity.</motion.p>
                        <motion.p className="middle-text-two" style={{
                            // display: scrollYProgress.get() >= 0.5 ? "none" : "block",
                            opacity: scrollYProgress.get() <= 0.5 && scrollYProgress.get() >= 0.12043718301937157 ? 1 : 0,
                            transitionDuration: middleBoxProps.transitionDuration
                        }}>From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.</motion.p>
                        <div className="middle-logo">
                            <svg width="50px" height="50px" viewBox="0 -19 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                                <g fill={middleBoxProps.scale >= 0.98 ? "#0061FF" : "#ffffff"}>
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
            <section className="cards-cont">
                <motion.div
                    style={{
                        transform: `translateX(${box1XProp.get()}px) translateY(${box1YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >1</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box2XProp.get()}px) translateY(${box2YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >2</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box3XProp.get()}px) translateY(${box3YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >3</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box4XProp.get()}px) translateY(${box4YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >4</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box5XProp.get()}px) translateY(${box5YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >5</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box6XProp.get()}px) translateY(${box6YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >6</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box7XProp.get()}px) translateY(${box7YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >7</motion.div>
                <motion.div
                    style={{
                        transform: `translateX(${box8XProp.get()}px) translateY(${box8YProp.get()}px) scale(${boxesScale.get()})`
                    }}
                >8</motion.div>
            </section>

        </main >
    );
}