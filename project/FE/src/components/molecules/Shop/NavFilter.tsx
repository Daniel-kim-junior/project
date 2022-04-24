import React, { useRef, useState } from "react";
import FlexContainer from "../../templates/FlexContainer";
import LinkTag from "../../atoms/Shop/LinkTag";
import { useMemo } from 'react';

const ButtonFilter = () => {



  return (
    <FlexContainer>
      <LinkTag onClick={apiRecommend}>추천</LinkTag>
      <LinkTag onClick={apiLatest}>출시일</LinkTag>
      <LinkTag onClick={apiLowPrice}>낮은가격</LinkTag>
      <LinkTag onClick={apiHighPrice}>높은가격</LinkTag>
    </FlexContainer>
  );
};

export default ButtonFilter;
