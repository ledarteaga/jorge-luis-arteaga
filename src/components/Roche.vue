<template>
  <div class="containerRoche">
    <section class="galleryRoche">
      <picture>
        <source srcset="@/assets/roche-1.webp" type="image/webp" />
        <img
          v-prlx="{ speed: 0.1, preserveInitialPosition: true }"
          srcset="@/assets/roche-1.png"
          type="image/png"
        />
      </picture>
      <picture>
        <source srcset="@/assets/roche-2.webp" type="image/webp" />
        <img
          v-prlx="{ speed: 0.1, preserveInitialPosition: true }"
          srcset="@/assets/roche-2.png"
          type="image/png"
        />
      </picture>
      <picture class="center-pic">
        <source srcset="@/assets/roche-3.webp" type="image/webp" />
        <img
          v-prlx="{ speed: 0.15, preserveInitialPosition: true, limit: { max: 30 } }"
          srcset="@/assets/roche-3.jpeg"
          type="image/jpeg"
        />
      </picture>

      <!-- <img src="@/assets/discover-3.png" alt="Discover 3"> -->
    </section>

    <section class="descript">
      <div class="title-project">
        <h6>Roche</h6>
      </div>
      <div class="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          praesentium officiis. Ipsum odit minus maiores eligendi porro iusto,
          nam eos.
        </p>
      </div>
      <router-link class="ver-mas" to="/project/roche" v-if="!modoCompleto"> → Ver mas </router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "Roche",
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
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  line-height: 114px;
  font-size: 7.5rem;

  @include for-phone-only() {
    font-size: 3.3rem;
    line-height: 45px;
  }
}

.containerRoche {
  display: grid;
  grid-template-columns: 1fr;
  padding: 10rem 3rem;
  position: relative;

  @include for-phone-only() {
    padding: 10rem 0;
  }

  .descript {
    margin: 140px auto;
    padding: 0 150px;

    @include for-phone-only() {
      margin: 80px 0;
      padding: 0 50px;
    }
  }

  .title-project,
  .description {
      width: 50%;

      @include for-phone-only() {
        width: 80%;
      }
    
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
    right: 220px;
    bottom: 150px;

    @include for-phone-only() {
      right: 20px;
      font-size: 1.5rem;
    }
  }
}

.galleryRoche {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 15px 5px;
  width: 95%;
  margin: auto;
  // width: 60%;
  // margin: auto;

  @include for-phone-only() {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0;
  }

  img {
    max-width: 450px;
    width: 315px;
    border-radius: 20px;
    box-shadow: -3px 2px 7px 0px #3c3b3b;

    @include for-phone-only() {
      grid-column: 100%;
      width: 150px;

    }
  }

  .center-pic {
    position: absolute;
   
  }

  .last-pic {
    grid-column: span 2;
  }
}
</style>