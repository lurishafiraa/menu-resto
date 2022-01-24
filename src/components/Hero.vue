<template>
  <div class="row mt-4">
      <div class="col">
          <div class="d-flex h-100">
              <div class="justify-content-center align-self-center">
                  <h2><strong>Delicious Food, </strong><br>in Your Gadget</h2>
                  <p>Ayo pilih makanan favoritmu sekarang</p>
                  <router-link class="btn btn-lg btn-success" to="/menu">Pesan</router-link>
                  <!-- <router-link class="btn btn-lg btn-success">Pesan</router-link> -->
              </div>
          </div>
      </div>
      <div class="col">
          <img src="../assets/images/Hero.png" width="100%"/>

      </div>
  </div>
</template>

<script>
export default {
    name: 'Hero'

}
</script>

<style>

</style>