export default function WebDevelopmentShowcase() {
  return (
    <div className="w-screen px-10 md:px-20 py-20 flex flex-col gap-y-5">
      <h2 className="text-2xl sm:text-4xl font-semibold w-full text-center">
        Servicios de Desarrollo Web
      </h2>
      <p className="sm:px-10 font-light text-gray-500 text-sm sm:text-xl text-center">
        Construimos sitios web profesionales y excelente calidad, utilizamos las
        herramientas de programación más modernas en el mercado. Nuestra
        prioridad es que tu elección cumpla con tus necesidades como negocio o
        proveedor independiente.
      </p>
      <div className="w-full flex flex-col gap-y-20 pt-20">
        {/* landing page */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify">
            <h2 className="text-2xl font-semibold text-violet-900">
              Landing Page
            </h2>
            <p className="text-sm md:text-xl font-light text-gray-500">
              Página de aterrizaje que consiste donde todas las secciones se
              encuentran dentro de una página. Servicio simple pero efectivo
              para destacar tu negocio o servicio independiente. Perfecto para
              proveedores independientes o negocios pequeños con el fin de
              compartir su identidad. La metodología que seguimos es la
              siguiente:
            </p>
            <ol className="list-decimal text-sm md:text-xl font-light text-gray-500 pl-5">
              <li>
                Especificamos las diferentes secciones que tendrá tu sitio web.
                Las predeterminadas son: Inicio, Nosotros, Servicios y Contacto.
              </li>
              <li>
                Redactamos contigo la información y el texto dentro del sitio
                web.
              </li>
              <li>Establecemos el aviso de privacidad del sitio web.</li>
              <li>Programamos el sitio web.</li>
              <li>
                Construimos un formulario de contacto cuyos mensajes terminarán
                directo a la bandeja de entrada de tu correo electrónico.
              </li>
              <li>
                Aplicamos los cambios necesarios dentro del periodo de
                establecido de servicio.
              </li>
              <li>¡Lanzamos tu página web a la red!</li>
            </ol>
            <span className="text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2">
              Desde $10,000 MXN
            </span>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2020/11/09/06/33/website-5725734_960_720.png"
            alt=""
            className="pt-10 lg:pt-0 w-full lg:w-[40%] object-cover h-full"
          />
        </div>
        {/* lite */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify">
            <h2 className="text-2xl font-semibold text-violet-900">Lite</h2>
            <p className="text-sm md:text-xl font-light text-gray-500">
              Destaca en el mercado, comparte sobre ti o tu empresa, define tus
              servicios y ten tu propio blog. Perfecto para proveedores
              independientes o empresas que oferen servicios B2B o B2C. La
              metodología que seguimos es la siguiente:
            </p>
            <ol className="list-decimal text-sm md:text-xl font-light text-gray-500 pl-5">
              <li>
                Especificamos las diferentes secciones que tendrá tu sitio web.
                Las predeterminadas son: Inicio, Nosotros, Servicios, Blog y
                Contacto.
              </li>
              <li>
                Redactamos contigo la información y el texto dentro del sitio
                web.
              </li>
              <li>Establecemos el aviso de privacidad del sitio web.</li>
              <li>Programamos tu sitio web.</li>
              <li>
                Construimos formularios de contacto cuyos mensajes terminarán
                directo a la bandeja de entrada de tu correo electrónico.
              </li>
              <li>
                Construimos el blog de tu sitio web con el fin de que puedas
                compartir tus ideas de manera automatizada e independiente.
              </li>
              <li>
                Aplicamos los cambios necesarios dentro del periodo establecido
                del servicio.
              </li>
              <li>¡Lanzamos tu página web a la red!</li>
            </ol>
            <span className="text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2">
              Desde $15,000 MXN
            </span>
          </div>
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
            alt=""
            className="w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full"
          />
        </div>
        {/* full web */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify">
            <h2 className="text-2xl font-semibold text-violet-900">Full Web</h2>
            <p className="text-sm md:text-xl font-light text-gray-500">
              Destaca en el mercado, comparte sobre ti o tu empresa, define tus
              servicios y ten tu propio blog. Perfecto para proveedores
              independientes o empresas que oferen servicios B2B o B2C. La
              metodología que seguimos es la siguiente:
            </p>
            <ol className="list-decimal text-sm md:text-xl font-light text-gray-500 pl-5">
              <li>
                Especificamos las diferentes secciones que tendrá tu sitio web.
                Las predeterminadas son: Inicio, Nosotros, Servicios, Blog y
                Contacto.
              </li>
              <li>
                Redactamos contigo la información y el texto dentro del sitio
                web.
              </li>
              <li>Establecemos el aviso de privacidad del sitio web.</li>
              <li>Programamos tu sitio web.</li>
              <li>
                Construimos formularios de contacto cuyos mensajes terminarán
                directo a la bandeja de entrada de tu correo electrónico.
              </li>
              <li>
                Construimos el blog de tu sitio web con el fin de que puedas
                compartir tus ideas de manera automatizada e independiente.
              </li>
              <li>
                Aplicamos los cambios necesarios dentro del periodo establecido
                del servicio.
              </li>
              <li>¡Lanzamos tu página web a la red!</li>
            </ol>
            <span className="text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2">
              Desde $15,000 MXN
            </span>
          </div>
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1562&q=80"
            alt=""
            className="w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full"
          />
        </div>
        {/* ecommerce website */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify">
            <h2 className="text-2xl font-semibold text-violet-900">
              e-commerce
            </h2>
            <p className="text-sm md:text-xl font-light text-gray-500">
              Perfecto para negocios vendedores de productos. Conviértete en
              vendedor por internet. Te ayudamos a crear tu sitio web
              profesional de e-commerce y a manejar tus ventas. La metodología
              que seguimos es la siguiente:
            </p>
            <ol className="list-decimal text-sm md:text-xl font-light text-gray-500 pl-5">
              <li>
                Especificamos los productos que venderás en el sitio web dentro
                de una base de datos automatizada que podrás manejar
                independientemente.
              </li>
              <li>
                Redactamos contigo la información y el texto dentro del sitio
                web, así como los datos de cada uno de los productos.
              </li>
              <li>Establecemos el aviso de privacidad del sitio web.</li>
              <li>
                Programamos tu sitio web. Incluimos SEO, búsqueda, pasarela de
                pagos con tarjetas de crédito/débito, Paypal, y más.
              </li>
              <li>
                Construimos formularios de contacto cuyos mensajes terminarán
                directo a la bandeja de entrada de tu correo electrónico.
              </li>
              <li>
                Contruimos una base de datos automatizada donde podrás manejar
                tus ventas e inventario (de ser necesario).
              </li>
              <li>
                Aplicamos los cambios necesarios dentro del periodo establecido
                del servicio.
              </li>
              <li>¡Lanzamos tu página web a la red!</li>
            </ol>
            <span className="text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2">
              Desde $40,000
            </span>
          </div>
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
            alt=""
            className="w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full"
          />
        </div>
        {/* web app */}
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-y-5 lg:w-[60%] lg:pr-20 text-justify">
            <h2 className="text-2xl font-semibold text-violet-900">Web App</h2>
            <p className="text-sm md:text-xl font-light text-gray-500">
              Ofrecemos desarrollo web personalizado, es decir, aplicaciones web
              con alguna funcionalidad que se requiera. Nuestras herramientas
              son modernas y eficientes, estas permiten un desarrollo ágil y de
              calidad para cualquier aplicación web que requieras. Para obtener
              una cotización contáctanos. La metodología que seguimos es la
              siguiente:
            </p>
            <ol className="list-decimal text-sm md:text-xl font-light text-gray-500 pl-5">
              <li>Especificamos las funcionalidades que se requiren.</li>
              <li>
                Listamos las tareas por hacer con base en las funcionalidades.
              </li>
              <li>
                Realizamos una cotización con base en las tareas a realizar.
              </li>
              <li>Programamos la aplicación web. Incluimos SEO.</li>
              <li>
                Aplicamos los cambios necesarios dentro del periodo establecido
                del servicio.
              </li>
              <li>¡Lanzamos tu aplicación web a la red!</li>
            </ol>
            <span className="text-sm font-semibold text-white bg-violet-900 w-[200px] text-center rounded-lg py-2">
              Contacta para cotizar
            </span>
          </div>
          {/* image */}
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
            className="w-full lg:w-[40%] pt-10 lg:pt-0 object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
}
