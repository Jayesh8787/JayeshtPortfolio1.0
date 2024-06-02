import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
      <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jayesh Kardile
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/jayesh.kardilepatil">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/jayeshkardile/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://github.com/Jayesh8787">
            <img src="/github.png" alt="" />
          </a>
          <a href="mailto:jayeshkardile8787@gmail.com" target="_blank">
            <img src="/gmail.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
