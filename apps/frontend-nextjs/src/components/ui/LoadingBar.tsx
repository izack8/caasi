// simple loading bar animation, displayed while fetching data from API or loading components
import HotCherryLink from "../../../public/hot_cherry_running.gif";

function LoadingBar() {
  return (
    <img src={HotCherryLink.src} alt="Loading..." className="w-16 h-16 mx-auto mt-20" />
  );
}

export default LoadingBar;
