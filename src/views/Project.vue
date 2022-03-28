<template>
    <div class="page">
      <Wuf v-if="$route.params.id === 'wuf'" modoCompleto="true"></Wuf>
      <Discover v-if="$route.params.id === 'discover'" modoCompleto="true"></Discover>
      <Roche v-if="$route.params.id === 'roche'" modoCompleto="true"></Roche>
      <Vitac v-if="$route.params.id === 'vitac'" modoCompleto="true"></Vitac>
      <Pulsar v-if="$route.params.id === 'pulsar'" modoCompleto="true"></Pulsar>
      <Gallery gallerySrc="galleryWuf"/>
      
      <div @click="$router.go(-1)" class="backBtn">
        ← Regresar
    </div>
    </div>
    
</template>

<script>
import Wuf from '@/components/Wuf'
import Discover from '@/components/Discover'
import Roche from '@/components/Roche'
import Vitac from '@/components/Vitac'
import Pulsar from '@/components/Pulsar'
import Gallery from '@/components/Gallery'

export default {
    name: 'Project',
    components: {
        Wuf,
        Discover,
        Roche, 
        Vitac,
        Pulsar,
        Gallery
    }, 
    data: {
        galleryWuf:[
            {
                src: '@assets/wuf-1.jpg',
                format: 'image/jpg'
            },
            {
                src: '@assets/wuf-2.jpg',
                format: 'image/jpg'
            },
            {
                src: '@assets/wuf-3.jpg',
                format: 'image/jpg'
            }
],
galleryDiscover:[
            {
                src: '@assets/discover-1.png',
                format: 'image/png'
            },
            {
                src: '@assets/discover-2.png',
                format: 'image/png'
            },
            {
                src: '@assets/discover-3.png',
                format: 'image/png'
            },
            {
                src: '@assets/discover-4.jpg',
                format: 'image/jpg'
            },
            {
                src: '@assets/discover-5.jpg',
                format: 'image/jpg'
            },
            {
                src: '@assets/discover-5.jpg',
                format: 'image/jpg'
            }
]
    }

}
</script>

<style lang="scss">
@mixin poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 114px;
  font-size: 7.5rem;

//   @include for-phone-only() {
//     font-size: 3.3rem;
//     line-height: 45px;
//   }
}

.backBtn {
    left: 50px;
    position: relative;
    cursor: pointer;
    @include poppins-medium();
    font-size: 15px;
}

 .page {
     padding: 5rem 0;
 }
</style>