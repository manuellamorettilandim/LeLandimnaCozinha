document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.nav-tabs li');
    const contents = document.querySelectorAll('.tab-content');
    const logoArea = document.getElementById('home-trigger');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mainNav = document.getElementById('main-nav');
    const mobileBottomItems = document.querySelectorAll('.mobile-nav-item');

    function switchTab(tabId) {
        // Close mobile menu if open (safely checking)
        if (mobileMenuBtn && mobileMenuBtn.classList.contains('open')) {
            toggleMobileMenu();
        }
        
        // Update desktop tabs active state
        tabs.forEach(t => {
            if (t.getAttribute('data-tab') === tabId) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });

        // Update mobile bottom nav items active state
        mobileBottomItems.forEach(item => {
            if (item.getAttribute('data-tab') === tabId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Show/Hide sections
        contents.forEach(content => {
            if (content.id === tabId) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        // Always scroll to top when switching
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');
            if (target) switchTab(target);
        });
    });

    // Mobile bottom navigation click event listeners
    mobileBottomItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-tab');
            if (target) switchTab(target);
        });
    });

    if (logoArea) {
        logoArea.addEventListener('click', () => {
            switchTab('missao');
        });
    }

    // Mobile Menu Toggle
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('open');
        mainNav.classList.toggle('open');
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mainNav.classList.contains('open') && 
            !mainNav.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            toggleMobileMenu();
        }
    });

    // Dish Data for section detail
    const dishData = {
        'galinhada': {
            title: 'Galinhada Caipira',
            price: 'R$ 39,90 / pessoa',
            images: ['Imagem3.jpg'],
            ingredients: ['Sobrecoxa desossada', 'Calabresa e Bacon', 'Muçarela ralada', 'Cebola, alho e cheiro verde', 'Milho em conserva', 'Cenoura', 'Aipo', 'Pimentão amarelo e vermelho', 'Cebola roxa', 'Vagem', 'Tomate cereja', 'Açafrão da terra', 'Arroz parboilizado'],
            history: 'A Galinhada é um pilar da cultura caipira, sendo uma herança direta das expedições dos Bandeirantes, que traziam de Portugal o hábito de ensopar aves com arroz. Curiosamente, além de ser um prato do dia a dia, em muitas cidades do interior ela é a estrela da madrugada do Sábado de Aleluia, simbolizando a quebra do jejum da Quaresma com fartura e sabor.\n\nExiste uma disputa histórica entre Goiás e Minas Gerais sobre a "paternidade" da receita, mas a verdade é que ela se adaptou a cada chão que pisou. O segredo da nossa galinhada está no cozimento lento que permite ao arroz absorver toda a essência do frango e do açafrão, criando uma experiênca que remete ao calor do fogão a lenha das antigas fazendas.'
        },
        'paella': {
            title: 'Paella Caipira',
            price: 'R$ 45,90 / pessoa',
            images: ['Imagem4.jpg'],
            ingredients: ['Sobrecoxa desossada', 'Lombo suíno', 'Linguiça toscana', 'Calabresa e Bacon', 'Cebola, alho e cheiro verde', 'Cenoura', 'Aipo', 'Ervilhas', 'Pimentão amarelo e vermelho', 'Cebola roxa', 'Vagem', 'Tomate cereja', 'Muçarela ralada', 'Açafrão da terra', 'Arroz parboilizado'],
            history: 'Diferente da versão original espanhola que nasceu com carnes de caça e coelho, a Paella Caipira é uma obra-prima do improviso técnico brasileiro. Ela surgiu no interior de São Paulo, onde mestres cozinheiros adaptaram a famosa "paellera" larga para os ingredientes abundantes da nossa terra, substituindo os caros frutos do mar por proteínas terrestres como o lombo e a costelinha.\n\nO que torna este prato surpreendente é a harmonia entre a técnica de cozimento espanhola e o tempero rústico do interior. É um prato festivo por natureza, desenhado para ser o centro das atenções em grandes reuniões, onde o aroma do açafrão e das carnes douradas convida todos a se aproximarem do tacho.'
        },
        'baiao': {
            title: 'Baião de Dois',
            price: 'R$ 49,90 / pessoa',
            images: ['Imagem5.jpg'],
            ingredients: ['Carne seca desfiada', 'Calabresa e Bacon', 'Cebola, alho e cheiro verde', 'Coentro', 'Pimenta biquinho', 'Pimentão amarelo e vermelho', 'Cebola roxa', 'Tomate cereja', 'Manteiga de garrafa', 'Muçarela ralada', 'Queijo coalho', 'Arroz parboilizado', 'Feijão Fradinho'],
            history: 'O Baião de Dois nasceu da economia doméstica e da criatividade do sertão nordestino, onde o desperdício nunca foi uma opção. Seu nome é uma homenagem direta ao ritmo musical "baião", imortalizado por Luiz Gonzaga, o Rei do Baião, que ajudou a transformar essa mistura humilde de arroz e feijão em um símbolo de orgulho e resistência cultural em todo o Brasil.\n\nO "dois" do nome refere-se à união inseparável do arroz com o feijão (tradicionalmente o feijão-de-corda ou verde), enriquecidos com o queijo coalho que derrete suavemente e a inconfundível manteiga de garrafa. É uma explosão de texturas e sabores que conta a história de um povo que sabe transformar pouco em um banquete inesquecível.'
        },
        'braga': {
            title: 'Arroz de Braga',
            price: 'R$ 49,90 / pessoa',
            images: ['Imagem6.jpg'],
            ingredients: ['Sobrecoxa desossada', 'Calabresa e Bacon', 'Cebola, alho e cheiro verde', 'Cenoura', 'Aipo', 'Ervilhas', 'Pimentão amarelo e vermelho', 'Cebola roxa', 'Vagem', 'Palmito', 'Brócolis', 'Repolho roxo', 'Alho confitado', 'Tomate cereja confitado', 'Muçarela ralada', 'Arroz parboilizado'],
            history: 'Prepare-se para uma surpresa: apesar do nome homenagear a cidade portuguesa, o Arroz de Braga nasceu genuinamente em Santos, litoral de São Paulo. A receita foi criada no início do século XX por um cozinheiro conhecido como "Seu Braga", que para atender clientes famintos tarde da noite, improvisou um arroz com o que tinha: paio, linguiça, bacon e repolho.\n\nO prato fez tanto sucesso que o nome do criador acabou batizando a iguaria. É um prato que equilibra a suculência das carnes com o frescor do repolho e legumes, criando uma complexidade de sabores que surpreende até os paladares mais exigentes. No "Lê Landim", elevamos essa tradição com alho confitado e técnicas profissionais de cocção.'
        },
        'carreteiro': {
            title: 'Arroz Carreteiro',
            price: 'R$ 49,90 / pessoa',
            images: ['Imagem8.jpg'],
            ingredients: ['Carne bovina em tiras', 'Calabresa e Bacon', 'Muçarela', 'Batata palha', 'Cebola, alho e cheiro verde', 'Cebola roxa', 'Vagem', 'Tomate cereja', 'Páprica defumada', 'Arroz parboilizado'],
            history: 'O Arroz Carreteiro era o combustível essencial dos "carreteiros" que cruzavam os pampas gaúchos em carros de boi. Como as viagens eram longas e não havia refrigeração, eles utilizavam o charque (carne salgada e seca ao sol), que era cozido em uma única panela de ferro sobre o fogo de chão, unindo praticidade e alta densidade nutritiva para aguentar a lida.\n\nEssa tradição atravessou fronteiras e se tornou um patrimônio brasileiro. Nossa versão mantém a alma do pampa, mas ganha um toque contemporâneo com a crocância da batata palha e o aroma da páprica defumada, resultando em um prato que é puro conforto e história em cada garfada.'
        },
        'biro-biro': {
            title: 'Arroz Biro Biro',
            price: 'R$ 25,00 / pessoa',
            images: ['Imagem7.jpg'],
            ingredients: ['Ovos', 'Calabresa e Bacon', 'Batata palha', 'Couve manteiga', 'Cebola, alho e cheiro verde', 'Cebola roxa', 'Vagem', 'Tomate cereja', 'Páprica defumada', 'Arroz parboilizado'],
            history: 'Este é um clássico moderno da boemia paulistana, nascido na famosa churrascaria Rodeio na década de 80. A história conta que o prato surgiu após uma reclamação de um jornalista que achava o arroz branco comum muito "sem graça". O maître Cecílio, corintiano roxo, improvisou uma mistura de ovos e batata palha para satisfazer o cliente.\n\nO nome é uma homenagem ao jogador de futebol Biro-Biro, cujos cabelos cacheados lembravam a textura da batata palha frita e misturada ao arroz. É um acompanhamento que rouba a cena, unindo a cremosidade dos ovos à crocância da batata, tornando-se indispensável em qualquer churrasco de respeito.'
        },
        'churrasco-prime': {
            title: 'Churrasco Prime',
            price: 'R$ 120,00 / pessoa',
            images: ['IMG-20260715-WA0016~2.jpg'],
            ingredients: ['Picanha', 'Fraldinha', 'Maminha', 'Bife Ancho', 'Bife de Chorizo', 'Espeto de lombo', 'Linguiça Toscana', 'Sobrecoxa desossada', 'Coração de frango', 'Queijo coalho', 'Pão de alho', 'Arroz Biro Biro', 'Farofa', 'Vinagrete', 'Maionese'],
            history: 'O churrasco gaúcho tem raízes profundas que remontam ao século XVII, unindo técnicas indígenas de assar carne em buracos no chão com a lida dos tropeiros das Missões jesuíticas. Originalmente, era uma refeição de sobrevivência nos campos, exigindo apenas fogo, uma faca afiada, estacas de madeira e sal grosso para extrair o melhor sabor do gado criado livre.\n\nNossa versão Prime é uma celebração dessa técnica ancestral aplicada aos cortes mais nobres da pecuária moderna. O segredo está no controle preciso do fogo e no respeito ao tempo de maturação da carne, garantindo que cada corte chegue à mesa com a suculência e o sabor defumado que só a verdadeira tradição do fogo de chão pode proporcionar.'
        },
        'churrasco-completo': {
            title: 'Churrasco Completo',
            price: 'R$ 79,90 / pessoa',
            images: ['IMG-20260715-WA0016~2.jpg'],
            ingredients: ['Contrafilé Bovino', 'Fraldinha', 'Espeto de lombo', 'Linguiça Toscana', 'Coxinha de frango', 'Queijo coalho', 'Pão de alho', 'Arroz branco', 'Farofa', 'Vinagrete', 'Maionese'],
            history: 'O Churrasco Completo é a essência do domingo brasileiro. Ele representa a evolução da cultura do pampa para o ambiente familiar, onde a variedade de cortes e acompanhamentos transforma a refeição em um evento social que dura horas. É a celebração da amizade e da boa mesa, onde cada ingrediente tem seu papel fundamental.\n\nAlém da seleção rigorosa das carnes, nosso diferencial está nos detalhes: desde o pão de alho perfeitamente dourado até o nosso chimichurri artesanal preparado pelo chef, que utiliza ervas frescas para realçar o sabor natural da gordura braseada. É um banquete que honra a tradição e abraça o paladar contemporâneo.'
        },
        'feijoada': {
            title: 'Feijoada Completa ou Light',
            price: 'R$ 49,90 / pessoa',
            images: ['Imagem11.jpg'],
            ingredients: ['Carne seca', 'Bacon', 'Lombo suíno', 'Costelinha suína', 'Linguiça calabresa', 'Paio', 'Arroz branco', 'Feijão preto', 'Farofa', 'Couve manteiga', 'Laranjas', 'Vinagrete', 'Rabo e pé suíno (opcional)'],
            history: 'Diferente da lenda popular, a feijoada não nasceu nas senzalas com restos de carnes, mas sim como uma evolução sofisticada dos grandes cozidos europeus adaptada ao feijão preto brasileiro. Especialistas indicam que ela se consolidou no século XIX como um prato de elite nos centros urbanos, exigindo uma técnica de preparo complexa e lenta que dura até 24 horas.\n\nA nossa feijoada é um ritual de paciência e sabor. Cada carne é tratada individualmente para garantir o ponto perfeito, enquanto o caldinho de feijão ganha corpo e personalidade. Acompanhada de couve bem fininha, laranjas frescas e uma farofa crocante, ela deixa de ser apenas uma refeição para se tornar a tradução definitiva da alma gastronômica do Brasil.'
        }
    };

    const detailSection = document.getElementById('detalhe-prato');
    const backBtn = document.getElementById('back-to-menu');
    const cards = document.querySelectorAll('.menu-card[data-dish]');
    const navItems = document.querySelectorAll('.dish-nav-item');

    function openDetail(dishKey) {
        const data = dishData[dishKey];
        if (!data) return;

        document.getElementById('detail-title').textContent = data.title;
        document.getElementById('detail-price').textContent = data.price;
        document.getElementById('detail-main-img').src = data.images[0];
        document.getElementById('detail-history').textContent = data.history;

        const ingredientsList = document.getElementById('detail-ingredients');
        ingredientsList.innerHTML = '';
        data.ingredients.forEach(ing => {
            const li = document.createElement('li');
            li.textContent = ing;
            ingredientsList.appendChild(li);
        });

        switchTab('detalhe-prato');
        tabs.forEach(t => t.classList.remove('active'));
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const dishKey = card.getAttribute('data-dish');
            openDetail(dishKey);
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const dishKey = item.getAttribute('data-dish');
            const scrollId = item.getAttribute('data-scroll');
            
            if (dishKey) {
                openDetail(dishKey);
            } else if (scrollId) {
                const element = document.getElementById(scrollId);
                if (element) {
                    // Garantir que estamos na aba do cardápio
                    switchTab('cardapio');
                    
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight - 20;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            switchTab('cardapio');
        });
    }

    // Footer navigation click event listeners
    const footerTabs = document.querySelectorAll('[data-footer-tab]');
    footerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-footer-tab');
            if (target) switchTab(target);
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
});
