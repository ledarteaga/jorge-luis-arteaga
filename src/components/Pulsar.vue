<template>
    <div>
        <div class="title">
        <p> Pulsar </p>
    </div>
    <div class="gallery">
        <iframe src="https://drive.google.com/file/d/1K9rSXzp7awOC0tCloZ1QeXtkikEIJc2_/preview" width="640" height="480" allow="autoplay"></iframe>
    </div>
    </div>
</template>

<script>


export default {
    name: 'Pulsar',

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

      }

      iframe {
          
          grid-column: span 2;

          @include for-phone-only() {
            width: 340px;
            height: auto;
          }
      }
  }

</style>