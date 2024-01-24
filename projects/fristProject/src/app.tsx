import TwitterFollowCard from './twitterFollowCard'
import './app.css'
export default function App() {
    const NameFormat = (userName: string) => `@${userName}`
const users =  [
    {
        name: 'Miguel Ángel Durán',
        username: 'midudev',
        isFollowing: true,
    },
    {
        name: 'Pheral',
        username: 'pheralb',
        isFollowing: false,
    },
    {
        name: 'Miguel Ángel Durán',
        username: 'mmidulive',
        isFollowing: true,
    },
    {
        name: 'Migdsdded',
        username: 'manuel',
        isFollowing: true,
    }
]

    return (
      <div className="App">
        {users.map(({ name, username, isFollowing }) => (
            <TwitterFollowCard NameFormat={NameFormat} username={username} iniitialFollow={isFollowing} key={username}>
              {name}
            </TwitterFollowCard>
          
    ))}
      </div>
    )
}
