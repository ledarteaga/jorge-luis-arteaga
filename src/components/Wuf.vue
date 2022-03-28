<template>
    <div class="containerWuf">
    
    <section class="gallery">
        <picture>
          <source srcset="@/assets/wuf-1.webp" type="image/webp">
          <img  v-prlx="{ speed: 0.1 }" srcset="@/assets/wuf-1.jpg" type="image/jpg">
        </picture>
        <picture>
          <source srcset="@/assets/wuf-2.webp" type="image/webp">
          <img v-prlx="{ speed: 0.1 }" srcset="@/assets/wuf-2.jpg" type="image/jpg">
        </picture>
        <picture class="last-pic">
          <source srcset="@/assets/wuf-3.webp" type="image/webp">
          <img v-prlx="{ speed: 0.1, limit: { max: 30 } }" srcset="@/assets/wuf-3.jpg" type="image/jpg">
        </picture>
        <!-- <img src="@/assets/discover-3.png" alt="Discover 3"> -->
    </section>

    <section class="descript">
        <div class="title-project">
          <h6> Club Wuf </h6>
        </div>
        <div class="description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, praesentium officiis. Ipsum odit minus maiores eligendi porro iusto, nam eos.</p>
        </div>
        <router-link class="ver-mas" to="/project/wuf" v-if="!modoCompleto">
          → Ver mas
        </router-link>
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
 

.containerWuf {
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 10rem 3rem;
  position: relative;

  @include for-phone-only() {
    grid-template-columns: 100%;
  }

  .descript{
    margin: 25px auto;
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
  right: 30px;
  bottom: 200px;

  @include for-phone-only() {
    font-size: 1.5rem;
    right: 10px;
    bottom: 50px;
  }
}

}


.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 15px 5px;

  @include for-phone-only() {
    grid-template-columns: 1fr 1fr !important;
    grid-gap: 0;
  }

  img {
    max-width: 450px;
    width: 350px;
    border-radius: 20px;
    box-shadow: -3px 2px 7px 0px #c1bdbd;

    @include for-phone-only() {
      grid-column: 100%;
      width: 150px !important;
    }
  }

  .last-pic {
    grid-column: span 2;
  }
}
</style>