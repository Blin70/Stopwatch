import StartBtn from "./Components/StartBtn";
import StopBtn from "./Components/StopBtn";
import ResetBtn from "./Components/ResetBtn";

function App(){
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex relative h-80 w-2/5 justify-center border-4 border-solid border-black">
                <div className="relative h-3/5 w-10/12 top-8 border-2 border-solid border-black">
                
                </div>
                <div className="flex absolute bottom-0 w-full h-24 justify-center items-center gap-x-28">
                    <StartBtn/>
                    <StopBtn/>
                    <ResetBtn/>
                </div>
            </div>
        </div>
        );
};

export default App;