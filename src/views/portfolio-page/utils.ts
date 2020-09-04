import { ProjectGQL } from './types';

export const mapProjectQueryToProjectComponentData = (data: ProjectGQL) => {
  const projectPageData = data.markdownRemark.portfolioPage;
  const image = data.profileImage.childImageSharp.fixed.src;
  // TODO UPDATE
  // Update for missing values when project dialog component is finished
  return {
    pageTitle: projectPageData.portfolio_page_title,
    projects: projectPageData.projects.map((project) => ({
      image,
      title: project.project_name,
      previewNote: project.project_preview_note,
      description: project.project_description,
      label: project.project_label,
      startDate: project.project_start_date,
      finishDate: project.project_finish_date,
      role: project.project_role,
      technologies: project.project_technologies.map((technology) => ({ name: technology.technology_name })),
      mockupsUrl: project.project_mockups,
      codeUrl: project.project_code,
      projectUrl: project.project_app,
    })),
  };
};