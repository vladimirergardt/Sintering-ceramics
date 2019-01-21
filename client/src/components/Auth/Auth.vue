<template>
    <section>
      {{ this.msg }}
     <!--div v-for="item in posts">
       <p>{{item.title}}</p>
       <p>{{item.description}}</p>
     </div-->

      <div v-if="this.status === ''">
        <div class="block" style="margin-bottom: 10px">
          <br>
          <label>Логин:
            <input v-model="login">
          </label>
        </div>
        <div class="block">
          <label>Пароль:
            <input v-model="password">
          </label>
        </div>
        <br>
        <div>
          <button @click="checkAuth">check</button>
        </div>
      </div>

      <div v-if="this.status !== ''">
        <br>
        <div class="status">
          {{ this.status }}
        </div>
        <br>
        <button @click="back">return</button>
      </div>
    </section>
</template>

<script src="./auth.js"></script>

<style lang="css">
  .block {
    max-width: 250px;
    text-align: right;
    margin: 0 auto;
  }

  .status {
    color: #008800;
    font-size: 20px;
  }

</style>
