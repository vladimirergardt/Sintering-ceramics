<template>
  <div class="s-menu">
    <el-row class="container" type="flex" style="justify-content: space-between;">
      <div class="s-menu_links">
        <div v-for="(item, index) in menuItems"
             :key="index"
             class="s-menu_item"
             v-model="checkStatusMenu"
             :class="{ active: item.path === statusMenu }"
             @click="selectItem(item)">{{ item.name }}
        </div>
      </div>
      <div class="s-menu_options">
        <div class="s-menu_active">В сети: {{ checkUser }}</div>
        <div class="s-menu_option" @click="logout">Выйти</div>
      </div>
    </el-row>
    <!--router.push({ name: 'user', params: { userId: 123 }})-->
  </div>
</template>

<script src="./menu.js"></script>

<style></style>
