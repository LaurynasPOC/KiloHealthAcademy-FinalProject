import React from "react";
import Navbar from "components/navbar/Navbar";
import SubHeader from "components/globalElements/SubHeader";
import ImgAndText from "./sections/ImgAndText";
import { Container, SectionWrapper } from "components";
import Footer from "components/footer/Footer";

const About = () => (
  <>
    <Navbar />
    <SectionWrapper>
      <Container>
        <SubHeader text="Apie AisFit" />
        <ImgAndText
          img="aisFit"
          alt="byckius"
          hText="Pradėkite gyventi sveikiau jau šiandien"
          text="Sveika mityba ir sportas turėtų būti neatsiejama kiekvieno žmogaus gyvenimo dalis. Ir aš esu čia tam, kad padėčiau jums išmokti, kokio ir kiek maisto reikia jūsų kūnui, kaip valgyti sveikai ir skaniai, kaip reikėtų maitintis tam, kad atsikratyti papildomų kilogramų ar auginti raumenis, kaip pasiekti ilgalaikių rezltatų, kokius pratimus atlikti ir kaip treniruotis. Jeigu jūsų tikslas yra jaustis geriau, turėti stiprų imunitetą ir daugiau energijos, numesti svorio ar auginti raumenis, susidraugauti su maistu ir sportu, padarom tai kartu."
        />
        <SubHeader text="Susipažinkime, aš Aistė!" />
        <ImgAndText
          direction="row-reverse"
          img="aisFit2"
          alt="su marmalu"
          hText="Sertifikuota mitybos specialistė ir asmeninė trenerė"
          text="Labas, mano vardas Aistė.

            Sportas, mityba ir sveika gyvensena man buvo įdomu visą gyvenimą. Nuo pat vaikystės aš sportavau rankinio sporto šaką, dalyvavau Lietuvos ir Europos lygio varžybose. Profesionaliai žaidžiau rankinį Austrijos, Vokietijos ir Prancūzijos klubuose. Dabar aš vis dar myliu sportą, juo užsiimu kiek tik galiu ir padedu jį pamilti kitiems!
            
            Esu baigusi sporto bakalaurą, mitybos specialistės kursus bei daug skirtingų treniravimo kursų. Visos šios kvalifikacijos padėjo man rasti balansą tarp sveikos mitybos, stipraus ir sveiko kūno bei geros psichologinės būsenos.
            
            Aš stengiuosi perduoti visą savo patirtį ir žinias taip, kad jas būtų lengva pritaikyti realiame gyvenime.
            "
        />
      </Container>
    </SectionWrapper>
    <Footer />
  </>
);

export default About;
