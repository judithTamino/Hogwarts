import type { FunctionComponent } from "react";
import MoonLoader  from "react-spinners/MoonLoader";

interface LoaderProps {}
 
const Loader: FunctionComponent<LoaderProps> = () => {
  return ( 
   <div className="loader">
    <MoonLoader color="#f5d400" loading={true} size={60}/>
   </div>
   );
}
 
export default Loader;