import fs from 'fs';
import path from 'path';
import type { Project } from '~/types';

/**
 * Fetch Projects
 *
 * Instead of hitting GitHub, just read from local `projects.json`
 */
export async function fetchProjects(): Promise<Project[]> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'projects.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData) as Project[];
    return projects;
  } catch (error) {
    console.error("Error loading projects.json:", error);
    return [];
  }
}
