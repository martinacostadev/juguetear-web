<h1 align="center" width="100%">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/78808163/209231596-ec2fb100-2564-4694-94aa-1ce2e1a1199a.svg">
    <img width="33%" alt="Juguetear" src="https://user-images.githubusercontent.com/78808163/198991646-4ec0f08d-b9f5-4e42-89d1-ceb786c1f215.svg"> 
  </picture>
</h1>

### Juguetear es un proyecto solidario, sin fines de lucro, que tiene como objetivo adaptar juguetes para niñes con discapacidades motrices complejas y ofrecerlos en calidad de préstamo, sin costo para las familias..

En el Taller de ayudas técnicas de APRILP se adaptan juguetes a pilas que se consiguen a través de donaciones, para luego prestarlos a las familias de niñes con discapacidades motrices complejas para que puedan jugar con pulsadores o switches de distintos tipos.

La web de **Juguetear** surge como respuesta a la necesitad de modernizar y mejorar el sistema de préstamos de los jueguetes, hacer visible la obra de quienes trabajan en el taller e incentivar la replicación del proyecto.

### Indice de contenidos

[Stack](#stack)  
[Requerimientos](#requerimientos)  
[Instalación del proyecto](#instalación-del-proyecto)  
[Sanity](#sanity)  
[Storybook](#storybook)  
[Accesibilidad](#accesibilidad)  
[Licencias](#licencias)  
[Alcances](#alcances)  
[UI/UX](#uiux)  
[Código de Conducta](./CODE_OF_CONDUCT.md)  
[Comunidad](#comunidad)  
[Cómo contribuir](#cómo-contribuir)  
[Contribuidores](#contribuidores)  
[Staff](#staff)  
[Links de interés](#links-de-interés)

---

## Stack

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Tailwind](https://tailwindcss.com/)
- [Sanity](https://www.sanity.io/)

## Requerimientos

- Tener instalada la última versión de [node](https://nodejs.org/es/) (incluye `npm`)
- Tener un editor de código ([Visual Code](https://code.visualstudio.com/), [Vim](https://www.vim.org/), etc)
- Tener una cuenta en [GitHub](https://docs.github.com/es/get-started/signing-up-for-github/signing-up-for-a-new-github-account)
- Leer y seguir [Código de Conducta](./CODE_OF_CONDUCT.md)
- Unirte a [FrontendCafé](https://discord.com/invite/frontendcafe) en Discord

## Instalación del proyecto

1. Lo primero es clonar el repositorio en tu disco local. Podés mirar la siguiente [documentación](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository).
2. Usando la consola de comandos, accedé a la carpeta del proyecto y ejecutá `yarn install` (esto va a instalar todas las dependencias listadas en el archivo `package.json`). Si te aparece un error que dice `yarn: command not found` quiere decir que no tenés instalado `yarn` en tu computadora. Para hacerlo, primero tenés que instalar la última versión de [node](https://nodejs.org/es/) y luego instalar `yarn` via `npm` (_node package manager_) ejecutando `npm install --global yarn`. Podés leer más en este [artículo](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
3. Ejecutá `yarn run dev` en la consola de comandos para iniciar el servidor de desarrollo
4. Visitá [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación

> ⚠️ Si tenés algun error, podés preguntar en el canal [#juguetear](https://discord.com/channels/594363964499165194/1035685740409012244) dentro del servidor de FrontendCafé en Discord

---

## Sanity

Todo el contenido se va a administrar usando Sanity como [Headless CMS](https://www.sanity.io/headless-cms).

Ahora, para obtener la información de Sanity, vas a tener que hacer _fetch_ utilizando el método `client()` inicializado en `lib/client.ts`. Por ejemplo, para traer todos los miembros del proyecto, podés a hacer: `` const member = await client.fetch(`*[_type == "member"]`); ``

En el ejemplo de arriba `*[_type == "member"]` es el _query_ con el cual filtramos que información queremos traer. Este _query_ esta escrito en [GROQ](https://www.sanity.io/docs/groq). Sanity nos facilita una [cheat sheet](https://www.sanity.io/docs/query-cheat-sheet) con algunos de los _queries_ más comunes.

Si querés saber más sobre el cliente JavaScript de Sanity, podés leer más en la [documentación](https://www.sanity.io/docs/js-client) de Sanity. Para hacer las cosas más sencillas, utilizamos el [toolkit](https://github.com/sanity-io/next-sanity) de Sanity para NextJS en este proyecto.

Dentro de la carpeta `studio/schemas` podes encontrar los _schemas_ disponibles. Los _schemas_ describen los tipos de documentos y sus campos (\_fields). En los archivos JSON en los que Sanity Studio escribe los datos el tipo de documento aparecen como la propiedad `_type`.

Es muy común usar esta propiedad como _query_ para obtener su contenido (por ejemplo `*[_type == "animal"]`). Si querés saber más sobre los _schemas_, podés leer la [documentación](https://www.sanity.io/docs/schema-types) de Sanity al respecto.

---

## Storybook

[Storybook](https://storybook.js.org/) es una librería de código abierto que permite desarrollar y documentar tus componentes en un entorno aislado. Vamos a usarla para crear y testear todos los componentes del proyecto Juguetear.
Para poder ver los componentes listos para usar, podes entrar a esta [URL](https://storybook-juguetear-web.vercel.app) (_provisoria_).

---

## Accesibilidad

Quienes administramos este repositorio nos comprometemos a hacer todo lo posible por garantizar la accesibilidad digital para personas con discapacidades. Estamos continuamente mejorando la experiencia del usuario y aplicando los estándares de accesibilidad pertinentes.

Las Pautas de Accesibilidad para el Contenido Web (WCAG) definen los requisitos para que les diseñadores y desarrolladores mejoren la accesibilidad para las personas con discapacidades. Éste define tres niveles de conformidad: Nivel A, Nivel AA y Nivel AAA.

### Parte importante de los requerimientos a la hora de contribuir con este proyecto es cumplir al menos con los requisitos WCAG 2.1 nivel AA.

Por favor, hacenos saber si encontrás barreras de accesibilidad en la web de Juguetear enviando un mail a [juguetear2021@gmail.com](mailto:juguetear2021@gmail.com) o abriendo un issue. Para hacerlo, necesitás leer la documentación sobre [cómo contribuir](./CONTRIBUTING.md).

---

## Licencias

Este repositorio se publica con licencia [GNU General Public License v3.0](./LICENSE).

El contenido de la web de Juguetear se publica con licencia [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International](./LICENSE-CC-BY-NC-SA).

---

## Alcances

El alcance de este proyecto será desarrollar el Front End de la web de juguetear en base a los diseños de Mariana Lessi y el Back End donde las personas que coordinan el taller podrán administrar el contenido usando el [stack](#stack) definido.

---

## UI/UX

La [interfaz](https://www.figma.com/file/FS9WsAYrmkESsmUAGzYdNo/Juguetear?node-id=0%3A1) del proyecto fue completamente desarrollada por [Mariana Lessi](https://www.behance.net/marualessi). Cualquier duda, feedback o sugerencia podés compartirla en el canal [#juguetear](https://discord.com/channels/594363964499165194/1035685740409012244) del server de [FrontendCafé](https://discord.com/invite/frontendcafe) en Discord.

---

## Comunidad

[![logo-frontendcafe](https://user-images.githubusercontent.com/78808163/198993731-299e973d-8f3b-4a6c-a445-b2b77e0b3286.svg)](https://discord.com/invite/frontendcafe)

Este proyecto se desarrolla con la participación y el apoyo de FrontendCafé. Es requerido unirte a nuestro [server](https://discord.com/invite/frontendcafe) y buscar el canal [#juguetear](https://discord.com/channels/594363964499165194/1035685740409012244). Ahí vas a poder compartir dudas e ideas del proyecto. El código de conducta de este proyecto es extensible también a tu participación en el server de FrontendCafé en Discord.

---

## Cómo contribuir

Actualmente hay varias formas de contribuir al proyecto Juguetear:

- Con materiales
- Replicando el proyecto en tu ciudad
- Aportando a este repositorio

### Con materiales:

Si querés donar juguetes a pilas y/o diversos materiales contactarse a través del mail [juguetear2021@gmail.com](mailto:juguetear2021@gmail.com)

### Replicando el proyecto en tu ciudad:

La naturaleza libre y solidaria de esta idea no se refiere solo a la posibilidad de que las familias de niñes con discapacidades motrices complejas puedan acceder a los juguetes sin ningún costo sino que, además, queremos que se pueda replicar en todos los lugares donde haya instituciones y personas con voluntad para llevarlo adelante. Para saber como replicar el proyecto, por favor lee nuestra [documentación](./REPLICATE.md).

### Aportando a este repositorio:

Usamos [github Issues](https://github.com/Juguetear/juguetear-web/issues) para trackear _requests_, _bugs_ y _features_. Para aportar a este repositorio, podés trabajar en algún _issue_ que esté abierto, crear uno con un _request_ o _bug_ o dar _code review_ a otres contribuidores.

Si querés contribuir, tené en cuenta que tenemos ciertos lineamientos. Para conocerlos en detalle, leé la documentación sobre [cómo contribuir](CONTRIBUTING.md).

---

## Contribuidores

<a href="https://github.com/juguetear/juguetear-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=juguetear/juguetear-web" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

## Staff

_Coordinador del taller de ayudas técnicas_  
**Sergio Ruau**

_Consultor / Asesor_  
**Antonio Sacco**

_Diseño UX/UI_  
**Mariana Lessi**

_Desarrollo y administración del repositorio_  
**Verónica García (nykka)**

## Links de interés

[Colegio Lincoln](https://colegiolincoln.edu.ar/juguetear/)  
[Antonio Sacco](http://antoniosacco.com.ar/)  
[FronendCafé](https://frontend.cafe/)
