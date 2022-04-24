import React from "react";
import styled from "@emotion/styled";
import cn from "classnames";
import { Link } from "react-router-dom";
import { useMemo } from "react";

interface LinkProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}

const LinkTag = ({ onClick, children }: LinkProps) => {
  return <NavFilterLink onClick={onClick}>{children}</NavFilterLink>;
};
const NavFilterLink = styled.a`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default LinkTag;
