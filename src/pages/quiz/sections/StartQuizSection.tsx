import { SectionWrapper, Box, Typography } from "components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStartQuiz } from "state/slices/stageSlice";
import { Input } from "components/buttons/Input";
import { QuizButton } from "components/buttons/QuizButton";

const StartQuizSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const startQuizHandler = () => {
    dispatch(setStartQuiz({ username, email }));
  };

  return (
    <SectionWrapper height="100vh">
      <Box
        p={"1rem"}
        borderRadius={"br8"}
        m={"auto"}
        maxWidth="20rem"
        height={"20rem"}
        bg={"white"}
        textAlign={"center"}
      >
        <Box mt={"3rem"}>
          <Typography color="primary" type="h6">
            Susipažinkime!
          </Typography>
          <Box my="1rem">
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Vardas..."
            />
          </Box>
          <Box my="1rem">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="El paštas..."
            />
          </Box>
          <QuizButton onClick={startQuizHandler}>Kitas klausimas</QuizButton>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default StartQuizSection;
