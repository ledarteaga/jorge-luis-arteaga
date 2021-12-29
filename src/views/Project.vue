<template>
    <div class="page">
      <Wuf v-if="$route.params.id === 'wuf'"></Wuf>
      <Discover v-if="$route.params.id === 'discover'"></Discover>
      <Roche v-if="$route.params.id === 'roche'"></Roche>
      <Vitac v-if="$route.params.id === 'vitac'"></Vitac>
    </div>
</template>

<script>
import Wuf from '@/components/Wuf'
import Discover from '@/components/Discover'
import Roche from '@/components/Roche'
import Vitac from '@/components/Vitac'

export default {
    name: 'Project',
    components: {
        Wuf,
        Discover,
        Roche, 
        Vitac
    }

}
</script>

<style lang="scss">
 .page {
     padding: 5rem 0;
 }
</style>