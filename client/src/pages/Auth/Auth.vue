<template>
    <section style="display: flex; align-items: center; justify-content: center; height: 100vh">
      <el-card class="box-card auth">
        <h3 class="s-auth_h">Вход в систему</h3>
        <el-form :model="authForm" :rules="errors" ref="authForm" label-width="120px" class="auth-form">
          <el-form-item class="s-input" prop="login">
            <el-input placeholder="Логин" v-model="authForm.login"></el-input>
          </el-form-item>
          <el-form-item class="s-input" prop="password">
            <el-input placeholder="Пароль" v-model="authForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%; margin-top: 10px" @click="submitForm('authForm')">Войти</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </section>
</template>

<script src="./auth.js"></script>

<style lang="css">
  .auth {
    max-width: 300px;
  }

  .s-auth_h {
    margin: 0;
    padding: 0 0 30px 0;
    text-align: center;
    font-size: 22px;
  }

  .auth-form .el-form-item__content {
    margin-left: 0 !important;
  }

</style>
