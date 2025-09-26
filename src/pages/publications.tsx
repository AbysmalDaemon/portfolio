import { Layout } from '~/layouts';
import { Card } from '~/components/Card';
import { Icon } from '@iconify/react';
import { NextSeo } from 'next-seo';
import { useSeoProps } from '~/lib/seo';

const publications = [
  {
    title: 'An Efficient Approach for Calibration of Automotive Radar–Camera With Real-Time Projection of Multimodal Data',
    authors: 'N. Kumar, A. Dasgupta, V. Satyanand Mutnuri and R. Pachamuthu',
    venue: 'IEEE Transactions on Radar Systems',
    year: 2024,
    link: 'https://ieeexplore.ieee.org/abstract/document/10546272',
  },
  {
    title: 'TIAND: A Multimodal Dataset for Autonomy on Indian Roads',
    authors:
      'N. Kumar, A. S, A. Thankur, O. Gopi, A. Dasgupta, A. Algole, B. Anand, V. Satyanand Mutnuri, S. Reddy, N. Praveen Babu, S. Saripalli and R. Pachamuthu',
    venue: '2024 IEEE Symposium on Intelligent Vehicle',
    year: 2024,
    link: 'https://ieeexplore.ieee.org/abstract/document/10588583',
  },
  {
    title: 'On the Road to Autonomy: A Comparative Analysis of Multimodal Datasets',
    authors: 'A. Dasgupta, O. Gopi, A. Chowdhury, S. Behera',
    venue: 'Recent Trends in AI Enabled Technologies (ThinkAI 2023)',
    year: 2024,
    link: 'https://ieeexplore.ieee.org/abstract/document/10588583',
  },
];

export default function PublicationsPage(): JSX.Element {
  const seo = useSeoProps({ title: 'publications' });

  return (
    <Layout.Default>
      <NextSeo {...seo} />
      <div className="min-h-screen py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Publications
        </h1>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index}>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {pub.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {pub.authors}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-1 italic">
                {pub.venue}, {pub.year}
              </p>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 mt-3 inline-flex items-center text-blue-500 hover:text-blue-600"
                >
                  <Icon icon="feather:external-link" className="mr-2" />
                  View Paper
                </a>
              )}
            </Card>
          ))}
        </div>
      </div>
    </Layout.Default>
  );
}
