import {socials} from "#constants/index.js";
import {WindowControls} from "#components/Index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="p-5 space-y-5 flex gap-5">
                <img
                    src="/images/JoscelynContact.jpg"
                    alt="Joscelyn"
                    className="w-20 rounded-full"
                />

                <div className="space-y-1.5">
                    <h3>Let's Connect</h3>
                    <p>Curious about my work? I’d be happy to talk through my projects.</p>
                    <p>Or wanna just have a chat about tech? Let's do that too!</p>
                    <a className="my-link" href="mailto:Joscelyndc@outlook.com">Joscelyndc@outlook.com</a>
                </div>

                {/*<ul>*/}
                {/*    {socials.map(({id, bg, link, icon, text}) => (*/}
                {/*        <li key={id} style={{backgroundColor: bg}}>*/}
                {/*            <a*/}
                {/*                href={link}*/}
                {/*                target="_blank"*/}
                {/*                rel="noopener noreferrer"*/}
                {/*                title={text}*/}
                {/*            >*/}
                {/*                <img src={icon} alt={text} className="size-5" />*/}
                {/*                <p>{text}</p>*/}
                {/*            </a>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
