<template>
  <Layout>
    <div class="hero container-inner mx-auto flex flex-col sm:flex-row justify-between py-16 ">
      <div class="mt-8 text-4xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div class="leading-tight">Iván Santos</div>
        <div class="text-green-700 leading-tight">Bienvenidos a mi web personal &amp; blog</div>
      </div>
      <div class="mt-8 sm:mt-0">
        <g-image src="../../static/ivan_curved_shape.png" width="180" alt="ivan imagen" class="mx-auto sm:mx-0" />
      </div>
    </div> <!-- end hero -->

    <div class="container-inner mx-auto">
      <p class="text-lg sm:text-xl">
        Mi nombre es Iván Santos, soy Doctor en Ingeniería Informática (criptografía aplicada) 🎓 y trabajo como
        desarrollador FullStack 👨🏽‍💻 en Lean Mind desde la paradisíaca 🌴 isla de Tenerife en Canarias, España.
        Me interesan multitud de campos diferentes dentro de la informática y la computación, siendo mis temas principales
        el desarrollo Android 📱, la criptografía 📚 y el machine learning 💻.
        Además, actualmente estoy mejorando mis habilidades 💡 en el desarrollo backend y frontend, siempre teniendo en cuenta
        el uso de buenas prácticas y código limpio.

      <div class="flex justify-between items-center py-6">
        <div class="w-full sm:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/mind_map.svg" alt="browser" />
        </div>
        <div class="w-1/2 px-8 hidden sm:flex justify-end">
          <g-image src="../../static/code_review.svg" alt="mobile" />
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-t border-gray-500 border-b py-16 mb-16 relative">
        <h2 class="font-bold mb-6" id="projects">Estos algunos de mis proyectos personales:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px"><use xlink:href="#dots-triangle" /></svg>
        </div>

        <ul class="text-lg sm:text-xl space-y-6">
          <li class="checkmark">
            <div>WoL Assistant</div>
            <div class="text-lg text-gray-600">Asistente personal y aplicación Android que permite encender tu ordenador
              de manera remota.</div>
          </li>
        </ul>
      </div> <!-- end projects -->
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

