import React from "react";
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from "./styles";
import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  const TabContent: React.FC = () => (
    <div className="content">
      <RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">12</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset"></span>
          <TabContent />
        </div>

        <span className="line"></span>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={"CaioGitDev"}
            name={"Caio Rosa"}
            avatarUrl={"https://avatars2.githubusercontent.com/u/53819717?v=4"}
            followers={666}
            following={0}
            company={"CRDevLab"}
            location={"Lisboa, Portugal"}
            email={"geral-caio@gmail.com"}
            blog={"https://www.linkedin.com/in/caio-rosa-4047b1137/"}
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line"></span>
          </Tab>

          <Repos>
            <h2>Random reps</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"CaioGitDev"}
                  reponame={"Lorem ipsum"}
                  description={"Contains all myu work"}
                  language={n % 3 === 0 ? "JavaScript" : "TypeScript"}
                  stars={6}
                  forks={10}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>Random Calendar</CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
