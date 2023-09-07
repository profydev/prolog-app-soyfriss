import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { Spinner } from "@features/ui";
import { Alert } from "@features/ui";
import { useRouter } from "next/router";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
      </div>
    );
  }

  if (isError) {
    console.error(error);
    // return <div>Error: {error.message}</div>;
    return (
      <Alert
        message="There was a problem while loading the project data"
        onButtonClick={() => router.reload()}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
