import { Link } from "react-router-dom";
import {FaArrowRight} from "react-icons/fa"
import { HomeDisplayBlog } from "./HomeDisplayBlog";

const HomeBlog = () => {

  return (
    <div className="w-full h-full mt-12">
      <div className="w-full h-full flex justify-between gap-8 p-8 lg:p-14">
        <div className="our-services">
        <Link to={"uitil"}><h1 className="text-5xl  lg:text-7xl font-extrabold">3D uitlijnen</h1></Link>  
        </div>

        <div className="text w-1/2 flex justify-end gap-10 mt-1">
          <Link to={"uitil"}>
          <p className="text-2xl mt-1 cursor-pointer">More </p></Link>
          <Link to={"uitil"}>
          <div className="mt-2 text-2xl"><FaArrowRight style={{width:"100%"}}/></div></Link>
        </div>
      </div>
      <HomeDisplayBlog  />
    </div>
  );
};

export default HomeBlog;
