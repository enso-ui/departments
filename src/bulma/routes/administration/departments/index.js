const DepartmentIndex = () => import('../../../pages/departments/Index.vue');

export default {
    name: 'administration.departments.index',
    path: '',
    component: DepartmentIndex,
    meta: {
        breadcrumb: 'index',
        title: 'Departments',
    },
};
