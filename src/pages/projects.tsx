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
      <div className="my-24 mx-2 sm:mx-6 lg:mb-28 lg:mx-8">
        <div className="relative max-w-3xl mx-auto space-y-6">
          {projects.map((project, index) => (
            <Animate
              key={index}
              animation={{ y: [50, 0], opacity: [0, 1] }}
              transition={{ delay: 0.1 * index }}
            >
              {/* Card */}
              <div className="rounded-2xl p-8 shadow-lg ring-1
                              bg-white dark:bg-neutral-900
                              ring-black/5 dark:ring-white/10">
                <div className="flex items-start gap-5">
                  {/* Bigger icon */}
                  <div className="text-4xl leading-none select-none">{project.icon}</div>

                  <div>
                    {/* Bigger title */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight
                                   text-gray-900 dark:text-white">
                      {project.name}
                    </h3>

                    {/* Bigger body text + nicer line height */}
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
