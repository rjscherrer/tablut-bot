import styled from "styled-components";

const StyledButton = styled.button<StyleProps>`
  background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor === Style.PURPLE && "var(--secondary)" || "white"};
  font-weight: bold;
  color: ${({ buttonBackgroundColor }) => buttonBackgroundColor !== Style.PURPLE && "var(--secondary)" || "white"};
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid ${({ buttonBackgroundColor }) => buttonBackgroundColor === Style.PURPLE && "var(--secondary)" || "white"};

  &:hover {
    color: ${({ buttonBackgroundColor }) => buttonBackgroundColor === Style.PURPLE && "var(--secondary)" || "white"};
    background-color: ${({ buttonBackgroundColor }) => buttonBackgroundColor !== Style.PURPLE && "var(--secondary)" || "white"};
    border: 1px solid ${({ buttonBackgroundColor }) => buttonBackgroundColor === Style.PURPLE && "var(--secondary)" || "white"};
  }
`;

export interface StyleProps {
    buttonBackgroundColor: Style
}


export default function Button({ text, onClick, style }: Props) {

    return (
        <StyledButton buttonBackgroundColor={style} onClick={onClick}>{text}</StyledButton>
    )
}

export enum Style {
    WHITE, PURPLE
}

interface Props {
    text: string;
    onClick: () => void;
    style: Style
}
