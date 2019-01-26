<template>
  <section class="s-section">

    <el-card class="box-card s-content">
      <h3 class="s-header"> {{ checkAction }} </h3>
      <el-button style="margin-bottom: 20px" type="primary" icon="el-icon-arrow-left"
        @click="$router.push({ name: 'materialsList' })">Вернуться</el-button>


      <el-form label-position="top" :model="materialForm" :rules="errors" ref="materialForm" label-width="120px" class="material-form">
        <!--el-form-item v-for="(item, index) in materialForm" :key="index" :label="item.label" class="s-input" :prop="item.propes">
          <el-input v-model="item.value"></el-input>
        </el-form-item-->
        <el-form-item label="Что то" class="s-input" prop="test">
          <el-input v-model="materialForm.test"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" style="width: 100%; margin-top: 10px" @click="submitForm('materialForm')">Сохранить</el-button>
        </el-form-item>
      </el-form>

    </el-card>
  </section>
</template>

<script src="./materialEdit.js"></script>

<style></style>
