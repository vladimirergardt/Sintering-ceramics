<template>
  <section class="s-section">
    <el-card class="box-card s-content">
      <h3 class="s-header">Список материалов</h3>

      <el-button type="primary" icon="el-icon-edit-outline"
        @click="addItem()">Добавить</el-button>

      <ul class="s-list">
        <li class="s-list_item" v-for="material in materialsList" :key="material._id"
          @click="editItem(material)">
          <span class="s-list_item_name">{{ material.name }}</span>
          <span class="s-list_item_options">
           <el-button type="primary" icon="el-icon-delete" circle
            @click="deleteItem(material)"></el-button>
          </span>
        </li>
      </ul>
    </el-card>
  </section>
</template>

<script src="./materialsList.js"></script>

<style></style>
