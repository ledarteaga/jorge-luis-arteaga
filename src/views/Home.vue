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
       <p>Projects</p>
       <div class="timeline">
         <div>
           <p>WUF</p>
           <router-link to="/project/wuf">Club Wuf</router-link>
         </div>

         <div>
           <p>Motos Discovery</p>
           <router-link to="/project/discover">Escapate con Discover</router-link>
         </div>

         <div>
           <p>Vita C</p>
           <router-link to="/project/vitac">Vita C</router-link>
         </div>

         <div>
           <p>Roche</p>
           <router-link to="/project/roche">Roche</router-link>
         </div>

         <div>
           <p>Pulsar</p>
           <router-link to="/project/pulsar">Pulsar</router-link>
         </div>

         <div>
           <p>Jaime Pesaque</p>
           <summary>MAYTA</summary>
         </div>

         <div>
           <p>Jaime Pesaque</p>
           <summary>MAD BURGER</summary>
         </div>

         <div>
           <p>Jaime Pesaque</p>
           <summary>100 Grados</summary>
         </div>
       </div>
   </section>

   <section class="experience">
       <p>Experience</p>
       <div class="timeline">
         <div>
           <p>2018 - 2019</p>
           <summary>HEYY Solutions</summary>
         </div>

         <div>
           <p>2019 - 2020</p>
           <summary>Base Media</summary>
         </div>

         <div>
           <p>2020 - 2020</p>
           <summary>Mayo Group</summary>
         </div>

         <div>
           <p>2020 - Present</p>
           <summary>Jaime Pesaque Restaurants</summary>
         </div>

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

export default {
  name: 'Home',
  components: {
    
  }
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

@mixin poppins-medium {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  line-height: 114px;
  font-size: 7.5rem;
}
 
 .hero {
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 10rem;

    h1 {
       @include poppins-medium();
       grid-column: span 2;
   }
 }

 .bio, .projects, .experience, .contact {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-column-gap: 20px;
   padding: 8rem;

   @include poppins-regular();

   .timeline {

     div {
       display:grid;
       grid-template-columns: 1fr 1fr;
       grid-column-gap: 20px;
       margin-bottom: 16rem;

     }
   }
 }
 

</style>
