// Compiled using marko@4.18.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/proj01-educorp$1.0.0/src/app/views/register.marko",
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

  out.w("<!DOCTYPE html><html lang=\"pt\"><head><meta charset=\"UTF-8\"><title>Listagem de Produtos</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/public/css/style.css\"><script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"register-content\"><div class=\"register-modal\"><form id=\"register-form\"><div class=\"form-group\"><label for=\"nameInput\">Nome:</label><input type=\"text\" class=\"form-control\" id=\"nameInput\" name=\"nomeUsr\" placeholder=\"Seu nome...\"></div><div class=\"form-group\"><label for=\"emailInput\">Email:</label><input type=\"email\" class=\"form-control\" id=\"emailInput\" name=\"emailUsr\" placeholder=\"Seu email...\"></div><div class=\"form-group\"><label for=\"loginInput\">Login:</label><input type=\"text\" class=\"form-control\" id=\"loginInput\" name=\"loginUsr\" placeholder=\"Seu login...\"></div><div class=\"form-group\"><label for=\"passInput\">Senha:</label><input type=\"password\" class=\"form-control\" id=\"passInput\" name=\"senhaUsr\" placeholder=\"Sua senha...\"></div><div class=\"form-group\"><label for=\"checkPassInput\">Confirmação de Senha:</label><input type=\"password\" class=\"form-control\" id=\"checkPassInput\" name=\"confirmPassword\" placeholder=\"Confirme sua senha...\"></div><button id=\"register-btn\" type=\"button\" class=\"btn btn-primary\">Registrar</button><button type=\"reset\" class=\"btn btn-secondary ml-2\">Resetar</button></form><a href=\"/auth\" class=\"mt-3\" style=\"align-self: start;\">Voltar</a></div></div><script src=\"/public/js/script.js\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/proj01-educorp$1.0.0/src/app/views/register.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
