import styled from "styled-components";
import { useMicroservicesState } from "../../state";
import { Widget } from "../widget";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export function Entry() {
  const [state, dispatch] = useMicroservicesState();

  return (
    <div>
      <div>
        <h2>Dependencies</h2>
        <Container>
          <Widget
            serviceName={"kafka"}
            isRunning={state.kafka.isRunning}
            port={state.kafka.port}
            dependencies={[]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "kafka",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"mongo"}
            isRunning={state.mongo.isRunning}
            port={state.mongo.port}
            dependencies={[]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "mongo",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"redPanda"}
            isRunning={state.redPanda.isRunning}
            port={state.redPanda.port}
            dependencies={[]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "redPanda",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"redis"}
            isRunning={state.redis.isRunning}
            port={state.redis.port}
            dependencies={[]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "redis",
                isRunning,
              })
            }
          />
        </Container>
      </div>

      <div>
        <h2>Managers</h2>
        <Container>
          <Widget
            serviceName={"managerCore"}
            isRunning={state.managerCore.isRunning}
            port={state.managerCore.port}
            dependencies={[
              {
                serviceName: "redPanda",
                isRunning: state.redPanda.isRunning,
              },
              {
                serviceName: "managerCoreDapr",
                isRunning: state.managerCoreDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "managerCore",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"managerMessage"}
            isRunning={state.managerMessage.isRunning}
            port={state.managerMessage.port}
            dependencies={[
              {
                serviceName: "redPanda",
                isRunning: state.redPanda.isRunning,
              },
              {
                serviceName: "managerMessageDapr",
                isRunning: state.managerMessageDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "managerMessage",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"managerAdmin"}
            isRunning={state.managerAdmin.isRunning}
            port={state.managerAdmin.port}
            dependencies={[
              {
                serviceName: "redPanda",
                isRunning: state.redPanda.isRunning,
              },
              {
                serviceName: "managerAdminDapr",
                isRunning: state.managerAdminDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "managerAdmin",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"managerProject"}
            isRunning={state.managerProject.isRunning}
            port={state.managerProject.port}
            dependencies={[
              {
                serviceName: "managerProjectDapr",
                isRunning: state.managerProjectDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "managerProject",
                isRunning,
              })
            }
          />
        </Container>
      </div>

      <div>
        <h2>Access</h2>
        <Container>
          <Widget
            serviceName={"accessProject"}
            isRunning={state.accessProject.isRunning}
            port={state.accessProject.port}
            dependencies={[
              {
                serviceName: "kafka",
                isRunning: state.kafka.isRunning,
              },
              {
                serviceName: "accessProjectDapr",
                isRunning: state.accessProjectDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessProject",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"accessMembership"}
            isRunning={state.accessMembership.isRunning}
            port={state.accessMembership.port}
            dependencies={[
              {
                serviceName: "redis",
                isRunning: state.redis.isRunning,
              },
              {
                serviceName: "accessMembershipDapr",
                isRunning: state.accessMembershipDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessMembership",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"accessAudit"}
            isRunning={state.accessAudit.isRunning}
            port={state.accessAudit.port}
            dependencies={[
              {
                serviceName: "accessAuditDapr",
                isRunning: state.accessAuditDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessAudit",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"accessCore"}
            isRunning={state.accessCore.isRunning}
            port={state.accessCore.port}
            dependencies={[
              {
                serviceName: "accessCoreDapr",
                isRunning: state.accessCoreDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessCore",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"accessMessage"}
            isRunning={state.accessMessage.isRunning}
            port={state.accessMessage.port}
            dependencies={[
              {
                serviceName: "accessMessageDapr",
                isRunning: state.accessMessageDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessMessage",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"accessTemplate"}
            isRunning={state.accessTemplate.isRunning}
            port={state.accessTemplate.port}
            dependencies={[
              {
                serviceName: "accessTemplateDapr",
                isRunning: state.accessTemplateDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessTemplate",
                isRunning,
              })
            }
          />
          <Widget
            serviceName={"accessUnit"}
            isRunning={state.accessUnit.isRunning}
            port={state.accessUnit.port}
            dependencies={[
              {
                serviceName: "accessUnitDapr",
                isRunning: state.accessUnitDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "accessUnit",
                isRunning,
              })
            }
          />
        </Container>
      </div>
      <div>
        <h2>Engine</h2>
        <Container>
          <Widget
            serviceName={"engineTranslation"}
            isRunning={state.engineTranslation.isRunning}
            port={state.engineTranslation.port}
            dependencies={[
              {
                serviceName: "engineTranslationDapr",
                isRunning: state.engineTranslationDapr.isRunning,
              },
            ]}
            onPoll={({ isRunning }) =>
              dispatch({
                type: "updateIsRunning",
                service: "engineTranslation",
                isRunning,
              })
            }
          />
        </Container>
      </div>
    </div>
  );
}
