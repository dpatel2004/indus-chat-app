import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = (conversation,lastIdx,emoji) => {
    const {selectedCoverstion, setSelectedCoversation}=useConversation();

    const isSelected = selectedCoverstion?._id === conversation._id;

  return <>
    <div className={`flex gap-2 items-center hover:bg-white rounded p-2 py-1 cursor-pointer
    ${isSelected ? "bg-sky-500" : ""}

    `}  onClick={()=> setSelectedCoversation(conversation)}>
        <div className='avatar online'>    
            <div className='w-12 rounded-full '>
                <img alt='user avatar' src={conversation.profilePic} />
            </div>
        </div>
    <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
        </div>
    </div>

        </div>

    {!lastIdx && <div className='divider my-0 py-0 h-1' />}
  </>;
};

export default Conversation;


// starter code snippet
// import React from 'react'
// const Conversation = () => {
//   return <>
//     <div className='flex gap-2 items-center hover:bg-white rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>    
//             <div className='w-12 rounded-full '>
//                 <img alt='user avatar' src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' />
//             </div>
//         </div>
//     <div className='flex flex-col flex-1'>
//         <div className='flex gap-3 justify-between'>
//             <p className='font bold text-gray-200'>Dia Patel</p>
//             <span className='text-xl'>💙</span>
//         </div>
//     </div>

//         </div>

//     <div className='divider my-0 py-0 h-1' />
//   </>;
// };

// export default Conversation;