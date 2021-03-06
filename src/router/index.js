import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../components/user/Users.vue";
import Departments from "../components/department/Departments.vue";
import Roles from "../components/role/Roles.vue";
import DomainGroupe from "../components/domain_groupe/DomainGroupe.vue";
import DamageType from "../components/damage_Type/DamageType.vue";
import Damage from "../components/damage/Damage.vue";
import domains from "../components/domain/Domains.vue";
import Damage_IT from "../components/damage/IT/Damage_IT.vue";
import profile_groupe from "../components/profile_group/profile_groupe.vue";
import ViewEquipement from "../components/ViewEquipement.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "user",
    component: Users,
    params: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/departement",
    name: "Departement",
    component: Departments,
    params: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/role",
    name: "Role",
    component: Roles,
    params: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/domainGroupe",
    name: "Domain Groupe",
    component: DomainGroupe,
    params: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/damageType",
    name: "Damage Type",
    component: DamageType,
    params: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/Damage",
    name: "Damage",
    component: Damage,
    params: true,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/Domain",
    name: "domain",
    component: domains,
    params: true,
  },
  {
    path: "/damage_IT",
    name: "Damage_IT",
    component: Damage_IT,
    params: true,
  },
  {
    path: "/profile_groupe",
    name: "profile_groupe",
    component: profile_groupe,
    params: true,
  },
  {
    path: "/ViewEquipement",
    name: "ViewEquipement",
    component: ViewEquipement,
    params: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
