import create from "zustand";
import profile_picture from "../assets/User_logo.png";

const useStore = create((set) => ({
    log: true,
    setLog: () => set((state) => ({log: false})),
    outLog: () => set((state) => ({log: true})),
    nick_name: 'Admin',
    profile_pic: profile_picture, //work in progress
}));
export default useStore;