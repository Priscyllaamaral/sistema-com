<template>
  <div class="app-shell">
      <a href="#conteudo" class="pular-conteudo">Ir para o conteúdo</a>

      <!-- ========== Menu superior ========== -->
      <header class="app-nav">
          <nav class="container nav-interna" aria-label="Menu principal">
              <router-link to="/" class="marca" aria-label="Página inicial">
                  <svg class="marca-logo" viewBox="0 0 410 404" aria-hidden="true">
                      <path fill="url(#vite-a)" d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z" />
                      <path fill="url(#vite-b)" d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.164 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z" />
                      <defs>
                          <linearGradient id="vite-a" x1="6" y1="33" x2="235" y2="344" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#41D1FF" />
                              <stop offset="1" stop-color="#BD34FE" />
                          </linearGradient>
                          <linearGradient id="vite-b" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#FFEA83" />
                              <stop offset="0.083" stop-color="#FFDD35" />
                              <stop offset="1" stop-color="#FFA800" />
                          </linearGradient>
                      </defs>
                  </svg>
                  <span class="marca-nome">Sistema .com</span>
              </router-link>

              <button
                  class="nav-toggle"
                  type="button"
                  :aria-expanded="menuAberto"
                  aria-controls="nav-links"
                  aria-label="Abrir ou fechar menu"
                  @click="menuAberto = !menuAberto"
              >
                  <i :class="['bi', menuAberto ? 'bi-x-lg' : 'bi-list']" aria-hidden="true"></i>
              </button>

              <ul id="nav-links" :class="['nav-links', { aberto: menuAberto }]">
                  <li v-for="link in links" :key="link.to">
                      <router-link
                          :to="link.to"
                          class="nav-link-item"
                          :exact-active-class="link.exato ? 'ativo' : ''"
                          :active-class="link.exato ? '' : 'ativo'"
                      >
                          <i :class="['bi', link.icone]" aria-hidden="true"></i>
                          {{ link.label }}
                      </router-link>
                  </li>
              </ul>
          </nav>
      </header>

      <!-- ========== Conteúdo das páginas ========== -->
      <main id="conteudo" class="app-conteudo">
          <router-view v-slot="{ Component }">
              <transition name="pagina" mode="out-in">
                  <component :is="Component" />
              </transition>
          </router-view>
      </main>

      <footer class="app-rodape">
          <small>&copy; {{ ano }} Sistema .com</small>
      </footer>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuAberto = ref(false)
const ano = new Date().getFullYear()

// Para adicionar uma página ao menu, inclua um objeto aqui.
const links = [
  { to: '/', label: 'Início', icone: 'bi-house-door', exato: true },
  // { to: '/menuCadastro', label: 'Cadastros', icone: 'bi-receipt-cutoff' },
  // { to: '/movimentacoes', label: 'Movimentações', icone: 'bi-arrow-down-up' },
]

// Fecha o menu no celular ao navegar para outra página
watch(() => route.path, () => {
  menuAberto.value = false
})
</script>

<style>
/* Estilos globais: valem para o app inteiro */
:root {
  --brand: #646cff;
  --brand-hover: #747bff;
  --nav-bg: #1b1a2e;
  --texto: #e6e6f2;
  --fundo: #141323;
  --altura-menu: 64px;
}

html,
body {
  margin: 0;
  min-height: 100%;
  background: var(--fundo);
  color: var(--texto);
}

body {
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
</style>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Brilho verde suave no topo, na linguagem visual do site do Vite */
  background:
      radial-gradient(900px 380px at 85% -80px, rgba(100, 108, 255, 0.22), transparent 70%),
      radial-gradient(700px 320px at 0% 0%, rgba(189, 52, 254, 0.10), transparent 70%),
      var(--fundo);
}

/* ---------- Acessibilidade ---------- */
.pular-conteudo {
  position: absolute;
  left: 1rem;
  top: -4rem;
  z-index: 2000;
  padding: 0.5rem 1rem;
  background: var(--brand);
  color: #fff;
  font-weight: 700;
  border-radius: 0.5rem;
  transition: top 0.15s ease;
}

.pular-conteudo:focus {
  top: 0.75rem;
}

/* ---------- Menu ---------- */
.app-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--nav-bg);
  border-bottom: 3px solid var(--brand);
}

.nav-interna {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: var(--altura-menu);
  max-width: 1100px;
}

.marca {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.01em;
}

.marca:hover {
  color: #fff;
}

.marca-logo {
  width: 1.9rem;
  height: auto;
}

.nav-toggle {
  display: none;
  padding: 0.35rem 0.6rem;
  font-size: 1.6rem;
  line-height: 1;
  color: #fff;
  background: transparent;
  border: 0;
  border-radius: 0.5rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-link-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 0.9rem;
  color: rgba(255, 255, 255, 0.78);
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.6rem;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.nav-link-item:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.nav-link-item.ativo {
  color: #fff;
  background: var(--brand);
}

.nav-toggle:focus-visible,
.nav-link-item:focus-visible,
.marca:focus-visible {
  outline: 3px solid var(--brand);
  outline-offset: 2px;
}

/* ---------- Conteúdo e rodapé ---------- */
.app-conteudo {
  flex: 1 0 auto;
}

.app-rodape {
  padding: 1.25rem 0;
  text-align: center;
  color: #8b8aa8;
}

/* ---------- Transição entre páginas ---------- */
.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.15s ease;
}

.pagina-enter-from,
.pagina-leave-to {
  opacity: 0;
}

/* ---------- Mobile ---------- */
@media (max-width: 767.98px) {
  .nav-toggle {
      display: inline-block;
  }

  .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      gap: 0.25rem;
      padding: 0.75rem;
      background: var(--nav-bg);
      border-bottom: 3px solid var(--brand);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
      display: none;
  }

  .nav-links.aberto {
      display: flex;
  }

  .nav-link-item {
      padding: 0.8rem 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .pagina-enter-active,
  .pagina-leave-active,
  .nav-link-item,
  .pular-conteudo {
      transition: none;
  }
}
</style>