import {WindowControls} from "#components/Index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
    const {windows} = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const {name, imageUrl} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2>{name}</h2>
            </div>

            <div className="window-content bg-white h-full overflow-hidden flex items-center justify-center">
                <div className="p-4 w-full h-full flex flex-col items-center justify-center">
                    <img
                        src={imageUrl}
                        alt={name}
                        className="max-w-full max-h-[85%] object-contain shadow-lg"
                    />
                    <h1 className="mt-4 text-xl font-semibold text-gray-800">
                        {name}
                    </h1>
                </div>
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;
