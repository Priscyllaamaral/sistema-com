<template>
    <main class="container menu-principal py-4 py-lg-5">
        <header class="menu-header mb-4 mb-lg-5">
            <h1 class="menu-title">{{ saudacao }}!</h1>
            <p class="menu-subtitle">Escolha um módulo para começar.</p>
        </header>

        <section class="row g-4" aria-label="Módulos do sistema">
            <div v-for="modulo in modulos" :key="modulo.id" class="col-12 col-lg-6">
                <router-link :to="modulo.to" class="modulo-card" :aria-label="`Abrir ${modulo.titulo}`">
                    <div class="d-flex align-items-start gap-3 gap-sm-4">
                        <span class="modulo-icone" aria-hidden="true">
                            <i :class="['bi', modulo.icone]"></i>
                        </span>

                        <div class="flex-grow-1">
                            <h2 class="modulo-titulo">{{ modulo.titulo }}</h2>
                            <p class="modulo-descricao">{{ modulo.descricao }}</p>
                        </div>
                    </div>

                    <ul class="modulo-itens list-unstyled" aria-label="Conteúdo do módulo">
                        <li v-for="item in modulo.itens" :key="item.label" class="modulo-chip">
                            <i :class="['bi', item.icone]" aria-hidden="true"></i>
                            {{ item.label }}
                        </li>
                    </ul>

                    <span class="modulo-acao">
                        Abrir {{ modulo.titulo.toLowerCase() }}
                        <i class="bi bi-arrow-right-short" aria-hidden="true"></i>
                    </span>
                </router-link>
            </div>
        </section>
    </main>
</template>

<script setup>
import { computed } from 'vue'

const modulos = [
    {
        id: 'cadastros',
        to: '/cadastros',
        icone: 'bi-receipt-cutoff',
        titulo: 'Cadastros',
        descricao: 'Mantenha atualizados os dados que alimentam todo o sistema.',
        itens: [
            { label: 'Fornecedores', icone: 'bi-truck' },
            { label: 'Clientes', icone: 'bi-people' },
            { label: 'Produtos', icone: 'bi-box-seam' },
            { label: 'Usuários', icone: 'bi-person-gear' },
            { label: 'Vendedores', icone: 'bi-person-badge' },
        ],
    },
    {
        id: 'movimentacoes',
        to: '/movimentacoes',
        icone: 'bi-arrow-down-up',
        titulo: 'Movimentações',
        descricao: 'Acompanhe o dia a dia: entradas, saídas e vendas.',
        itens: [
            { label: 'Caixa', icone: 'bi-cash-coin' },
            { label: 'Despesas', icone: 'bi-wallet2' },
            { label: 'Estoque', icone: 'bi-boxes' },
            { label: 'Vendas', icone: 'bi-bag-check' },
        ],
    },
]

const saudacao = computed(() => {
    const hora = new Date().getHours()
    if (hora < 12) return 'Bom dia'
    if (hora < 18) return 'Boa tarde'
    return 'Boa noite'
})
</script>

<style scoped>
.menu-principal {
    --marca: #5b21b6;
    --marca-forte: #3b0f80;
    --marca-suave: #f1ebff;
    --tinta: #1c1233;
    --tinta-suave: #6b6480;
    --borda: #d9cff2;

    max-width: 1100px;
}

/* ---------- Cabeçalho ---------- */
.menu-title {
    margin: 0;
    font-size: clamp(1.75rem, 1.2rem + 2vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--borda);
}

.menu-subtitle {
    margin: 0.25rem 0 0;
    font-size: 1.05rem;
    color: var(--marca-suave);
}

/* ---------- Card ---------- */
.modulo-card {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    height: 100%;
    padding: 1.5rem;
    text-decoration: none;
    color: var(--tinta);
    background: #fff;
    border: 2px solid var(--tinta);
    border-radius: 1rem;
    box-shadow: 6px 6px 0 var(--marca);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

/* O card "afunda" ao passar o mouse, como um botão físico */
.modulo-card:hover {
    transform: translate(4px, 4px);
    box-shadow: 2px 2px 0 var(--marca);
    color: var(--tinta);
}

.modulo-card:active {
    transform: translate(6px, 6px);
    box-shadow: 0 0 0 var(--marca);
}

.modulo-card:focus-visible {
    outline: 3px solid var(--marca);
    outline-offset: 4px;
}

/* ---------- Ícone ---------- */
.modulo-icone {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 4rem;
    height: 4rem;
    border-radius: 0.9rem;
    background: var(--marca);
    color: #fff;
    font-size: 1.9rem;
}

/* ---------- Texto ---------- */
.modulo-titulo {
    margin: 0;
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -0.01em;
}

.modulo-descricao {
    margin: 0.3rem 0 0;
    color: var(--tinta-suave);
    line-height: 1.45;
}

/* ---------- Chips ---------- */
.modulo-itens {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
}

.modulo-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--marca-forte);
    background: var(--marca-suave);
    border: 1px solid var(--borda);
    border-radius: 999px;
}

.modulo-chip i {
    font-size: 0.95rem;
}

/* ---------- Ação ---------- */
.modulo-acao {
    display: inline-flex;
    align-items: center;
    margin-top: auto;
    font-weight: 700;
    color: var(--marca);
}

.modulo-acao i {
    font-size: 1.6rem;
    line-height: 1;
    transition: transform 0.15s ease;
}

.modulo-card:hover .modulo-acao i {
    transform: translateX(4px);
}

/* ---------- Mobile ---------- */
@media (max-width: 575.98px) {
    .modulo-card {
        padding: 1.15rem;
        box-shadow: 4px 4px 0 var(--marca);
    }

    .modulo-icone {
        width: 3.25rem;
        height: 3.25rem;
        font-size: 1.5rem;
    }
}

/* ---------- Acessibilidade ---------- */
@media (prefers-reduced-motion: reduce) {
    .modulo-card,
    .modulo-acao i {
        transition: none;
    }
}
</style>