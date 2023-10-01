export interface IRepository {
  id: string;
  created_at: string;
  default_branch: string;
  disabled: boolean;
  forks: number;
  full_name: string;
  open_issues: number;
  owner: {
    avatar_url: string;
    login: string;
    url: string;
  };
  watchers: number;
  stargazers_count: number;
  name: string;
  git_url: string;
}
