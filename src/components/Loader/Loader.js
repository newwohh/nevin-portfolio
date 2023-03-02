import "./Loader.css";
import { motion } from "framer-motion";
import { Audio, Puff } from "react-loader-spinner";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="loader">
        <div className="p">
          {" "}
          <Puff
            height="200"
            width="200"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass="p"
            visible={true}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
