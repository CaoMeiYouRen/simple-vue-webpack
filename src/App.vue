<template>
    <div>
        <AppHeader />
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <AppFooter />
    </div>

</template>

<script>
export default {
    data: () => ({}),
    methods: {},
    computed: {},
    components: {},
    created() {},
    mounted() {}
};
</script>

<style scoped>
</style>