import {MyCal} from "#components/Index.js";
import {MyTime} from "#components/Index.js";

const MyMusic = () => {
    return (
        <div>
            <div className="grid grid-cols-2 grid-rows-4 w-100 p-5 gap-3">
                <MyCal/>
                <MyTime/>

                <iframe
                    src="https://open.spotify.com/embed/album/3o81FH5FTYVtoBQOZr3T7y?si=_HCOexIHSn6Qd4q_h6wm6A"
                    className="w-full col-span-2 row-span-2 h-full"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                />
            </div>
        </div>
    )
}
export default MyMusic