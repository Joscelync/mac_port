import {WindowControls} from "#components/Index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const {windows} = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    const {name, subtitle, image, description} = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile"/>
                <h2>{name}</h2>
            </div>

            <div className="window-content bg-white h-full overflow-y-auto">
                <div className="p-8 max-w-2xl mx-auto flex flex-col items-center">
                    {image && (
                        <img
                            src={image}
                            alt={name}
                            className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg border-4 border-white"
                        />
                    )}

                    <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
                        {name}
                    </h1>

                    {subtitle && (
                        <p className="text-xl text-gray-600 mb-8 font-medium text-center italic">
                            {subtitle}
                        </p>
                    )}

                    <div className="space-y-4 w-full">
                        {description?.map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed text-lg text-center">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;
