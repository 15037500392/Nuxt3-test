<template>
    <div class="body">
        <NavBar></NavBar>
        <main class="container">
            <slot/>
        </main>
       
        <PageFooter></PageFooter>
    </div>
</template>
<style>
    .body{
        min-width: 1000px;
        min-height: 100vh;
        @apply bg-gray-100 flex flex-col;
    }
</style>