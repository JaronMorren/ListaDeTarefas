import styled from "styled-components";
import colors from "../styles/colors";

const Svg = styled.svg`
  display: inline-block;
  line-height: 24px;
  margin-right: 8px;
  vertical-align: sub;

  * {
    transition: all 0.2s ease;
  }
`;

interface Props {
  checked: boolean;
}

export default function Checkbox({ checked }: Props) {
  return (
    <Svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="7.5"
        stroke={checked ? colors.greyDefault : "#CCCCCC"}
        fill={checked ? colors.greyDefault : "transparent"}
      />
      <path
        d="M12.2248 5.54644L6.45454 11.3167L4.56892 9.43109"
        stroke={checked ? "#FFFFFF" : "#CCCCCC"}
      />
    </Svg>
  );
}
