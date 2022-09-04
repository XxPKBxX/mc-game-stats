import { useEffect } from 'react'
import { useUserContext } from '../../../contexts/user'
import { History, historyItemName } from '../../../utils/history'
import { A } from '../../global'

import Nickname from './nickname'
import { InfoWrapper, Table, UserInfo } from './style'

const User = (): JSX.Element => {
  const data = useUserContext()

  useEffect(() => {
    if (!data.player.name) return

    try {
      const current = localStorage.getItem(historyItemName)
      const history: History[] = current ? JSON.parse(current) : []

      history.push({
        time: Number(new Date()),
        name: data.player.name
      })
      history.sort((a, b) => b.time - a.time)
      history.length = 50
  
      localStorage.setItem(historyItemName, JSON.stringify(
        history.filter((item) => item.name && item.time)
      ))
    }
    catch {}
  }, [data.player.name])

  return (
    <UserInfo>
      <Nickname />
      <InfoWrapper>
        <Table>
          <tbody>
            <tr>
              <th>Version</th>
              <td>{data.data.version ?? '-'}</td>
            </tr>
            <tr>
              <th>Language</th>
              <td>{data.data.language ?? '-'}</td>
            </tr>
            <tr>
              <th>Social Media</th>
              <td>{
                data.data.socialMedia?.map((sns, index) => (
                    <A href={sns.url} target={'_blank'} key={index}>{sns.name}</A>
                )) ?? '-'
              }</td>
            </tr>
            {/* <tr>
              <th>UUID</th>
              <td>{data.player.uuid ?? '-'}</td>
            </tr> */}
          </tbody>
        </Table>
      </InfoWrapper>
      {/* <textarea value={JSON.stringify(data, null, 4)} readOnly /> */}
    </UserInfo>
  )
}

export default User