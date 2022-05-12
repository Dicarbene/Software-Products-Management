<script setup>
/* <div class="hero-content text-center text-neutral flex-col">
      <h1
        class="mb-5 text-5xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-green-200 via-pink-200 to-sky-300">
        软件产品库管理系统</h1>
      <h2
        class="mb-5 text-md lg:text-lg text-primary-content text-transparent bg-clip-text bg-gradient-to-tl from-green-200 to-blue-300">
        软件产品库管理系统是一款旨在对软件进行功能性、可靠性管理的系统软件。可以提高软件的管理效率，方便管理员和用户的一些实时管理操作包括对软件信息、项目内容、详细代码进行各方面的管理，为用户提供充足的信息和快捷的查询、修改手段，解决人工管理时所带来的低效率、易错和难管理等问题。
      </h2>
      <div class="max-w-md">
        <br>
        <button class="btn btn-primary btn-xl text-2xl">Get Started</button>
        <br><br>
        <p class="mb-5 text-secondary-content text-2xl">万旭杰 郑宗泽 李珅</p>
      </div>
    </div> */
</script>

<template>
  <main class="hero from-primary to-secondary bg-gradient-to-br text-primary-content min-h-screen">
    <div class="from-primary to-secondary text-primary-content   grid place-items-center items-end bg-gradient-to-br ">
      <div
        class="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-40 lg:flex-row lg:items-end lg:gap-0 xl:gap-20">
        <div class="lg:pl-10 lg:pb-32">
          <div class="mb-2 py-4 text-center lg:py-10 lg:text-left">
            <h1 class="font-title mb-2 text-4xl font-extrabold sm:text-5xl lg:text-7xl">SPM</h1>
            <h2 class="font-title text-lg font-extrabold sm:text-2xl lg:text-3xl">
              软件产品库管理系统(Software Repository Management)
            </h2>
            <h3 class="font-title text-xs sm:text-lg lg:text-xl mt-4 lg:max-w-5xl">
              提高软件的管理效率，方便管理员和用户的一些实时管理操作包括对软件信息、项目内容、详细代码进行各方面的管理，为用户提供充足的信息和快捷的查询、修改手段，解决人工管理时所带来的低效率、易错和难管理等问题。
            </h3>
          </div>
          <div
            class="flex w-full flex-col items-center space-y-10 lg:flex-row lg:items-start lg:space-x-4 lg:space-y-0">
            <div
              class="mockup-code border-base-content w-full max-w-xs flex-1 border-2 border-opacity-20 bg-transparent pb-6 text-left text-current lg:mx-0">
              <pre data-prefix="$"><code>pnpm install</code></pre>
              <pre data-prefix="$"><code>pnpm run build</code></pre>
              <pre data-prefix="$"><code>pnpm run serve</code></pre>
            </div>
          </div>
          <div class="mt-4 flex flex-1 justify-center space-x-2 lg:mt-6 lg:justify-start">
            <a href="https://github.com/Dicarbene/Software-Products-Management"
              class="btn btn-ghost btn-active lg:btn-lg normal-case">
              <span class="hidden sm:inline">Github</span>
              <span class="inline sm:hidden">Github</span>
            </a>
            <a href="https://software-products-management.vercel.app" class="btn lg:btn-lg normal-case px-20">Start</a>
          </div>
        </div>
      </div>
      <svg class="fill-secondary col-start-1 row-start-1 h-auto w-full" width="1600" height="595" viewBox="0 0 1600 595"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z" />
      </svg>
    </div>

  </main>
  <div class="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br">
    <div class="hero-content mx-auto max-w-md text-center md:max-w-full">
      <div>
        <h2 class="mt-20 mb-2 text-4xl font-extrabold md:text-6xl">主题选择</h2>
        <div class="my-20 flex w-full flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <div data-theme="luxury" class="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8">
            <h3 class="text-sm font-bold">Luxury Theme</h3>
            <div class="mt-2 flex flex-col space-y-2">
              <progress value="40" max="100" class="progress" />
              <div class="flex items-center justify-center space-x-2">
                <div class="btn btn-accent btn-square btn-sm"><svg width="20" height="20"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg></div>
                <label aria-label="toggle" class="label"><input type="checkbox" checked="checked"
                    class="toggle" /></label>
                <label aria-label="Checkbox" class="label"><input type="checkbox" checked="checked"
                    class="checkbox" /></label>
              </div>
              <button class="btn btn-primary btn-block btn-sm">Primary</button>
              <button class="btn btn-secondary btn-block btn-sm">Secondary</button>
              <button class="btn btn-outline btn-block btn-sm">Outline</button>
            </div>
          </div>
          <div data-theme="cupcake" class="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8">
            <h3 class="text-sm font-bold">Cupcake Theme</h3>
            <div class="mt-2 flex flex-col space-y-2">
              <progress value="40" max="100" class="progress" />
              <div class="flex items-center justify-center space-x-2">
                <div class="btn btn-accent btn-square btn-sm"><svg width="20" height="20"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg></div>
                <label aria-label="toggle" class="label"><input type="checkbox" checked="checked"
                    class="toggle" /></label>
                <label aria-label="Checkbox" class="label"><input type="checkbox" checked="checked"
                    class="checkbox" /></label>
              </div>
              <button class="btn btn-primary btn-block btn-sm">Primary</button>
              <button class="btn btn-secondary btn-block btn-sm">Secondary</button>
              <button class="btn btn-outline btn-block btn-sm">Outline</button>
            </div>
          </div>
          <div data-theme="cyberpunk" class="card bg-base-100 text-base-content mx-auto w-full max-w-xs flex-1 p-8">
            <h3 class="text-sm font-bold">Cyberpunk Theme</h3>
            <div class="mt-2 flex flex-col space-y-2">
              <progress value="40" max="100" class="progress" />
              <div class="flex items-center justify-center space-x-2">
                <div class="btn btn-accent btn-square btn-sm"><svg width="20" height="20"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg></div>
                <label aria-label="toggle" class="label"><input type="checkbox" checked="checked"
                    class="toggle" /></label>
                <label aria-label="Checkbox" class="label"><input type="checkbox" checked="checked"
                    class="checkbox" /></label>
              </div>
              <button class="btn btn-primary btn-block btn-sm">Primary</button>
              <button class="btn btn-secondary btn-block btn-sm">Secondary</button>
              <button class="btn btn-outline btn-block btn-sm">Outline</button>
            </div>
          </div>
        </div>
        <a href="/docs/themes" class="btn btn-ghost btn-sm mb-20">{$t("theming-btn")}</a>
        <div />
      </div>
    </div>
  </div>
</template>