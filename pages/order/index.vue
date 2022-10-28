<template>
  <div>
    <Header title="Order"> </Header>
    <BottomNavbar />
  </div>
</template>
<script>
export default {
  middleware: ['authenticated'],
}
</script>
