import {create} from 'zustand'

const useToolsStore = create((set, get) =>({
    navIsHidden: false,

    hideNav : () => set({navIsHidden : true}),
    showNav : () => set({navIsHidden : false})
}))

export default useToolsStore