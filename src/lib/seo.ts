import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import type { ComponentProps } from 'react';

export function useSeoProps(
  props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
  const router = useRouter();

  // Your main branding
  const baseTitle = 'ayush dasgupta';
  const description = "Hey 👋 I'm Ayush, an electronics engineer with an interest in robotics, automation and signal processing";

  // Use provided title if available, otherwise default to base
  const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle;

  return {
    title,
    description,
    canonical: `https://ayush.dev${router.asPath}`,
    openGraph: {
      title,
      description,
      site_name: baseTitle,
      url: `https://ayush.dev${router.asPath}`,
      type: 'website',
      images: [
        {
          url: 'https://ayush.dev/banner.png',
          alt: description,
          width: 1280,
          height: 720,
        },
      ],
    },
    twitter: {
      cardType: 'summary_large_image',
      handle: '@ayush',
      site: '@ayush',
    },
    ...props,
  };
}
