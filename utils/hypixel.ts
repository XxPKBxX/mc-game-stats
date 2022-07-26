const BASE = 10_000
const GROWTH = 2_500

const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX
const GROWTH_DIVIDES_2 = 2 / GROWTH

export const getHypixelLevel = (experience: number): number => {
  // return exp < 0 ? 1 : Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));
  return experience < 0 ? 1 : Math.floor(
    1 + REVERSE_PQ_PREFIX + Math.sqrt(
      REVERSE_CONST + GROWTH_DIVIDES_2 * experience
    )
  )
}

const SKYWARS_XPS = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000]

export const getSkyWarsLevel = (experience: number): number => {
  if (experience >= 15000) return Math.floor((experience - 15000) / 10000 + 12)
  
  for (let i = 0; i < SKYWARS_XPS.length; i++) {
    if (!(experience < SKYWARS_XPS[i + 1])) continue

    return 1 + i + Math.floor((experience - SKYWARS_XPS[i]) / (SKYWARS_XPS[i + 1] - SKYWARS_XPS[i]))
  }

  return 0
}

interface SocialMediaFormatter {
  [key: string]: string
}
const SOCIAL_MEDIA_FORMATTER: SocialMediaFormatter = {
  'TWITTER': 'Twitter',
  'YOUTUBE': 'YouTube',
  'INSTAGRAM': 'Instagram',
  'TWITCH': 'Twitch',
  'HYPIXEL': 'Hypixel',
  // 'DISCORD': 'Discord',
  // 'MIXER': 'Mixer'
}

export interface SocialMedia {
  name: string
  url: string
}

export interface SocialMediaDraft {
  [key: string]: string
}

export const getSocialMedia = (socialMedia: SocialMediaDraft): SocialMedia[] => {
  const result = []

  for (const key in socialMedia) {
    const name = SOCIAL_MEDIA_FORMATTER[key as keyof SocialMediaFormatter]
    if (!name) continue
    
    const data: SocialMedia = {
      name,
      url: socialMedia[key]
    }
    result.push(data)
  }

  return result
}