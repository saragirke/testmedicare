<script>
import { RouterView } from 'vue-router'
import Header from "./components/Header.vue";



export default {
components: {
  Header,
  RouterView

}
}
</script>


<template>
 <Header />
 
 <main>


 <RouterView />
 </main>


</template>


<style scoped>

</style>
