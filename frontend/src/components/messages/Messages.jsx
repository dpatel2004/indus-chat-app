import React from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';


const Messages = () => {
  const {Messages, loading} = useGetMessages();
  console.log("messages: ", Messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
    </div>
  );
};

export default Messages;




// STARTER CODE SNIPPET
// import React from 'react';
// import Message from './Message';
// const Messages = () => {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   );
// };

// export default Messages;