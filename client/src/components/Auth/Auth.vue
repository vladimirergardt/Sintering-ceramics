<template>
    <section>
      {{ this.msg }}
     <div v-for="item in posts">
       <p>{{item.title}}</p>
       <p>{{item.description}}</p>
     </div>
    </section>
</template>

<script src="./auth.js"></script>

<style lang="css">

</style>
