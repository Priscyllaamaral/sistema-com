<template>
    <main class="container menu-movimentacoes py-4 py-lg-5">
        <header class="menu-header mb-4 mb-lg-5">
            <router-link to="/" class="voltar">
                <i class="bi bi-arrow-left" aria-hidden="true"></i>
                Voltar ao início
            </router-link>
            <h1 class="menu-title">Movimentações</h1>
            <p class="menu-subtitle">Acompanhe caixa, vendas, estoque e despesas.</p>
        </header>

        <section class="row g-4" aria-label="Movimentações disponíveis">
            <div v-for="item in movimentacoes" :key="item.to" class="col-12 col-md-6">
                <router-link :to="item.to" class="mov-card" :aria-label="`Abrir ${item.titulo}`">
                    <span class="mov-icone" aria-hidden="true">
                        <i :class="['bi', item.icone]"></i>
                    </span>

                    <div class="mov-texto">
                        <h2 class="mov-titulo">{{ item.titulo }}</h2>
                        <p class="mov-descricao">{{ item.descricao }}</p>
                    </div>

                    <i class="bi bi-chevron-right mov-seta" aria-hidden="true"></i>
                </router-link>
            </div>
        </section>
    </main>
</template>

<script setup>
const movimentacoes = [
    {
        to: '/caixa',
        icone: 'bi-cash-coin',
        titulo: 'Caixa',
        descricao: 'Recebimentos, consultas e relatórios',
    },
    {
        to: '/venda',
        icone: 'bi-cart-check',
        titulo: 'Vendas',
        descricao: 'Consultas e relatórios',
    },
    {
        to: '/movEstoque/listar',
        icone: 'bi-box-seam',
        titulo: 'Movimento de estoque',
        descricao: 'Entrada de produtos',
    },
    {
        to: '/movimentacoes/despesas',
        icone: 'bi-wallet2',
        titulo: 'Despesas',
        descricao: 'Cadastro e consultas',
    },
]
</script>

<style scoped>
.menu-movimentacoes {
    --marca: #646cff;
    --marca-forte: #b4b8ff;
    --destaque: #646cff;
    --tinta: #ececf6;
    --tinta-suave: #a3a2bd;
    --superficie: #1f1e33;
    --borda-card: #3d3b66;

    max-width: 1100px;
}

/* ---------- Cabeçalho ---------- */
.voltar {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: var(--marca-forte);
    text-decoration: none;
    border-radius: 0.4rem;
}

.voltar:hover {
    color: #fff;
}

.voltar:focus-visible {
    outline: 3px solid var(--destaque);
    outline-offset: 3px;
}

.menu-title {
    margin: 0;
    font-size: clamp(1.75rem, 1.2rem + 2vw, 2.5rem);
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--tinta);
}

.menu-subtitle {
    margin: 0.25rem 0 0;
    font-size: 1.05rem;
    color: var(--tinta-suave);
}

/* ---------- Card ---------- */
.mov-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 100%;
    padding: 1.1rem 1.25rem;
    text-decoration: none;
    color: var(--tinta);
    background: var(--superficie);
    border: 2px solid var(--borda-card);
    border-radius: 1rem;
    box-shadow: 6px 6px 0 var(--destaque);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.mov-card:hover {
    transform: translate(4px, 4px);
    box-shadow: 2px 2px 0 var(--destaque);
    color: var(--tinta);
}

.mov-card:active {
    transform: translate(6px, 6px);
    box-shadow: 0 0 0 var(--destaque);
}

.mov-card:focus-visible {
    outline: 3px solid var(--destaque);
    outline-offset: 4px;
}

/* ---------- Ícone ---------- */
.mov-icone {
    display: grid;
    place-items: center;
    flex: 0 0 auto;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 0.8rem;
    background: var(--marca);
    color: #fff;
    font-size: 1.6rem;
}

/* ---------- Texto ---------- */
.mov-texto {
    flex: 1 1 auto;
    min-width: 0;
}

.mov-titulo {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.01em;
}

.mov-descricao {
    margin: 0.2rem 0 0;
    font-size: 0.9rem;
    line-height: 1.35;
    color: var(--tinta-suave);
}

.mov-seta {
    flex: 0 0 auto;
    font-size: 1.2rem;
    color: var(--marca-forte);
    transition: transform 0.15s ease;
}

.mov-card:hover .mov-seta {
    transform: translateX(3px);
}

/* ---------- Mobile ---------- */
@media (max-width: 575.98px) {
    .mov-card {
        padding: 1rem;
        box-shadow: 4px 4px 0 var(--destaque);
    }
}

/* ---------- Acessibilidade ---------- */
@media (prefers-reduced-motion: reduce) {
    .mov-card,
    .mov-seta {
        transition: none;
    }
}
</style>