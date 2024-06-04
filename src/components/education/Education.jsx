import { useRef } from "react";
import "./education.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Centre for Development of Advanced Computing (C-DAC)",
    img: "https://as2.ftcdn.net/v2/jpg/07/41/46/99/1000_F_741469989_fD4dIwcVNFJ9DVqoWcFdZvUj4FYuYFrP.jpg",
    desc: "Sept-2023 To Feb-2024  , Specialization:- PG-DAC" ,
  },
  {
    id: 2,
    title: "ADSUL TECHNICAL CAMPUS FACULTY OF MBA, AHMEDNAGAR",
    img: "https://as1.ftcdn.net/v2/jpg/05/92/03/18/1000_F_592031814_btPCnkAJXUzN3VvKzTYM30Lnq3ohhuzu.jpg",
    desc: "    Jun 2017 -May 2020 , Bachelor's degree in Civil Engineering",
  },
  {
    id: 3,
    title: "Sanjivani College of Engineering,Kopargaon",
    img: "https://as1.ftcdn.net/v2/jpg/02/88/66/48/1000_F_288664870_SZClsbLdgfjwiQJ00ekGiRZ5CkXtzHTH.jpg",
    desc: "    Aug 2014 - May 2017 , Diploma in Civil Engineering",
  },
 
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="education" ref={ref}>
      <div className="progress">
      <h5 style={{color:"white "}}>MY</h5>
        <h1>EDUCATION</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Education;
