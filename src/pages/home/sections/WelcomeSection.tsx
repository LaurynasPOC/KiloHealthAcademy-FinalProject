import React from "react";
import { theme } from "styles/theme";
import { Image } from "components";

import {
  SectionWrapper,
  Box,
  Typography,
  FlexWrapper,
  Container,
} from "components";
import { DefaultButton } from "components/buttons/DefaultButton";

import { Link } from "gatsby";

const WelcomeSection = () => {
  const quizUrl = "http://localhost:8000/quiz";
  return (
    <SectionWrapper>
      <Container>
        <FlexWrapper
          justifyContent={"center"}
          flexDirection={{ _: "column-reverse", tablet: "row-reverse" }}
        >
          <Box
            bg="white"
            m={{ _: "auto", laptop: "none" }}
            border={`2px solid ${theme.colors.primary}`}
            maxWidth="27.6875rem"
            maxHeight={"27.6875rem"}
          >
            <Image src="clockMan" alt="byckius" />
            <Box p={"1rem"}>
              <Typography
                lineHeight={"lh24"}
                fontSize={"fs24"}
                fontWeight={"fw600"}
                color="primary"
              >
                Manai, kad galėtum gyventi sveikiau, bet trūksta motyvacijos?
              </Typography>
              <Typography>
                Atsakyk į kelis klausimus ir sužinosim kaip galėtume tau padėti.
                Pradėkim nuo tavo lyties. &#x2193;
              </Typography>
              <FlexWrapper justifyContent={"space-around"}>
                <Link to={quizUrl}>
                  <DefaultButton>
                    <Image
                      height="1.25rem"
                      width="2.5rem"
                      src="male"
                      alt="man"
                    />
                  </DefaultButton>
                </Link>
                <Link to={quizUrl}>
                  <DefaultButton>
                    <Image
                      height="1.25rem"
                      width="2.5rem"
                      src="female"
                      alt="women"
                    />
                  </DefaultButton>
                </Link>
              </FlexWrapper>
            </Box>
          </Box>
          <Box
            bg="white"
            m={{ _: "auto", laptop: "none" }}
            maxHeight={"27.6875rem"}
            border={`2px solid ${theme.colors.primary}`}
            p="2rem"
            maxWidth="27.6875rem"
          >
            <Typography color="primary" type="h3">
              Labas
            </Typography>
            <Typography
              color="black"
              lineHeight={{
                _: "lh16",
                smMobile: "lh16",
                mobile: "lh24",
                tablet: "lh28",
              }}
              type="body16"
            >
              Kas yra AisFIT? Tai projektas, siekiantis parodyti kaip ir kodėl
              TAU reikia rūpintis savo kūnu bei kaip atrasti balansą. Kodėl tai
              yra svarbu? Nuo to, kaip mūsų kūnas funkcionuoja, labai priklauso
              ne tik mūsų išvaizda, bet ir gyvenimo kokybė bei sveikata. Tikrai
              nesuklysiu sakydama, kad visi mes norime jaustis sveiki,
              energingi, pozityvūs ir neįveikiami. Pradedam jau šiandien! O kam
              gi tas balansas? Pasiekti tikslą yra viena, bet jį išlaikyti gali
              būti netgi sudėtingiau. Tad čia mums ir padės balansas tarp to,
              kas naudingiau kūnui, ir to, kas kartais labai reikalinga sielai.
            </Typography>
          </Box>
        </FlexWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WelcomeSection;
