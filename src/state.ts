import { useReducer } from "react";

export const services = [
  "redPanda",
  "kafka",
  "redis",
  "redisDapr",
  "mongo",
  "managerCore",
  "managerCoreDapr",
  "managerMessage",
  "managerMessageDapr",
  "managerAdmin",
  "managerAdminDapr",
  "managerProject",
  "managerProjectDapr",
  "accessProject",
  "accessProjectDapr",
  "accessMembership",
  "accessMembershipDapr",
  "accessAudit",
  "accessAuditDapr",
  "accessCore",
  "accessCoreDapr",
  "accessMessage",
  "accessMessageDapr",
  "accessTemplate",
  "accessTemplateDapr",
  "accessUnit",
  "accessUnitDapr",
  "engineTranslation",
  "engineTranslationDapr",
] as const;

type State = {
  [key in (typeof services)[number]]: {
    port: number;
    dependencies?: (typeof services)[number][];
    isRunning: boolean;
  };
};

const initialState: State = {
  kafka: {
    port: 29092,
    isRunning: false,
  },
  redPanda: {
    port: 19093,
    isRunning: false,
  },
  redis: {
    port: 6380,
    isRunning: false,
  },
  redisDapr: {
    port: 6379,
    isRunning: false,
  },
  mongo: {
    port: 27017,
    isRunning: false,
  },
  managerCore: {
    port: 9010,
    isRunning: false,
  },
  managerCoreDapr: {
    port: 50010,
    isRunning: false,
  },
  managerMessage: {
    port: 9006,
    isRunning: false,
  },
  managerMessageDapr: {
    port: 50006,
    isRunning: false,
  },
  managerAdmin: {
    port: 9007,
    isRunning: false,
  },
  managerAdminDapr: {
    port: 50007,
    isRunning: false,
  },
  managerProject: {
    port: 9008,
    isRunning: false,
  },
  managerProjectDapr: {
    port: 50008,
    isRunning: false,
  },
  accessProject: {
    port: 9101,
    isRunning: false,
  },
  accessProjectDapr: {
    port: 50101,
    isRunning: false,
  },
  accessMembership: {
    port: 9102,
    isRunning: false,
  },
  accessMembershipDapr: {
    port: 50102,
    isRunning: false,
  },
  accessAudit: {
    port: 9103,
    isRunning: false,
  },
  accessAuditDapr: {
    port: 50103,
    isRunning: false,
  },
  accessCore: {
    port: 9104,
    isRunning: false,
  },
  accessCoreDapr: {
    port: 50104,
    isRunning: false,
  },
  accessMessage: {
    port: 9105,
    isRunning: false,
  },
  accessMessageDapr: {
    port: 50105,
    isRunning: false,
  },
  accessTemplate: {
    port: 9106,
    isRunning: false,
  },
  accessTemplateDapr: {
    port: 50106,
    isRunning: false,
  },
  accessUnit: {
    port: 9107,
    isRunning: false,
  },
  accessUnitDapr: {
    port: 50107,
    isRunning: false,
  },
  engineTranslation: {
    port: 9203,
    isRunning: false,
  },
  engineTranslationDapr: {
    port: 50203,
    isRunning: false,
  },
};

type IsRunningAction = {
  type: "updateIsRunning";
  service: (typeof services)[number];
  isRunning: boolean;
};

type UpdatePortAction = {
  type: "updatePort";
  service: (typeof services)[number];
  port: number;
};

type Action = IsRunningAction | UpdatePortAction;

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "updateIsRunning":
      return {
        ...state,
        [action.service]: {
          ...state[action.service],
          isRunning: action.isRunning,
        },
      };
    case "updatePort":
      return {
        ...state,
        [action.service]: { ...state[action.service], port: action.port },
      };

    default:
      return state;
  }
};

const nameCache: Record<string, string> = {};

export const getName = (serviceName: (typeof services)[number]) => {
  if (nameCache[serviceName]) {
    return nameCache[serviceName];
  }
  const name = serviceName
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  nameCache[serviceName] = name;
  return name;
};

export const useMicroservicesState = () => useReducer(reducer, initialState);
