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
          <el-form-item label="Начальный средний размер зерна, мкм" :rules="{required: true, message: ' '}" prop="L0">
            <el-input v-model="calculateForm.L0"></el-input>
          </el-form-item>
          <el-form-item label="Толщина поверхностного слоя, нм" :rules="{required: true, message: ' '}" prop="d">
            <el-input v-model="calculateForm.d"></el-input>
          </el-form-item>
          <el-form-item label="Начальный пористость материала, %" :rules="{required: true, message: ' '}" prop="P0">
            <el-input v-model="calculateForm.P0"></el-input>
          </el-form-item>
          <el-form-item :rules="{required: true, message: ' '}" prop="S">
            <span slot="label">Удельная поверхностная энергия, Дж/м<sup>2</sup></span>
            <el-input v-model="calculateForm.S"></el-input>
          </el-form-item>
          <el-form-item :rules="{required: true, message: ' '}" prop="ro0">
            <span slot="label">Плотность компактного материала, кг/м<sup>3</sup></span>
            <el-input v-model="calculateForm.ro0"></el-input>
          </el-form-item>
          <el-form-item label="Вязкость беспористого материала, МПа*с" :rules="{required: true, message: ' '}" prop="eta0">
            <el-input v-model="calculateForm.eta0"></el-input>
          </el-form-item>
          <el-form-item label="Масса материала, кг" prop="m" :rules="{required: true, message: ' '}">
            <el-input v-model="calculateForm.m"></el-input>
          </el-form-item>
        </div>
        <div class="calculateForm_block">
          <h2 class="s-header_min">Варьируемые параметры</h2>
          <h1 class="s-header_xs">Стадия неизотермического спекания</h1>
          <el-form-item label="Время неизотермического спекания, мин" :rules="{required: true, message: ' '}" prop="tau1">
            <el-input v-model="calculateForm.tau1"></el-input>
          </el-form-item>
          <el-form-item label="Начальная температура в печи, С" :rules="{required: true, message: ' '}" prop="T0">
            <el-input v-model="calculateForm.T0"></el-input>
          </el-form-item>
          <el-form-item label="Конечная температура в печи, С" :rules="{required: true, message: ' '}" prop="Tk">
            <el-input v-model="calculateForm.Tk"></el-input>
          </el-form-item>

          <h1 class="s-header_xs">Стадия изотермического спекания</h1>
          <h1 class="s-header_xs">
            <el-checkbox
              v-model="checkIzoterm"
              label="Исключить стадию из расчета"/>
            </h1>
          <el-form-item label="Время выдержки, мин" :rules="{required: true, message: ' '}" prop="tau1">
            <el-input v-model="calculateForm.tau2"></el-input>
          </el-form-item>
          <el-form-item label="Давление, МПа" :rules="{required: true, message: ' '}" prop="T0">
            <el-input v-model="calculateForm.Pg"></el-input>
          </el-form-item>
        </div>

        <div class="calculate-form" style="width: 100%">
          <div class="calculateForm_block">
            <h2 class="s-header_min">Стадия поверхностной самодиффузии</h2>
            <el-form-item :rules="{required: true, message: ' '}" prop="Ds0">
              <span slot="label">Предэкспоненциальный множитель, м<sup>2</sup>/с</span>
              <el-input v-model="calculateForm.Ds0"></el-input>
            </el-form-item>
            <el-form-item label="Энергия активации, кДж/моль" :rules="{required: true, message: ' '}" prop="Eb">
              <el-input v-model="calculateForm.Es"></el-input>
            </el-form-item>
          </div>
          <div class="calculateForm_block">
            <h2 class="s-header_min">Стадия зернографичной диффузии</h2>
            <el-form-item :rules="{required: true, message: ' '}" prop="Ds0">
              <span slot="label">Предэкспоненциальный множитель, м<sup>2</sup>/с</span>
              <el-input v-model="calculateForm.Db0"></el-input>
            </el-form-item>
            <el-form-item label="Энергия активации, кДж/моль" :rules="{required: true, message: ' '}" prop="Es">
              <el-input v-model="calculateForm.Eb"></el-input>
            </el-form-item>
          </div>
        </div>

        <div class="calculate-form" style="width: 100%">
          <div class="calculateForm_block">
            <h2 class="s-header_min">Поиск режимного значения плотности</h2>
            Режимное значение плотности, кг/м<sup>3</sup>
            <template v-if="modalDensity === ''">
              <el-button type="primary" size="medium" round
                @click="getModalDensity"
                         :loading="loadDensity"
              >
                Поиск
              </el-button>
            </template>
            <template v-else>
              - {{ modalDensity }}
            </template>
          </div>
        </div>

        <el-form-item style="margin-top: 30px; width: 100%;">
          <el-button type="primary"
                     @click="submitForm('calculateForm')">Рассчитать</el-button>
        </el-form-item>
      </el-form>

      <div v-if="showResult" class="calculation-result">
        <h2 class="s-header_min" style="margin-top: 20px">Результаты: </h2>
        <div class="s-header_min">Конечная пористость: {{ result.Por }} % </div>
        <div class="s-header_min">Конечный средний размер зерна: {{ result.Ksrz }} Мкм</div>
        <div class="s-header_min">Конечная плотность материала: {{ result.Kpm }} Кг/м<sup>3</sup></div>
        <div class="s-header_min">Конечная вязкость материала: {{ result.Kvm }} МПа*с</div>

        <el-button style="margin: 20px 0" type="primary" icon="el-icon-arrow-left"
                   @click="showForm = !showForm; showResult = !showResult">Вернуться</el-button>
      </div>
    </el-card>
  </section>
</template>

<script src="./calculation.js"></script>

<style></style>
