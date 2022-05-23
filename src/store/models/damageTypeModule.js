import CustomizedAxios from "../../plugins/axios";

const damageTypeModule = {
  state: {
    damageTypes: [],
  },
  mutations: {
    SET_DAMAGETYPS(state, damageTypes) {
      state.damageTypes = damageTypes;
    },
    ADD_DAMAGETYPE(state, damageTypes) {
      state.damageTypes.push(damageTypes);
    },
    DELETE_DAMAGETYPE(state, id) {
      state.damageTypes = state.damageTypes.filter((c) => c.id != id);
    },
    EDIT_DAMAGETYPE(state, damageTypes) {
      state.damageTypes = state.damageTypes.map((c) => {
        if (c.id == damageTypes.id) return damageTypes;
        return c;
      });
    },
  },
  actions: {
    setDAMAGETYPESAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("DamageType/")
          .then((response) => {
            commit("SET_DAMAGETYPS", response.data);
            console.log("set damageTypes ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addDAMAGETYPEAction({ commit }, damageTypes) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("DamageType/add", {
          created_date: damageTypes.created_date,
          updateDate: damageTypes.updateDate,
          name: damageTypes.name,
          department: {
            id: damageTypes.department.id,
          },
          profileGroup: {
            id: damageTypes.profileGroup.id,
          },
        })
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_DAMAGETYPE", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteDAMAGETYPEAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("DamageType/delete/" + id)
          .then((response) => {
            commit("DELETE_DAMAGETYPE", id);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editDAMAGETYPEAction({ commit }, damageTypes) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.put("DamageType/update", {
          created_date: damageTypes.created_date,
          updateDate: damageTypes.updateDate,
          name: damageTypes.name,
          department: {
            id: damageTypes.department.id,
          },
          profileGroup: {
            id: damageTypes.profileGroup.id,
          },
        })
          .then((response) => {
            commit("EDIT_DAMAGETYPE", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getdamageTypes: (state) => {
      return state.damageTypes;
    },
  },
};
export default damageTypeModule;
