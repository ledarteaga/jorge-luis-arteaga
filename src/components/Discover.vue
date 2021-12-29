<template>
    <div>
        <div class="title">
        <p> Motos Discover </p>
    </div>
    <div class="gallery">
        <img src="@/assets/discover-1.png" alt="Discover 1">
        <img src="@/assets/discover-2.png" alt="Discover 2">
        <img src="@/assets/discover-3.png" alt="Discover 3">
    </div>
    </div>
</template>

<script>


export default {
    name: 'Discover',

}
</script>

<style lang="scss">
 
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

@mixin poppins-regular {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2.53rem;
}

 .title {
     display: grid;
     grid-template-columns: 1fr 1fr;
     padding: 10rem 0;
     
     p {
         @include poppins-regular();
         text-align: center;
         grid-column: span 2;
     }

 }

  .gallery {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      grid-gap: 8px 5px;

      img {
          max-width: 650px;
      }
  }

</style>