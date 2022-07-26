import dynamic from 'next/dynamic'
import type { GetServerSideProps, NextPage } from 'next'
import { Container } from '../../components/users/style'
import { getHypixelLevel, getSkyWarsLevel, getSocialMedia } from '../../utils/hypixel'
import { UserContext, DEFAULT_VALUE, UserStatsProps } from '../../contexts/user'

import Layout from '../../components/layout'
import User from '../../components/users/User'
import Level from '../../components/users/Level'
import { clearSpecialCharacters } from '../../utils/text'
const Error = dynamic(() => import('../../components/error'))

const UserStats: NextPage<{ data: UserStatsProps }> = ({ data }) => (
  data.error ? (
    <Layout title={'Error'}>
      <Error error={data.error} />
    </Layout>
  ) : (
    <UserContext.Provider value={data}>
      <Layout title={data?.player?.name ?? undefined}>
        <Container>
          <User />
          <Level />
        </Container>
      </Layout>
    </UserContext.Provider>
  )
)

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

export const getServerSideProps: GetServerSideProps = async ({ query: { nickname } }) => {
  const data: UserStatsProps = { ...DEFAULT_VALUE }

  // Check Nickname
  if (typeof nickname !== 'string'
  || clearSpecialCharacters(nickname) !== nickname) return { props: { data: { ...data, error: 'Nicknames can only contain alphabets, numbers, and underscores(_).' } } }


  // Fetch UUID
  const uuidResponse = await fetch(`https://api.mojang.com/users/profiles/minecraft/${nickname}`)
  if (uuidResponse.status === 204) return { props: { data: { ...data, error: 'Couldn\'t find the player.' } } }

  const uuidJSON = await uuidResponse.json()
  if ('errorMessage' in uuidJSON) return { props: { data: { ...data, error: uuidJSON.errorMessage } } }

  const { id } = uuidJSON

  const hypixelResponse = await fetch(`https://api.hypixel.net/player?key=${process.env.API_KEY}&uuid=${id}`)
  const { success, player, ...hypixelData } = await hypixelResponse.json()

  if (success === false) return { props: { data: { ...data, error: hypixelData.cause } } }
  if (!player) return { props: { data: { ...data, error: 'Couldn\'t get user stats.' } } }

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
    stats,
    achievements,
    lastLogin,
    lastLogout
  } = player

  if (!knownAliases || knownAliases.length < 1) return { props: { data: { ...data, error: 'User data is broken.' } } }

  const skywars_experience = stats?.SkyWars?.skywars_experience ?? null
  const bedwars_level = achievements?.bedwars_level ?? 0

  const hypixelLevel = getHypixelLevel(networkExp)
  const skyWarsLevel = skywars_experience ? getSkyWarsLevel(skywars_experience) : 0

  const sns = socialMedia?.links ?? null
  const socialMediaList = sns ? getSocialMedia(sns) : null

  const online = Boolean(lastLogin) && Boolean(lastLogout) && lastLogin > lastLogout

  return {
    props: {
      data: {
        ...data,
        player: {
          name: displayname ?? null,
          oldNames: knownAliases ?? null,
          uuid: id,
          online
        },
        data: {
          version: mcVersionRp ?? null,
          socialMedia: socialMediaList && socialMediaList.length > 0 ? socialMediaList : null,
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