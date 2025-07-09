export interface PackageConfig {
  name: string
  color: string
  gameWebsiteUrl: string
  githubUrl: string
  docsUrl?: string
}

export const packageConfigs: Record<string, PackageConfig> = {
  blades: {
    name: 'BLADES',
    color: 'text-games-blades-500',
    gameWebsiteUrl: 'https://bladesinthedark.com/',
    githubUrl: 'https://github.com/RANDSUM/randsum/tree/main/packages/blades'
  },
  daggerheart: {
    name: 'DAGGERHEART',
    color: 'text-games-daggerheart-500',
    gameWebsiteUrl: 'https://www.daggerheart.com/',
    githubUrl:
      'https://github.com/RANDSUM/randsum/tree/main/packages/daggerheart'
  },
  fifth: {
    name: 'FIFTH',
    color: 'text-games-fifth-500',
    gameWebsiteUrl: 'https://www.dndbeyond.com/',
    githubUrl: 'https://github.com/RANDSUM/randsum/tree/main/packages/fifth'
  },
  'root-rpg': {
    name: 'ROOT-RPG',
    color: 'text-games-root-rpg-500',
    gameWebsiteUrl: 'https://magpiegames.com/',
    githubUrl: 'https://github.com/RANDSUM/randsum/tree/main/packages/root-rpg'
  },
  salvageunion: {
    name: 'SALVAGEUNION',
    color: 'text-games-salvageunion-500',
    gameWebsiteUrl: 'https://leyline.press/',
    githubUrl:
      'https://github.com/RANDSUM/randsum/tree/main/packages/salvageunion'
  }
}

export function getPackageConfig(
  packageKey: string
): PackageConfig | undefined {
  return packageConfigs[packageKey]
}
