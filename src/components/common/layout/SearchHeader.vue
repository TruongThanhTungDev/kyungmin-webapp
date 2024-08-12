<template>
  <div class="w-[213px]">
    <div class="flex flex-col items-end gap-2">
      <form class="max-w-[168px] relative">
        <input class="search-input" type="text" placeholder="Search">
        <i class="fa-solid fa-magnifying-glass text-white absolute top-1/2 -translate-y-1/2 cursor-pointer right-0"></i>
      </form>
      <div class="text-white flex gap-2">
        <div class="text-transform">
          공지사항
        </div>
        <div>|</div>
        <div class="text-transform">
          나의 지원
        </div>
        <div>|</div>
        <div class="text-transform">
          자료실
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchHeader'
}
</script>

<style scoped>
.search-input {
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid #ffffff;
  background: none;
  padding-left: 0;
  width: 100%;
  height: 28px;
  line-height: 28px;
  color: #ffffff;
  font-size: 14px;
  outline: none;
}
.search-input::placeholder {
  color: white;
}
.text-transform {
  transition: color 0.5s ease;
}
.text-transform:hover {
  color: #cfcfcf !important;
  cursor: pointer;
}
</style>