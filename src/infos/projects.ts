type ProjetctsProps = {
    name: string,
    image:string,
    link:string,
    plataform: string,
    tecnologies: string[],
    description:string
}
export const Projects: ProjetctsProps[] = [
    {
        image: '/Images/Advocacia.png',
        link: 'https://github.com/Rafaelpavanelli/Advocacia',
        name: "Site Advocacia",
        plataform: "web",
        tecnologies: ["next","sass"],
        description: "Site de Advocacia para uma entrevista para empresa de sites. O site é criado com base em um protótipo criado em Adobe"
    },
    {
        image: '/Images/hamburgueria.png',
        link: 'https://github.com/Rafaelpavanelli/Design-Site-Hamburgueria',
        name: "Site de Hamburgueria",
        plataform: "web",
        tecnologies: ["html","css","javascript"],
        description: "Site de hamburgueria criado para aula de web 2 no primeiro ano de faculdade. O site tem a intenção de mostrar as habilidades adquiridas em HTML,CSS e Javascript"
    },
    {
        image: '/Images/LoginJquery.png',
        link: 'https://github.com/Rafaelpavanelli/Tela-de-Login',
        name: "Tela de Login com Jquery",
        plataform: 'web',
        tecnologies: ["jquery","html","css"],
        description: "Página de login criada para testar as habilidades com a lib de javascript JQUERY"
    },
    {
        image: '/Images/loginRoxo.png',
        link: 'https://github.com/Rafaelpavanelli/LoginFuncional',
        name: "Tela de Login",
        plataform: 'web',
        tecnologies: ["html","css"],
        description: "Pagina de Login criada para testar as habilidades com CSS"
    },
    {
        image: '/Images/nubank.png',
        link: 'https://github.com/Rafaelpavanelli/appdefinancas',
        name: "Clone do Layout Nubank",
        plataform: 'mobile',
        tecnologies: ["expo","tailwind"],
        description: "Tela inicial do NUBANK criado para testas o uso do framework Tailwind qual não havia até o momento nativo"
    },
    {
        image: '/Images/portifolio.png',
        link: 'https://github.com/Rafaelpavanelli/portifolio-novo',
        name: "Primeiro Portifólio",
        plataform: 'web',
        tecnologies: ["next","tailwind"],
        description: "Primeiro portifólio criado para exibir minhas habilidades para o mercado de trabalho"
    },
    {
        image: '/Images/scroll.png',
        link: 'https://github.com/Rafaelpavanelli/manipulandoscrollviewrocketseat',
        name: "Tela de Scroll com porcentagem",
        plataform: 'mobile',
        tecnologies: ["expo","tailwind"],
        description: "Aplicação em React Native que possui um mostrador de porcentagem de leitura, qual apliquei no meu portifólio atual"
    },
    {
        image: '/Images/sharemyhorse.png',
        link: 'https://app.horsypro.com/',
        name: "Site de mostruario de cavalos",
        plataform: 'web',
        tecnologies: ["next","sass","firebase"],
        description: "Primeiro sistema qual trabalhei na empresa M2 Software, qual se trata de um SASS de gerenciamento de haras."
    },
    {
        image: '/Images/team.png',
        link: '',
        name: "App de times",
        plataform: 'mobile',
        tecnologies: ["expo","tailwind"],
        description: "Aplicativo em React Native para a gestão de grupos de times para futebol de salão"
    },
    {
        image: '/Images/gym.png',
        link: '',
        name: "App de academia",
        plataform: 'mobile',
        tecnologies: ["expo","tailwind"],
        description: "Aplicativo para gerenciamento de academia, onde é registrado os exercicios e suas metas"
    },
]