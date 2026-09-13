import { fetchProjects } from '~/lib/projects';
import { Layout } from '~/layouts';
import { Animate } from '~/components';

import type { GetStaticProps } from 'next';
import type { Project } from '~/types';

interface ProjectProps {
  stringifiedProjects: string;
}

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
  const projects = await fetchProjects();

  return {
    props: {
      stringifiedProjects: JSON.stringify(projects),
    },
    revalidate: 3600,
  };
};

export default function ProjectsPage({ stringifiedProjects }: ProjectProps): JSX.Element {
  const projects = JSON.parse(stringifiedProjects) as Array<Project>;

  return (
    <Layout.Default seo={{ title: 'projects' }}>
      <div className="min-h-screen py-24 mx-2 sm:mx-6 lg:mx-8">
        <div className="relative max-w-3xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <Animate
              key={index}
              animation={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="relative p-6 rounded-lg border-2 border-gray-200
                              dark:border-gray-600 bg-gray-50 bg-opacity-75
                              dark:bg-gray-900 dark:bg-opacity-75
                              backdrop-filter backdrop-blur-sm shadow-lg">
                <div className="flex items-start gap-5">
                  <div className="text-4xl leading-none select-none">{project.icon}</div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight
                                   text-gray-900 dark:text-white">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-lg sm:text-xl leading-relaxed
                                  text-gray-700 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </Layout.Default>
  );
}
