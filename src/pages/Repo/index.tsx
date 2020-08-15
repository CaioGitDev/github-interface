import React from "react";
import { Link } from 'react-router-dom';
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

interface Props {
  username?: string;
  reponame?: string;
}
const Repo: React.FC<Props> = ({ username, reponame }) => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={`/${username}`}>
          CaioGitDev
        </Link>
        <span>/</span>
        <Link className={"reponame"} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>Contains all my...</p>
      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>Stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>96</b>
          <span>Forks</span>
        </li>
      </Stats>
      <LinkButton href={`https://github.com/${username}/${reponame}`}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
