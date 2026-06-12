import ContactForm from "../components/ContactForm";
import Applypage from "../components/Applypage";
export default function Home() {
    return (
        <div id="contact" className="contact-form-section">
            <Applypage></Applypage>
            <ContactForm></ContactForm>
        </div>
    );
}
