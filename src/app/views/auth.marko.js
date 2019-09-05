// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/proj01-educorp$1.0.0/src/app/views/auth.marko",
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

  out.w("<!DOCTYPE html><html lang=\"pt\"><head><meta charset=\"UTF-8\"><title>Listagem de Produtos</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/public/css/style.css\"><script src=\"https://kit.fontawesome.com/2962562ef7.js\"></script><script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"auth-content\"><div class=\"auth-modal\"><form><small id=\"error-message\">Usuário e/ou senha incorreto(s)</small><div class=\"form-group\"><div class=\"input-group\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-at\"></i></span></div><input id=\"inputEmail\" type=\"email\" class=\"form-control\" name=\"email\" placeholder=\"Entre seu email...\"></div><div class=\"input-group mt-3\"><div class=\"input-group-prepend\"><span class=\"input-group-text\"><i class=\"fas fa-asterisk\"></i></span></div><input id=\"inputPassword\" type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Entre sua senha...\"></div></div><button id=\"submit\" type=\"button\" class=\"btn btn-primary\">Entrar</button><button id=\"register\" type=\"button\" class=\"btn btn-secondary ml-2\">Cadastrar Acesso</button></form></div></div><script src=\"/public/js/script.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/proj01-educorp$1.0.0/src/app/views/auth.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
