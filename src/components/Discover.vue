<template>
    <div class="container">
    <section class="descript">
        <div class="title-project">
          <h6> Motos Discover </h6>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium officiis. Ipsum odit minus maiores eligendi porro iusto, nam eos.</p>
        </div>
        <router-link class="ver-mas" to="/project/discover" v-if="!modoCompleto">
          → Ver mas
        </router-link>
    </section>
    
    <section class="gallery">
        <picture>
          <source srcset="@/assets/discover-1.webp" type="image/webp">
          <img  v-prlx="{ preserveInitialPosition: true, speed: 0.1}" srcset="@/assets/discover-1.png" type="image/png">
        </picture>
        <picture>
          <source srcset="@/assets/discover-2.webp" type="image/webp">
          <img v-prlx="{ preserveInitialPosition: true, speed: 0.1}" srcset="@/assets/discover-2.png" type="image/png">
        </picture>
        <picture class="last-pic">
          <source srcset="@/assets/discover-3.webp" type="image/webp">
          <img v-prlx="{ preserveInitialPosition: true, speed: 0.1, min: -120}" srcset="@/assets/discover-3.png" type="image/png">
        </picture>
        <!-- <img src="@/assets/discover-3.png" alt="Discover 3"> -->
    </section>
    </div>
</template>

<script>
export default {
  name: "Discover",
  props: {
    modoCompleto: Boolean
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap");

@mixin for-phone-only {
  @media (max-width: 599px) {
    @content;
  }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) {
    @content;
  }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) {
    @content;
  }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) {
    @content;
  }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) {
    @content;
  }
}

@mixin poppins-regular {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 2.53rem;
}

@mixin poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 114px;
  font-size: 7.5rem;

  @include for-phone-only() {
    font-size: 3.3rem;
    line-height: 45px;
  }
}
 

.container {
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 10rem 3rem;
  position: relative;

    @include for-phone-only() {
       grid-template-columns: 100%;
     }


  .descript{
    margin: auto;

    @include for-phone-only() {
      margin: 25px auto;
    }
  }

  .title-project, .description {
  
  p {
    @include poppins-regular();
    text-align: left;
    grid-column: span 2;
    margin: 20px 0;
  }
}

.title-project {
  @include poppins-medium();
  line-height: 46px;
}


.ver-mas {
  @include poppins-medium();
  font-size: 13px;
  position: absolute;
  left: 30px;
  bottom: 60px;

  @include for-phone-only() {
    font-size: 1.5rem;
    left: 10px;
    bottom: 20px;
  }
}

}


.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 15px 5px;

  @include for-phone-only() {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }

  img {
    max-width: 450px;
    width: 350px;
    border-radius: 20px;
    box-shadow: -3px 2px 7px 0px #c1bdbd;

    @include for-phone-only() {
      grid-column: 1fr 1fr;
    }
  }

  .last-pic {
    grid-column: span 2;
  }
}
</style>