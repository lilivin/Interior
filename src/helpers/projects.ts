import projectsJson from "../data/projects.json";
import { SliderImage } from "../pages/project/components/slider";

export const enum ProjectCategories {
  Bedroom = "bedroom",
  Kitchen = "kitchen",
  Bathroom = "bathroom",
  LivingRoom = "living room",
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  photos: SliderImage[];
  date: string;
  client: string;
  cost: string;
}

export interface ProjectCategory {
  id: ProjectCategories;
  name: string;
}

export const categories: ProjectCategory[] = [
  {
    id: ProjectCategories.Bathroom,
    name: "Bathroom",
  },
  {
    id: ProjectCategories.Bedroom,
    name: "Bedroom",
  },
  {
    id: ProjectCategories.Kitchen,
    name: "Kitchen",
  },
  {
    id: ProjectCategories.LivingRoom,
    name: "Living Room",
  },
];

export function getProjects(amount?: number): Project[] {
  let projects = projectsJson.projects;
  if (amount) {
    projects = projects.slice(projects.length - amount, projects.length);
  }
  return projects;
}

export function getProjectById(id: string) {
    let projects = projectsJson.projects;
    return projects.find(project => project.id === id);
  }
