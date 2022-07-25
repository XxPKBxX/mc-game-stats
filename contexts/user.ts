import { createContext, useContext } from 'react'

export interface UserStatsProps {
  player: {
    name: string | null
    oldNames: string[] | null
    uuid: string | null
  }
  data: {
    version: string | null
    socialMedia: {
      [key: string]: string
    } | null
    language: string | null
    level: {
      hypixel: number | null
      bedwars: number | null
      skywars: number | null
    }
  }
  error: string | null
}

export const DEFAULT_VALUE: UserStatsProps = {
  player: {
    name: null,
    oldNames: null,
    uuid: null
  },
  data: {
    version: null,
    socialMedia: null,
    language: null,
    level: {
      hypixel: null,
      bedwars: null,
      skywars: null
    }
  },
  error: null
}

export const UserContext = createContext<UserStatsProps>(DEFAULT_VALUE)

export const useUserContext = () => useContext(UserContext)