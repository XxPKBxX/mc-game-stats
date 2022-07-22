import { useUserContext } from '../../../contexts/user'
import Nickname from './nickname'
import { InfoWrapper, Table, UserInfo } from './style'

const User = (): JSX.Element => {
  const data = useUserContext()

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
          </tbody>
        </Table>
      </InfoWrapper>
    </UserInfo>
  )
}

export default User