import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Pathology Lab Management System",
    img: "/pathlab.gif",
    desc: "Developed and implemented a streamlined Pathology Lab Management System focused on test booking, appointment scheduling, and digital report delivery..",
    tech:"#ReactJs  #Java   #SpringBoot  #Mysql  #Redux      #NodeJs",
    demo:"https://lifelinepathlab.netlify.app/",
    github:"https://github.com/Jayesh8787/Pathology-Lab-Management-System",
  },
  {
    id: 2,
    title: "Portfolio 1.0",
    img: "/portfolio.gif",
    desc: "Created a dynamic portfolio using React JS to showcase my skills and projects. The portfolio features seamless navigation with React Router, ensuring a smooth user experience. I designed a sleek and modern interface. The project is a concise representation of my proficiency in React JS, highlighting my skills, projects, and achievements for an engaging presentation.",
    tech:"#ReactJs     #HTML  #CSS   #JavaScript",
    demo:"https://jayeshkardile.netlify.app/",
    github:"https://github.com/Jayesh8787",
  },
  {
    id: 3,
    title: "Burger-Hut-Website",
    img: "/burger.gif",
    desc: "The Burger Hut website includes a header with a logo and a responsive navigation menu featuring links to Home, Menu, About Us, and Contact sections. The menu is hidden on small screens and can be toggled using a burger icon button. Main sections welcome users, showcase the menu, share the company's story, and provide contact information",
    tech:"     #HTML  #CSS   #JavaScript",
    demo:"https://jayesh8787.github.io/Burger-Hut-Website/",
    github:"https://github.com/Jayesh8787/Burger-Hut-Website",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  //   demo:"https://lifelinepathlab.netlify.app/",
  //   github:" http://localhost:5173/",
  // },
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
            <h3>{item.tech}</h3>
           <div> <a href={item.demo}>
              <button>See Demo</button>
            </a>
            <a href={item.github}>
              <button id="a1">Source Code</button>
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
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
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h5 style={{color:"white "}}>My Work,</h5>
        <h1>PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
