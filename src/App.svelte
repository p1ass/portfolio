<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<script lang="ts">
  export let name: string
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte
    apps.
  </p>
  <div class="w-96">
    <ul class="space-y-2">
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-red-50"></li>
          <li class="bg-red-100"></li>
          <li class="bg-red-200"></li>
          <li class="bg-red-300"></li>
          <li class="bg-red-400"></li>
          <li class="bg-red-500"></li>
          <li class="bg-red-600"></li>
          <li class="bg-red-700"></li>
          <li class="bg-red-800"></li>
          <li class="bg-red-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-yellow-50"></li>
          <li class="bg-yellow-100"></li>
          <li class="bg-yellow-200"></li>
          <li class="bg-yellow-300"></li>
          <li class="bg-yellow-400"></li>
          <li class="bg-yellow-500"></li>
          <li class="bg-yellow-600"></li>
          <li class="bg-yellow-700"></li>
          <li class="bg-yellow-800"></li>
          <li class="bg-yellow-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-green-50"></li>
          <li class="bg-green-100"></li>
          <li class="bg-green-200"></li>
          <li class="bg-green-300"></li>
          <li class="bg-green-400"></li>
          <li class="bg-green-500"></li>
          <li class="bg-green-600"></li>
          <li class="bg-green-700"></li>
          <li class="bg-green-800"></li>
          <li class="bg-green-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-blue-50"></li>
          <li class="bg-blue-100"></li>
          <li class="bg-blue-200"></li>
          <li class="bg-blue-300"></li>
          <li class="bg-blue-400"></li>
          <li class="bg-blue-500"></li>
          <li class="bg-blue-600"></li>
          <li class="bg-blue-700"></li>
          <li class="bg-blue-800"></li>
          <li class="bg-blue-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-purple-50"></li>
          <li class="bg-purple-100"></li>
          <li class="bg-purple-200"></li>
          <li class="bg-purple-300"></li>
          <li class="bg-purple-400"></li>
          <li class="bg-purple-500"></li>
          <li class="bg-purple-600"></li>
          <li class="bg-purple-700"></li>
          <li class="bg-purple-800"></li>
          <li class="bg-purple-900"></li>
        </ul>
      </li>
      <li>
        <ul class="grid grid-cols-10 h-7">
          <li class="bg-pink-50"></li>
          <li class="bg-pink-100"></li>
          <li class="bg-pink-200"></li>
          <li class="bg-pink-300"></li>
          <li class="bg-pink-400"></li>
          <li class="bg-pink-500"></li>
          <li class="bg-pink-600"></li>
          <li class="bg-pink-700"></li>
          <li class="bg-pink-800"></li>
          <li class="bg-pink-900"></li>
        </ul>
      </li>
    </ul>
  </div>
</main>
