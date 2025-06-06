import {create} from 'zustand'

const useToolsStore = create((set) =>({
    navIsHidden: false,

    hideNav : () => set({navIsHidden : true}),
    showNav : () => set({navIsHidden : false}),
}));

export default useToolsStore