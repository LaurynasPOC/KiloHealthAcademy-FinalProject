import React from "react";
import { cancelQuiz } from "state/slices/stageSlice";
import { useDispatch } from "react-redux";

const FetchingSection = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default FetchingSection;
