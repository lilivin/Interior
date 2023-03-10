export const enum ProjectCategories {
  Bedroom = "bedroom",
  Kitchen = "kitchen",
  Bathroom = "bathroom",
  LivingRoom = "living-room",
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: ProjectCategories;
  image: string;
}

export interface ProjectCategory {
    id: ProjectCategories,
    name: string
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

export const initialProjects: Project[] = [
  {
    id: 1,
    title: "Title1",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 2,
    title: "Title2",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 3,
    title: "Title3",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 4,
    title: "Title4",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 5,
    title: "Title5",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 6,
    title: "Title6",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 7,
    title: "Title7",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 8,
    title: "Title8",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 9,
    title: "Title9",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 10,
    title: "Title10",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 1,
    title: "Title1",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 2,
    title: "Title2",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 3,
    title: "Title3",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 4,
    title: "Title4",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 5,
    title: "Title5",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 6,
    title: "Title6",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 7,
    title: "Title7",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 8,
    title: "Title8",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 9,
    title: "Title9",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 10,
    title: "Title10",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 1,
    title: "Title1",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 2,
    title: "Title2",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 3,
    title: "Title3",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 4,
    title: "Title4",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 5,
    title: "Title5",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 6,
    title: "Title6",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 7,
    title: "Title7",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 8,
    title: "Title8",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 9,
    title: "Title9",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 10,
    title: "Title10",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 1,
    title: "Title1",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 2,
    title: "Title2",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 3,
    title: "Title3",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 4,
    title: "Title4",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 5,
    title: "Title5",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.LivingRoom,
    image: "project-photo-1",
  },
  {
    id: 6,
    title: "Title6",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bathroom,
    image: "project-photo-2",
  },
  {
    id: 7,
    title: "Title7",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 8,
    title: "Title8",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
  {
    id: 9,
    title: "Title9",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Bedroom,
    image: "project-photo-3",
  },
  {
    id: 10,
    title: "Title10",
    subtitle: "Decor / Artchitecture",
    category: ProjectCategories.Kitchen,
    image: "project-photo-4",
  },
];
