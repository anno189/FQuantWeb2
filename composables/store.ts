export const useAlinksStore = defineStore('nuxtStore', () => {
    let alinks = new Array()
    function setAlinks(arr: array) {
        this.alinks = arr
    }

    return {
        alinks,
        setAlinks
    }
})

