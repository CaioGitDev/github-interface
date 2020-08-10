import React from 'react'
import { Container, Main, LeftSide, RightSide, Repos } from './styles'
import ProfileData from '../../components/ProfileData'
import RepoCard from '../../components/RepoCard'

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
          <Repos>
            <h2>Random reps</h2>

            <div>
              {[1,2,3,4,5,6].map(n => (
                <RepoCard 
                  key={n}
                  username={'CaioGitDev'}
                  reponame={'Lorem ipsum'}
                  description={'Contains all myu work'}
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={6}
                  forks={10}
                />
              ))}
            </div>
          </Repos>
        </RightSide>
      </Main>
    </Container>
  )
}

export default Profile