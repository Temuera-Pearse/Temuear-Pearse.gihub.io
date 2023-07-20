import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Breaks from '../components/Breaks/Breaks'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Title from '../components/Title/Title'
import Paragraph_1 from '../components/Paragraphs/Paragraph_1'
import SymbolBar from '../components/SymbolBar/SymbolBar'
import ProjectBoxContent from '../components/ProjectBox/ProjectBoxContent'
import ProfilePic from '../components/ProfilePic/ProfilePic'
function MainPage() {
  const [, setScrollPositiion] = useState(0)
  const { scrollYProgress } = useScroll()
  const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      setScrollPositiion(currentPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen">
      <div className="z-20 flex justify-center items-center h-screen overflow-hidden">
        <video
          className="fixed inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source
            src="landingBackground/IMG_1419.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="z-0 bg-scroll absolute inset-0 bg-opacity-50">
        <motion.div
          className="FullScreen__logo fixed inset-0 flex justify-center items-center"
          style={{ translateY, scale }}
        >
          <img
            data-min="160"
            data-max="1000"
            src="/pics/_20220617nib_milkyway.jpg"
            alt="space"
            className="w-screen h-screen object-cover transition-transform duration-500 ease-in-out"
          />
        </motion.div>
        <Breaks />

        <div className="flex-wrap">
          <div className="flex justify-center">
            <Title />
          </div>
          <div className="flex justify-center">
            <SymbolBar />
          </div>

          <div className="flex justify-center mx-10 my-10">
            <Header />
          </div>
          <div className="flex flex-wrap mx-10 my-10">
            <div className="m-5 flex-1">
              <ProfilePic />
            </div>
            <div className="m-5 flex-1">
              <Paragraph_1 />
            </div>
          </div>

          <br />
          <div className=" mx-10 my-10">
            <ProjectBoxContent />
          </div>
          <br />
          <div className="mx-10 my-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
