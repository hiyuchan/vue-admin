const app = {
    state: {
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    },

    getters:{ //computed
      },
    
    mutations:{
        SET_isCollapse(state){
            state.isCollapse = !state.isCollapse
            sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
        }
    },
    actions: {},
}

export default app;