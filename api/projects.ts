import { axios } from "./axios";
import { Project, ProjectStatus } from "./projects.types";

const ENDPOINT = "/project";

export async function getProjects() {
  const { data } = await axios.get<Project[]>(ENDPOINT);

  const projects = data.map((prj) => {
    // Modify status value from API: "error" to "critical", "info" to "stable", "warning" is correct
    let status = prj.status;
    if (!Object.keys(ProjectStatus).includes(prj.status)) {
      if (prj.status.toString() === "error") status = ProjectStatus.critical;
      if (prj.status.toString() === "info") status = ProjectStatus.stable;
    }

    return {
      ...prj,
      status,
    };
  });

  return projects;
}
