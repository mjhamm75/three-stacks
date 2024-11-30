import styled from "styled-components";

const Indicator = styled.div<{ running: boolean }>`
  height: 12px;
  width: 12px;
  background-color: ${({ running }) => (running ? "green" : "red")};
  border-radius: 50%;
  display: inline-block;
`;

export function OnOff({ running }: { running: boolean }) {
  return <Indicator running={running} />;
}
