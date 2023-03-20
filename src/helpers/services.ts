import servicesJson from "../data/services.json";

export type ServiceType = {
  id: string,
  title: string,
  description: string;
};

export function getServices(){
  let services = servicesJson.services;
  return services;
}

