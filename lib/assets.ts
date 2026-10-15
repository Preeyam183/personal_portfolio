/** Public assets share Next.js's build-time base path on project hosting. */
export function assetPath(path: string): string {
 return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
}
