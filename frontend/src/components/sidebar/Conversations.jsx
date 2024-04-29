import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  // console.log("Conversations: ",conversations);
  return (


    <div className='py-2 flex-col overflow-auto'>
        
        {conversations.map((Conversation) => (
          <Conversation
          key = {conversations._id}
          conversation={Conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length -1 }
          />
          
        ))}
        {loading ? <span className='loading loading-spinner mx-auto'> </span> : null}
    </div>
  );
};

export default Conversations;


// starter code snippet
// import React from 'react';
// import Conversation from './Conversation';

// const Conversations = () => {
//   return (
//     <div className='py-2 flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   );
// };

// export default Conversations;