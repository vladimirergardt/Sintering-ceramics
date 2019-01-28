<template>
  <section class="s-section">

    <el-card class="box-card s-content">
      <h3 class="s-header"> {{ checkAction }} </h3>
      <el-button style="margin-bottom: 20px" type="primary" icon="el-icon-arrow-left"
        @click="$router.push({ name: 'materialsList' })">Вернуться</el-button>



      <el-form label-position="top" :model="MainForm.materialsForm" ref="MainForm" label-width="120px" class="materials-form">

        <el-form-item
          v-for="(domain, index) in MainForm.materialsForm.properties"
          :label="domain.label"
          :key="domain.key"
          :prop="'properties.' + index + '.value'"
          :rules="rules.value"
        >
          <el-input v-model="domain.value"
                    :style="(domain.key === 'name') ? 'max-width: 300px' : 'max-width: 200px'"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 30px">
          <el-button v-if="getAuth.access === 'admin'" type="primary"
                     @click="submitForm('MainForm')">Сохранить</el-button>
        </el-form-item>

      </el-form>


    </el-card>
  </section>
</template>

<script src="./materialEdit.js"></script>

<style></style>
