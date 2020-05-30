<template>
    <div>
    <nav>
<div class = "right menu">
  <div class = "horizontal">
    <router-link to= "/" class = "item">About us</router-link>
    <router-link to = "/faq" class = "item">FAQ</router-link>
    <router-link to = "/search" class = "item">Find my roommate</router-link>
    </div>
     </div> 
     <h1>About us </h1>
     <p>Find a roommate out of our personal interests. Human-moderated roommate service. Find a roommate with personalized roommate matching and Roommate Behavior Ratings.</p>
       </nav> 
    </div>
      
</template>

<script>
export default {
    
}
</script>

<style scoped>

.horizontal {
   display : flex;
   flex-direction: row;
   justify-content: space-evenly;
   position : relative;
   top : 10px;
}
p{
    justify-content: center;
    width : 40%;
    height : 50%;
    position: relative;
    left : 29%;
}
</style>