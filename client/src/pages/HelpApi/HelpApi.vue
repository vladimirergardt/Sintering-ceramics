<template>
  <section>
    <el-row class="container" type="flex" align="flex-end">
      <el-card class="box-card">
        <h2>Справка API</h2>
        <div class="method">
          <span class="method-path">/addUser</span>
          <span class="method-info"> - добавление пользователя в базу</span>
          <h5 class="params-h">Параметры (POST):</h5>
          <div class="method-params">
            {<br>
            &nbsp;"login": "login",<br>
            &nbsp;"password": "password",<br>
            &nbsp;"access": "access",<br>
            }
          </div>
        </div>

        <div class="method">
          <span class="method-path">/getUsers</span>
          <span class="method-info"> - получить список всех пользователей</span>
          <h5 class="params-h">Параметры (GET):</h5>
          <div class="method-params">
            нет
          </div>
        </div>

        <div class="method">
          <span class="method-path">/auth</span>
          <span class="method-info"> - аутентефикация</span>
          <h5 class="params-h">Параметры (POST):</h5>
          <div class="method-params">
            {<br>
            &nbsp;"login": "login",<br>
            &nbsp;"password": "password",<br>
            }
          </div>
        </div>
    </el-card>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'helpApi'
}
</script>

<style>
  .method {
    margin-bottom: 25px;
  }

  .method-path {
    color: #008800;
    font-size: 18px;
  }

  .method-info {
    font-size: 16px;
    color: #000000;
  }

  .params-h {
    margin: 10px 0 5px 0;
  }
</style>
