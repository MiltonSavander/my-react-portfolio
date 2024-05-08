import { useContext } from "react";
import { LanguageContext } from "./App";

function CTA() {
  const { english } = useContext(LanguageContext);
  return (
    <div
      id="kontakta"
      className="flex flex-col gap-2 h-[60vh] justify-center items-center"
    >
      <a href="mailto:milton.savander@gmail.com">
        <button className="cta-button max-sm:scale-[0.85]">
          {english ? "Contact me" : "Kontakta mig"}
        </button>
      </a>
    </div>
  );
}

export default CTA;
