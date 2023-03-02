import { motion } from "framer-motion";
import Nav from "./Nav/Nav";

function Header(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <header className="Header">
        <Nav change={props.change} checked={props.check} />
      </header>
    </motion.div>
  );
}

export default Header;
