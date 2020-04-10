import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Usuario from './components/usuario/Usuario';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/usuario/:id',
            component: Usuario
        }
    ]
});

/**
 * Também é possível definir componentes para router-views de nome específico
 * Ex: <router-view name="teste"/>
 * dentro de routes: [] fica assim: 
 * {
        path: '/',
        components: {
            default: Inicio,
            teste: Principal   <---- 
        } 
    },
 */