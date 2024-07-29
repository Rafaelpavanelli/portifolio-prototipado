type ProjectInfosType = {
  name: string;
  languages: string[];
  plataform: "mobile" | "web" | string;
  link?: string;
  github: string;
  shortDescription: string;
  detailedDescription: string;
  coverUrl: string;
};

type ProjectImageTypes = {
  filesList: File[];
  coverImage: File;
  idProject: string
};

export type { ProjectInfosType, ProjectImageTypes };
