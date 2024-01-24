import React from "react";
import { useState } from "react";

interface TwitterFollowCardProps {
  username: string
  iniitialFollow: boolean
  NameFormat: (userName: string) => string
  children: string | JSX.Element | JSX.Element[] 
}

 const TwitterFollowCard: React.FC<TwitterFollowCardProps> = ({ NameFormat, children, username, iniitialFollow }) => {
   const [isFollowing, setFollow] = useState(iniitialFollow)
   function onHandle() {
     setFollow(!isFollowing)
   }
   const textFollow: string = isFollowing ? 'Siguiendo' : 'Seguir'
   const buttonStyle = isFollowing ? 'tw-follow-card-button tw-follow-card-button-following' : 'tw-follow-card-button'
   return (
     <article className="tw-follow-card">
       <header className="tw-follow-card-header">
         <img className="tw-follow-card-img" src={`https://unavatar.io/${username}`} alt="midudev avatar" />
         <div className="tw-follow-card-div">
           <strong>{children}</strong>
           <span className="tw-follow-card-span">{NameFormat(username)}</span>
         </div>
       </header>
       <aside className="tw-follow-card-aside">
         <button onClick={onHandle} className={buttonStyle}>
           <span className="tw-follow-card-follow-text">{textFollow}</span>
           <span className="tw-follow-card-unfollow">Dejar de seguir</span>
         </button>
       </aside>
     </article>
   )
 }

export default TwitterFollowCard
