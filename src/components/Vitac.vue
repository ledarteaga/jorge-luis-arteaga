<template>
    <div>
        <div class="title">
        <p> Vita C </p>
    </div>
    <div class="gallery">

       <picture>
          <source srcset="@/assets/vitac-1.webp" type="image/webp">
          <img srcset="@/assets/vitac-1.png" type="image/png">
    </picture>

    <picture>
          <source srcset="@/assets/vitac-2.webp" type="image/webp">
          <img srcset="@/assets/vitac-2.png" type="image/png">
    </picture>

        <!-- <img src="@/assets/vitac-1.png" alt="VitaC 1">
        <img src="@/assets/vitac-2.png" alt="VitaC 2"> -->
    </div>
    </div>
</template>

<script>


export default {
    name: 'Vitac',

}
</script>

<style lang="scss">
 
 
 @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap');

@mixin for-phone-only {
    @media (max-width: 599px) { @content; }
  }
  @mixin for-tablet-portrait-up {
    @media (min-width: 600px) { @content; }
  }
  @mixin for-tablet-landscape-up {
    @media (min-width: 900px) { @content; }
  }
  @mixin for-desktop-up {
    @media (min-width: 1200px) { @content; }
  }
  @mixin for-big-desktop-up {
    @media (min-width: 1800px) { @content; }
  }


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

      @include for-phone-only() {
          grid-template-columns: 100%;
          grid-gap: 0;

      }

      img {
          max-width: 650px;
          
          @include for-phone-only() {
            grid-column: 100%;
            width: 100%;
          }
          
      }
  }

</style>