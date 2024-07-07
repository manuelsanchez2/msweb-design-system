<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Grid from './lib/grid/Grid.svelte'
  let currentYear = new Date().getFullYear()
</script>

<header class="header">
  <h1>Design System msweb</h1>
</header>
<main>
  <div class="container">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt
      expedita numquam, eius facere cumque maxime. Beatae, ratione rerum iure
      rem aliquid quia. Quisquam laborum itaque repellendus debitis esse animi?
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptatum
      quasi ea accusantium ratione necessitatibus id tempora labore, distinctio
      eum debitis nisi eligendi animi at voluptate dignissimos autem eveniet
      numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Temporibus ut fugit velit perspiciatis ratione fuga reprehenderit
      provident beatae unde distinctio, aliquid voluptatem nemo quos. Sed vel
      architecto nemo atque quas.
    </p>
    <div class="card">
      <Counter />
    </div>

    <Grid
      name="This system includes"
      elements={[
        'Color variables',
        'Color scheme',
        'Spacing variables',
        'Accessible Font',
        'Functions & Mixins',
        'Tested components',
        'Documentation',
        'Error handling',
        'Web components support',
      ]}
    />

    <a class="btn" href="https://www.google.de"> Click me I am a button</a>
  </div>
</main>
<footer class="footer">
  Design System msweb / © {currentYear} All Rights Reserved
</footer>

<style>
</style>
