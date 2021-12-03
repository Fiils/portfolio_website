import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SiNextdotjs, SiReact, SiJavascript, SiNodedotjs, SiTsnode, SiSass } from 'react-icons/si'
import { RiArrowDownSLine } from 'react-icons/ri'
import styles from '../styles/scss/Home.module.scss'

const CanvasButtonBKG = dynamic(() => import('../components/CanvasButtonBKG'), { ssr: false })

const Home: NextPage = () => {
  const[ miButtonHover, setMiButtonHover ] = useState(false);
  const[ miButtonClick, setMiButtonClick ] = useState(false);
  const[ allTech, setAllTech ] = useState(false);

  function buttonHovered(){
    setMiButtonHover(!miButtonHover);
  }

  function buttonClicked(){
    setMiButtonClick(!miButtonClick);
  }

  function allTechnologiesClick(){
    setAllTech(!allTech)
  }

  console.log(miButtonClick)

  return (
    <div>
      <Head>
        <title>IIAlex</title>
        <meta name="description" content="portfolio website" />
        <link rel="icon" href="/logo.svg" />
      </Head> 
     <nav className={`${styles.navbar} ${miButtonHover && !miButtonClick ? 'blurred' : ''}`}></nav>

     <div className={`${styles.image} ${miButtonHover && !miButtonClick ? 'blurred' : ''}`}></div>

     <div className={styles.more_info_section}>
       <div className={styles.mi_flex_button}>
         <CanvasButtonBKG />
         <a href="#aboutme"><button className={styles.mi_button} onClick={buttonClicked} onMouseEnter={buttonHovered} onMouseLeave={buttonHovered} type="button" name="more_info" disabled={miButtonClick ? true : false}>About me!</button></a>
         <style jsx global>{
           `
           html {
             scroll-behavior: smooth;
           }
           .blurred { 
              filter: blur(2px);
              backdrop-filter: opacity(0);
              animation: blur 1s;
           }
           @keyframes blur {
             from {filter: blur(0)}
             to {filter: blur(2px)}
           }
           `
          }</style>
       </div>
     </div>
     {miButtonClick && <div id="aboutme" className={styles.divider}></div>}
     {miButtonClick && 
      <div className={styles.sec_content}>

        <div className={styles.about_me}>
          <figure>
            <Image className={styles.item_am_2_image} src="https://res.cloudinary.com/media-cloud-dw/image/upload/v1638460198/Portfolio-Website/testpp_jijtxr.jpg"
                  width={300} height={300} />
            <figcaption>Ipatov Ioan Alexandru, 16</figcaption>
          </figure>
          <p className={styles.item_am_2}>
          “I am a very passionate person when it comes to programming, especially to web development. For many years my goal 
          has been to become a better and better web developer. It first started as a hobby, self-teaching myself, and since then, my will
           for learning everything there is about web-related stuff has only been growing. I now mainly”
          </p>
        </div>

        <div className={styles.divider}></div>

        <div>
          <div className={styles.spec_flex}>
              <p>Over the course of many years I've managed to learn a vast variety of programming languages, libraries and technologies, covering both frotend
                and backend developments. This way I was able to understand the logic of a website, while gathering a lot of technical
                knowledge.
              </p>
              <div className={styles.tech_logos}>
                <SiNextdotjs  size={70} />
                <SiReact size={70} />
                <SiJavascript size={70} />
                <SiNodedotjs size={70} />
                <SiTsnode size={70} />
                <SiSass size={70} />
              </div>
          </div>
          <div className={styles.all_tech}>
              <a href="#knd">
                <button onClick={allTechnologiesClick}>
                  <RiArrowDownSLine size={30}/>
                </button>
              </a>
          </div>
          {allTech && 
            <div id="knd" className={styles.list_all_tech}>
              <ul>
                <h3>Programing Languages:</h3>
                <li>Javascript</li>
                <li>C++</li>
                <li><Link href="https://www.typescriptlang.org/"><a target="_blank">TypeScript</a></Link></li>
              </ul>
              <ul>
                <h3>Libraries:</h3>
                <li><Link href="https://reactjs.org"><a target="_blank">React.js</a></Link></li>
                <li><Link href="https://michalsnik.github.io/aos/"><a target="_blank">AOS</a></Link></li>
                <li><Link href="https://axios-http.com/docs/intro"><a target="_blank">Axios</a></Link></li>
                <li><Link href="https://gulpjs.com/"><a target="_blank">Gulp.js</a></Link></li>
                <li><Link href="https://mongoosejs.com/"><a target="_blank">Mongoose</a></Link></li>
                <li><Link href="https://expressjs.com/"><a target="_blank">Express.js</a></Link></li>
              </ul>
              <ul>
                <h3>Frameworks:</h3>
                <li><Link href="https://nextjs.org/"><a target="_blank">Next.js</a></Link></li>
              </ul>
              <ul>
                <h3>Technologies:</h3>
                <li><Link href="https://nodejs.dev/"><a target="_blank">Node.js</a></Link></li>
                <li><Link href="https://www.mongodb.com/"><a target="_blank">MongoDB</a></Link></li>
                <li><Link href="https://sass-lang.com/"><a target="_blank">SCSS</a></Link></li>
                <li><Link href="https://postcss.org/"><a target="_blank">PostCSS</a></Link></li>
              </ul>
              <ul>
                <h3>Tools:</h3>
                <li><Link href="https://git-scm.com/"><a target="_blank">Git</a></Link></li>
                <li><Link href="https://yarnpkg.com/"><a target="_blank">Yarn</a></Link></li>
                <li><Link href="npmjs.com"><a target="_blank">NPM</a></Link></li>
              </ul>
            </div>
          }
        </div>

      </div> 
     }


    </div>
  )
}

export default Home