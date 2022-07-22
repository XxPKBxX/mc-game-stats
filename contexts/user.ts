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
    }
    language: string | null
    level: {
      hypixel: number | null
      bedwars: number | null
      skywars: number
    }
  }
  error: string | null
}

export const DEFAULT_VALUE: UserStatsProps = {
  player: {
    name: null,
    oldNames: [],
    uuid: null
  },
  data: {
    version: null,
    socialMedia: {},
    language: null,
    level: {
      hypixel: null,
      bedwars: null,
      skywars: 0
    }
  },
  error: null
}

export const UserContext = createContext<UserStatsProps>(DEFAULT_VALUE)

export const useUserContext = () => useContext(UserContext)