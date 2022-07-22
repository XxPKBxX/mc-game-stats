import dynamic from 'next/dynamic'
import type { GetServerSideProps, NextPage } from 'next'
import { Container } from '../../components/users/style'
import { getHypixelLevel, getSkyWarsLevel } from '../../utils/hypixel'
import { UserContext, DEFAULT_VALUE, UserStatsProps } from '../../contexts/user'

import Layout from '../../components/layout'
import User from '../../components/users/User'
import Level from '../../components/users/Level'
import Header from '../../components/head'
const Error = dynamic(() => import('../../components/users/Error'))

const UserStats: NextPage<{ data: UserStatsProps }> = ({ data }) => (
  data.error ? (
    <>
    <Header title={'Error'} />
    <Layout>
      <Error error={data.error} />
    </Layout>
    </>
  ) : (
    <>
    <Header title={data.player.name ?? undefined} />
    <UserContext.Provider value={data}>
      <Layout>
        <Container>
          <User />
          <Level />
        </Container>
      </Layout>
    </UserContext.Provider>
    </>
  )
)

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

export const getServerSideProps: GetServerSideProps = async ({ query: { nickname } }) => {
  const data: UserStatsProps = { ...DEFAULT_VALUE }

  // Fetch UUID
  const uuidResponse = await fetch(`https://api.mojang.com/users/profiles/minecraft/${nickname}`)
  if (uuidResponse.status === 204) return { props: { data: { ...data, error: 'Couldn\'t find the player.' } } }

  const uuidJSON = await uuidResponse.json()
  if ('errorMessage' in uuidJSON) return { props: { data: { ...data, error: uuidJSON.errorMessage } } }

  const { id } = uuidJSON

  const hypixelResponse = await fetch(`https://api.hypixel.net/player?key=${process.env.API_KEY}&uuid=${id}`)
  const { success, player, ...hypixelData } = await hypixelResponse.json()

  if (success === false) return { props : { data: { ...data, error: hypixelData.cause } } }

  /*
  We need these:
  - Bedwars Level v
  - Skywars Level - CANT DO
  - Hypixel Level v
  - SNS Links v
  - Ranks - UNNECESSARY
  - Nickname (also old nicknames) v
  - Playing version v
  - Language v
   */

  const {
    displayname,
    knownAliases,
    mcVersionRp,
    networkExp,
    socialMedia,
    userLanguage,
    stats: {
      SkyWars: {
        skywars_experience
      }
    },
    achievements: {
      bedwars_level,
    }
  } = player

  const hypixelLevel = getHypixelLevel(networkExp)
  const skyWarsLevel = getSkyWarsLevel(skywars_experience)
  
  return {
    props: {
      data: {
        ...data,
        player: {
          name: displayname ?? null,
          oldNames: knownAliases ?? null,
          uuid: id
        },
        data: {
          version: mcVersionRp ?? null,
          socialMedia: socialMedia ?? null,
          language: userLanguage ? capitalize(userLanguage) : null,
          level: {
            hypixel: hypixelLevel ?? null,
            bedwars: bedwars_level ?? null,
            skywars: skyWarsLevel
          }
        }
      }
    }
  }
}

export default UserStats