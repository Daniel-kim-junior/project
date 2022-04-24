import React from "react";
import styled from "@emotion/styled";
import cn from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  flex: string;
  color: string;
  outline: string;
  bgColor: string;
  size: string;
  type: "submit" | "reset" | "button";
  url?: string;
  after?: boolean;
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button = ({
  flex = "auto",
  children,
  color = "black",
  outline = "black",
  bgColor = "white",
  size = "normal",
  type = "button",
  after,
  className,
  onClick,
}: ButtonProps) => {
  const classCandiate = [size, className];
  const commonProps = {
    flex,
    children,
    color,
    outline,
    bgColor,
    size,
    onClick,
    type,
    after,
  };
  return (
    <StyledButton {...commonProps} className={cn(classCandiate)}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  flex: ${(props: ButtonProps) => props.flex};
  border: ${(props: ButtonProps) =>
    props.outline === "none" ? "none" : `0.7px solid ${props.outline}`};
  color: ${(props: ButtonProps) => props.color};
  background-color: ${(props: ButtonProps) =>
    props.bgColor === "transparent" ? "transparent" : props.bgColor};
  &.small {
    padding: 7px 7px;
    font-size: 1rem;
  }

  &.normal {
    padding: 10px 10px;
    font-size: 1.2rem;
  }
  &.big {
    padding: 14px 14px;
    font-size: 1.4rem;
  }

  &::after {
    content: "";
    display: ${(props: ButtonProps) => (props.after ? "block" : "none")};
    background-color: #dfe0e5;
    width: 0.1rem;
    height: 1.6rem;
  }
`;

export default Button;
