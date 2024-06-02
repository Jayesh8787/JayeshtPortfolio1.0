import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Here are few technologies I have been working with 
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
        <h3>My</h3>
        </div>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          
          <h1>
            <motion.b whileHover={{color:"orange"}}>Tech Stack.</motion.b> 
          </h1>
        </div>
        <div className="title">
         <p style={{width:"700px", textAlign:"center"}}>Aspiring Full-Stack Developer with a strong foundation in both front-end and back-end technologies.
           Proficient in JavaScript, ReactJS, Node.js, and Redux for building dynamic and responsive web applications. 
           Gained hands-on experience developing RESTful APIs using Express and integrating them with MongoDB and MySQL 
           databases through academic projects and internships. Familiar with Java and Spring Boot for enterprise-level 
           applications and have foundational knowledge in .NET Core and C# for developing scalable solutions. Enthusiastic
            about problem-solving and eager to leverage new technologies to deliver innovative solutions.</p>
        </div>
        <div> 
          <br/>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >
       {/* 1 box */}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=FRRACRKRsw2s&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <br/>
        <h2 style={{textAlign:"center"}}>Java</h2>
        </motion.div>
      {/* 2 box */}
      <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=t4YbEbA834uH&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>ReactJS</h2>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=ouWtcsgDBiwO&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>Nodejs</h2>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=laVIsJnTtYoj&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h3 style={{textAlign:"center"}}>JavaScript</h3>
        </motion.div>
       
      </motion.div>
      <br/>
      <br/>
      <motion.div className="listContainer" variants={variants} >
       {/* 1 box */}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=59890&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <br/>
        <h2 style={{textAlign:"center"}}>.NetCore</h2>
        </motion.div>
      {/* 2 box */}
      <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=CMVEhOBzk3Zp&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>HTML</h2>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=5cVdiiKKi0vX&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>CSS</h2>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=59927&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>MySQL</h2>
        </motion.div>
       
      </motion.div>

      <br/>
      <br/>
      <motion.div className="listContainer" variants={variants} >
       {/* 1 box */}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=o6OvAxG0nzTH&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <br/>
        <h3 style={{textAlign:"center"}}>MongoDB</h3>
        </motion.div>
      {/* 2 box */}
      <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=Fycm8TUhWmFU&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>C#</h2>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=59968&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>C++</h2>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
        <img src="https://img.icons8.com/?size=100&id=8EbY3Bnfw0aL&format=png&color=000000" alt="" id="tech-stack-logo"/>
        <h2 style={{textAlign:"center"}}>Figma</h2>
        </motion.div>
       
      </motion.div>
      <br/>
    
    </motion.div>
    
  );
};

export default Services;
