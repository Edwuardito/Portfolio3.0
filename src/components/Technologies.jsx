import { RiReactjsLine } from "react-icons/ri"
import { FaGitAlt } from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType:"reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1 className="my-20 text-center text-4xl"
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0 , y: -100}}
            transition={{ duration: 1.5 }}
        >
            Tecnologies
        </motion.h1>
        <motion.div className="flex flex-wrap items-center justify-center gap-4"
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0 , x: -100}}
            transition={{ duration: 1.5 }}
        >
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                variants={iconVariants(2.5)}
                initial= "initial"
                animate= "animate"
            >
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                variants={iconVariants(3)}
                initial= "initial"
                animate= "animate"
            >
                <DiPostgresql className="text-7xl text-blue-700"/>
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                variants={iconVariants(5)}
                initial= "initial"
                animate= "animate"
            >
                <TbBrandTypescript className="text-7xl  text-blue-500"/>
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                variants={iconVariants(2)}
                initial= "initial"
                animate= "animate"
            >
                <BiLogoTailwindCss className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                variants={iconVariants(6)}
                initial= "initial"
                animate= "animate"
            >
                <FaNodeJs className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div className="rounded-2xl border-4 border-neutral-800 p-4"
                variants={iconVariants(4)}
                initial= "initial"
                animate= "animate"
            >
                <FaGitAlt className="text-7xl text-orange-700"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies