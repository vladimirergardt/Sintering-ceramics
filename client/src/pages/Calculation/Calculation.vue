<template>
  <section class="s-section">
    <el-card class="box-card s-content">
      <h3 class="s-header">Определение показателей качества</h3>

      <el-select v-if="showForm" @change="setMaterialProps(material)"
                 v-model="material" placeholder="Материал">
        <el-option
          v-for="item in materialsList"
          :key="item._id"
          :label="item.name"
          :value="item._id">
        </el-option>
      </el-select>
      <el-form v-if="showForm" :model="calculateForm" label-position="top" ref="calculateForm" label-width="120px" class="calculate-form">
        <div class="calculateForm_block">
          <h2 class="s-header_min">Характеристики материала</h2>
          <el-form-item label="Начальный средний размер зерна" :rules="{required: true, message: ' '}" prop="L0">
            <el-input v-model="calculateForm.L0"></el-input>
          </el-form-item>
          <el-form-item label="Толщина поверхностного слоя" :rules="{required: true, message: ' '}" prop="d">
            <el-input v-model="calculateForm.d"></el-input>
          </el-form-item>
          <el-form-item label="Начальный пористость материала" :rules="{required: true, message: ' '}" prop="P0">
            <el-input v-model="calculateForm.P0"></el-input>
          </el-form-item>
          <el-form-item label="Удельная поверхностная энергия" :rules="{required: true, message: ' '}" prop="S">
            <el-input v-model="calculateForm.S"></el-input>
          </el-form-item>
          <el-form-item label="Плотность компактного материала" :rules="{required: true, message: ' '}" prop="ro0">
            <el-input v-model="calculateForm.ro0"></el-input>
          </el-form-item>
          <el-form-item label="Вязкость беспористого материала" :rules="{required: true, message: ' '}" prop="eta0">
            <el-input v-model="calculateForm.eta0"></el-input>
          </el-form-item>
          <el-form-item label="Масса материала" prop="m" :rules="{required: true, message: ' '}">
            <el-input v-model="calculateForm.m"></el-input>
          </el-form-item>
        </div>
        <div class="calculateForm_block">
          <h2 class="s-header_min">Стадия поверхностной самодиффузии</h2>
          <el-form-item label="Предэкспоненциальный множитель" :rules="{required: true, message: ' '}" prop="Ds0">
            <el-input v-model="calculateForm.Ds0"></el-input>
          </el-form-item>
          <el-form-item label="Энергия активации" :rules="{required: true, message: ' '}" prop="Eb">
            <el-input v-model="calculateForm.Eb"></el-input>
          </el-form-item>
          <h2 class="s-header_min">Стадия зернографичной диффузии</h2>
          <el-form-item label="Энергия активации" :rules="{required: true, message: ' '}" prop="Es">
            <el-input v-model="calculateForm.Es"></el-input>
          </el-form-item>
          <h2 class="s-header_min">Варьируемые параметры</h2>
          <h1 class="s-header_xs">Стадия неизотермического спекания</h1>
          <el-form-item label="Время неизотермического спекания" :rules="{required: true, message: ' '}" prop="tau1">
            <el-input v-model="calculateForm.tau1"></el-input>
          </el-form-item>
          <el-form-item label="Начальная температура в печи" :rules="{required: true, message: ' '}" prop="T0">
            <el-input v-model="calculateForm.T0"></el-input>
          </el-form-item>
          <el-form-item label="Конечная температура в печи" :rules="{required: true, message: ' '}" prop="Tk">
            <el-input v-model="calculateForm.Tk"></el-input>
          </el-form-item>
        </div>

        <el-form-item style="margin-top: 30px; width: 100%;">
          <el-button type="primary"
                     @click="submitForm('calculateForm')">Рассчитать</el-button>
        </el-form-item>
      </el-form>
      <div v-if="showResult" class="calculation-result">
        <h2 class="s-header_min" style="margin-top: 20px">Результаты: </h2>
        <div class="s-header_min">Конечная пористость:{{ result.Por }} % </div>
        <div class="s-header_min">Конечный средний размер зерна: {{ result.Ksrz }} Мкм</div>
        <div class="s-header_min">Конечная плотность материала: {{ result.Kpm }} Кг/м^3</div>
        <div class="s-header_min">Конечная вязкость материала: {{ result.Kvm }} МПа*с</div>

        <el-button style="margin: 20px 0" type="primary" icon="el-icon-arrow-left"
                   @click="showForm = !showForm; showResult = !showResult">Вернуться</el-button>
      </div>
    </el-card>
  </section>
</template>

<script src="./calculation.js"></script>

<style></style>
