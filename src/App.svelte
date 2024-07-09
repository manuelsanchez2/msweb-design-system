<script lang="ts">
  import { CUSTOM_EVENTS, type KEY_OF_CUSTOM_EVENTS } from './constants'
  import Grid from './lib/grid/Grid.svelte'

  import './lib/input-switcher/InputSwitcher.svelte'
  import Tab from './lib/tab/Tab.svelte'

  let currentYear = new Date().getFullYear()

  // receive event from input-switcher
  function handleThemeChange(
    event: KEY_OF_CUSTOM_EVENTS & { detail: boolean }
  ) {
    if (event.detail) {
      document.body.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    } else {
      document.body.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  // listen to event from input-switcher
  window.addEventListener(CUSTOM_EVENTS.THEME_CHANGE as any, handleThemeChange)
  document.body.setAttribute(
    'data-theme',
    localStorage.getItem('theme') || 'dark'
  )
</script>

<header class="header">
  <h1>Design System msweb</h1>
</header>
<main>
  <div class="container">
    <div class="main__switch">
      <input-switcher
        name="Theme-Switcher"
        nameOn="Light"
        nameOff="Dark"
        ariaLabelOn="Switch to light theme"
        ariaLabelOff="Switch to dark theme"
        eventToSend={CUSTOM_EVENTS.THEME_CHANGE}
        initialState={localStorage.getItem('theme') === 'light'}
      >
      </input-switcher>
    </div>

    <Tab>
      <h2>Introduction</h2>
    </Tab>

    <p>
      Hi! In this design system you will find a collection of good practices
      already set up for you. You can use it as a starting point for your next
      project or as a reference for your current one. I decided to create this
      to refresh some of my knowledge regarding <strong>SASS/SCSS</strong> and
      that is why I used some of their <strong>functions/mixins</strong> to
      handle colors and spacing. I also included some
      <strong>web components</strong> to show how you can use them in your project.
      I hope you enjoy it!
    </p>

    <p>
      The repo is available on <a
        rel="nofollow noopener"
        target="_blank"
        href="https://github.com/manuelsanchez2/msweb-design-system">GitHub</a
      >. It is open source and extremely opinionated. For example, we have
      <strong>husky</strong>
      to run <strong>test </strong>before every commit. By the way, we are using
      <strong>vitest</strong> for testing. With Svelte it is pretty easy to
      create components and also <strong>web components</strong>. This page and
      its layout are heavily inspired by the amazing work of
      <a target="_blank" href="https://component.gallery/">Component Gallery</a
      >.
    </p>

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
        'Dark/Light mode',
        'SASS/SCSS support',
        'Husky',
      ]}
    />

    <div style="margin-top: 2rem;"></div>
    <Tab>
      <h2>Contact</h2>
    </Tab>

    <p>
      If you have any questions or suggestions, feel free to contact me
      <a href="mailto:manusansan22@gmail.com">here</a>.
    </p>

    <!-- <a class="btn" href="https://www.google.de"> Click me I am a button</a> -->
  </div>
</main>
<footer class="footer">
  Design System msweb / © {currentYear} All Rights Reserved
</footer>

<style>
  .header {
    position: relative;
  }
  .main__switch {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
  }

  .header h1 {
    text-align: center;
  }
</style>
