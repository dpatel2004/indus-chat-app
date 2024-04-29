import {create} from "zustand";

const useConversation = create((set) => ({
    selectedCoversation: null,
    setSelectedCoversation: (selectedCoversation) => set({ selectedCoversation}),
    message: [],
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;