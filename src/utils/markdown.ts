import type { MarkdownHeading } from 'astro'

export interface SidebarLink {
  href: string
  text: string
  sublinks?: SidebarLink[]
}

export interface SidebarContent {
  title: string
  links: SidebarLink[]
}

/**
 * Converts markdown headings to a hierarchical sidebar structure
 */
export function generateSidebarFromHeadings(headings: MarkdownHeading[]): SidebarContent {
  const links: SidebarLink[] = []
  const linkStack: SidebarLink[] = []

  for (const heading of headings) {
    const link: SidebarLink = {
      href: `#${heading.slug}`,
      text: heading.text,
      sublinks: []
    }

    if (heading.depth === 2) {
      // Top-level heading
      links.push(link)
      linkStack.length = 0
      linkStack.push(link)
    } else if (heading.depth === 3) {
      // Sub-heading
      const parent = linkStack[0]
      if (parent) {
        if (!parent.sublinks) {
          parent.sublinks = []
        }
        parent.sublinks.push(link)
      }
    }
    // Ignore deeper headings for now to keep sidebar manageable
  }

  return {
    title: 'Table of Contents',
    links
  }
}

/**
 * Converts a string to a URL-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}
