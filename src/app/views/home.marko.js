// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/proj01-educorp$1.0.0/src/app/views/home.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html lang=\"pt\"><head><meta charset=\"UTF-8\"><title>Listagem de Produtos</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/public/css/style.css\"><script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"home-content\"><div class=\"home-modal\"><div><h1>Listagem de Produtos</h1></div><div class=\"form-group\"><label for=\"category-select\">Selecione a Categoria:</label><select class=\"form-control\" id=\"category-select\"><option selected disabled>Categoria...</option></select></div><div class=\"form-group\" id=\"product\"><label for=\"product-select\">Selecione o Produto:</label><select class=\"form-control\" id=\"product-select\"><option selected disabled>Produto...</option></select><button id=\"load-product-btn\" type=\"button\" class=\"btn btn-primary mt-2\" disabled>Carregar Produto</button></div><div id=\"product-table\"><table class=\"table table-striped\"><thead><tr><th colspan=\"2\" style=\"text-align: center;\">DESCRIÇÃO CATEGORIA PRODUTO</th></tr><tr><th>Descrição Produto</th><th>Valor Produto</th></tr></thead><tbody></tbody></table></div></div></div><script src=\"/public/js/script.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "31");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/proj01-educorp$1.0.0/src/app/views/home.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
