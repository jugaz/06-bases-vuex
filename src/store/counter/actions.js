import getRandmonInt from "@/helpers/getRandonInt"

export const  incrementRandomInt = async( { commit } ) => {
    commit('setLoading',true)
    const randmInt = await getRandmonInt()
    commit('incrementBy', randmInt)
    commit('setLoading',false)
}