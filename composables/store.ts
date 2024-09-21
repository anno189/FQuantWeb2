//保存目录
export const useAlinksStore = defineStore('MuluStore', () => {
    let alinks = new Array()
    function setAlinks(arr: array) {
        this.alinks = arr
    }

    return {
        alinks,
        setAlinks
    }
})

