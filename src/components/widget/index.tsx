import { useState } from "react";
import { OnOff } from "../on-off";
import { services, getName } from "../../state";
import styled from "styled-components";
import { useInterval } from "../../hooks/use-interval";

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Flex = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
`;

const DependencyContainer = styled.div`
  padding-top: 14px;
  display: flex;
  flex-direction: column;
`;

export function Widget({
  serviceName,
  port,
  isRunning,
  dependencies,
  onPoll,
}: {
  serviceName: (typeof services)[number];
  port: number;
  isRunning: boolean;
  dependencies: {
    serviceName: (typeof services)[number];
    isRunning: boolean;
  }[];
  onPoll: ({ isRunning }: { isRunning: boolean }) => void;
}) {
  const [runningTime, setRunningTime] = useState<string>();
  const name = getName(serviceName);

  useInterval(() => {
    window.api.getProcessRunningTime(port).then((response: string) => {
      if (response !== "Bad port") {
        setRunningTime(response);
      }
      onPoll({ isRunning: response !== "Bad port" });
    });
  }, 1000);

  return (
    <Container>
      <Flex>
        <Title>{name}</Title>
        <OnOff running={isRunning} />
      </Flex>
      <div>Running time: {runningTime}</div>
      <DependencyContainer>
        {dependencies.map(({ serviceName, isRunning }) => (
          <Flex>
            <div>{getName(serviceName)}</div>
            <OnOff running={isRunning} />
          </Flex>
        ))}
      </DependencyContainer>
    </Container>
  );
}
