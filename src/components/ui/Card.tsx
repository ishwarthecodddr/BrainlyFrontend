import Delete from "../icons/Deleteicon"
import { Shareicon } from "../icons/Shareicon"

interface Cardprops {
    title: string,
    startIcon?: any,
    shareIcon: any,
    deleteicon: any,
    // tags: string,
    // date: Date,
    type: "Twitter" | "Youtube",
    link: string
}
export const Card = (props: Cardprops) => {
    return <div className="shadow-md w-80 p-2 border border-gray-400 shadow-green-400">
        <div>
            <div className="flex items-center gap-2 justify-between">
                <div className="flex items-center ">
                    <div className="mx-5"><Shareicon size="md" /></div>
                    <div className="font- text-xl">{props.title}</div>
                </div>
                <div className="flex gap-2 text-gray-400">
                    <div><Shareicon size="md" /></div>
                    <div><Delete size="md" /></div>
                </div>
            </div>
        </div>
        <div className="mt-2">
            {props.type === "Youtube" && (
                <div className="relative w-full pt-[56.25%] z-[-1]">
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full rounded-md"
                        src={props.link.replace("watch?v=", "embed/")} 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>
            )}
            {props.type === "Twitter" && (
                <div className="z-[-1]">
                <blockquote className="twitter-tweet">
                    <a href={props.link.replace("x.com", "twitter.com")}></a>
                </blockquote>
                </div>
            )}
        </div>
    </div>
}