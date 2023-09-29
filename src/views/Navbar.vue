<template>
  <header>
    <router-link to="/">Home</router-link>
    <nav class="navbar">
      <router-link to="/res">Coffee Shop</router-link>
      <router-link to="/rev">Reviews</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
  
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    overflow: hidden;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    justify-content: space-between;
    display: flex;
    align-items: center;
    z-index: 100;
    background-color: #6B8A47;
}

a {
    color: #eae3c0;
    text-decoration: none;
}
.logo {
    font-size: 32px;
    font-weight: 700;    
}

.navbar a{
    position: relative;
    font-size: 18px;
    font-weight: 500;
    margin-left: 40px;
    margin-right: 35px;
}

.navbar a:hover,
.navbar a.active {
    color: orange;
}

.navbar a::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #fff;
    transition: 0.3s;
}

.navbar a:hover::before {
    width: 100% ;
}

section {
    display: flex;
    position: absolute;
}
</style>
