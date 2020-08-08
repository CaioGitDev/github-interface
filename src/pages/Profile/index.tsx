import React from 'react'
import { Container, Main, LeftSide, RightSide } from './styles'
import ProfileData from '../../components/ProfileData'

const Profile: React.FC = () => {
  return(
    <Container>
      <Main>
        <LeftSide>
          <ProfileData 
            username={'CaioGitDev'}
            name={'Caio Rosa'}
            avatarUrl={'https://avatars2.githubusercontent.com/u/53819717?v=4'}
            followers={666}
            following={0}
            company={'CRDevLab'}
            location={'Lisboa, Portugal'}
            email={'geral-caio@gmail.com'}
            blog={'https://www.linkedin.com/in/caio-rosa-4047b1137/'}
          />
        </LeftSide>
        <RightSide>

        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile