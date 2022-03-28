<template>
   <div class="page">
     <section class="hero">
     <h1>Jorge Luis Arteaga is a content creator. <br>
     Based in Lima, Peru.</h1>
   </section>
   
   <section class="bio">
       <p>Background</p>
       <p>With over 4 years of experience as a content marketer for top brands. In addition to writing, he's also created amazing ideas and content for social media campaigns. He is the creator and writer of stories, scripts and social advertising, with experience in the field of editing and brand marketing.</p>
   </section>


   <section class="projects">
       <div class="timeline">
         <Discover />
         <Wuf />
         <Roche />
          
       </div>
   </section>

   <section class="contact">
     <p>Contact</p>
     <a href="mailto:jorgeluisarteagajugo@gmail.com" target="_blank" >Email</a>
   </section>
   
   </div>
</template>

<script>
// @ is an alias to /src
import Discover from '@/components/Discover'
import Wuf from '@/components/Wuf'
import Roche from '@/components/Roche'



export default {
  name: 'Home',
  components: {
    Discover,
    Wuf,
    Roche
  }
}
</script>

<style lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box
}

a {
  text-decoration: none;
  color: black;
}

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

  @include for-phone-only() {
    font-size: 1.6rem;
  }
}

@mixin poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 114px;
  font-size: 7.5rem;

  @include for-phone-only() {
    font-size: 5.3rem;
    line-height: 57px;
  }
}
 
 .hero {
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 10rem;

   @include for-phone-only() {
     grid-template-columns: 100%;
     padding: 0.5rem;
   }

    h1 {
       @include poppins-medium();
       grid-column: span 2;

       @include for-phone-only() {
         grid-column: span 1;
       }
       
   }
 }

 .bio, .experience, .contact {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-column-gap: 20px;
   padding: 8rem;
     @include poppins-regular();
   
   p {
     @include for-phone-only() {
       margin: 2rem 0;
     }
   }

   @include for-phone-only() {
     grid-template-columns: 100%;
     padding: 1.5rem;
   }

 

  //  .timeline {

  //    div {

  //      display:grid;
  //      grid-template-columns: 1fr 1fr;
  //      grid-column-gap: 20px;
  //      margin-bottom: 16rem;

     

  //    }
  //  }
 }

 .projects {


    p {
       @include poppins-regular();
     @include for-phone-only() {
       margin: 2rem 0;
      
     }
   }
 }
 

</style>
