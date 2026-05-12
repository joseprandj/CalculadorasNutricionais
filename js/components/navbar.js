function createNavbar(title) {

  return `

    <header class="bg-orange-500 shadow-lg">

      <div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="../index.html"
          class="text-2xl font-bold text-white"
        >
          ${title}
        </a>

        <nav class="hidden md:flex gap-6 text-white font-medium">

          <a
            href="../index.html"
            class="hover:text-orange-200 transition"
          >
            Home
          </a>

          <a
            href="./imc.html"
            class="hover:text-orange-200 transition"
          >
            IMC
          </a>

          <a
            href="./tmb.html"
            class="hover:text-orange-200 transition"
          >
            TMB
          </a>

          <a
            href="./fat.html"
            class="hover:text-orange-200 transition"
          >
            FAT
          </a>

          <a
            href="./get.html"
            class="hover:text-orange-200 transition"
          >
            GET
          </a>

          <a
            href="./h2o.html"
            class="hover:text-orange-200 transition"
          >
            H2O
          </a>

        </nav>

      </div>

    </header>

  `;
}