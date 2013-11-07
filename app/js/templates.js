this["JST"] = this["JST"] || {};

this["JST"]["app/templates/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li>\n        <a href=\"";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ".html\" class=\"nav-item\" data-page=\"";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n          <span>";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </a>\n      </li>\n    ";
  return buffer;
  }

  buffer += "<a href=\"index.html\" class=\"site-logo-container left\">\n  <img class=\"site-logo\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n  <img class=\"site-logo-flip\" src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n</a>\n<nav class=\"site-nav right\">\n  <button class=\"nav-btn\">Menu</button>\n\n  <ul class=\"clear-fix\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.pages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</nav>\n<div class=\"site-menu\"></div>";
  return buffer;
  });

this["JST"]["app/templates/homepage.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li class=\"left\">\n        <div class=\"text\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n        <span class=\"client\">";
  if (stack1 = helpers.client) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.client; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        <span class=\"company\">";
  if (stack1 = helpers.company) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.company; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      </li>\n    ";
  return buffer;
  }

  buffer += "<header class=\"homepage-head\">\n  <h1 class=\"call-out\">";
  if (stack1 = helpers.headline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <h2 class=\"mega\">";
  if (stack1 = helpers['sub-head']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['sub-head']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n</header>\n<a href=\"\" class=\"cta-container\">\n  <span class=\"block-1\">";
  if (stack1 = helpers['cta-1']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['cta-1']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  <span class=\"block-2\" data-text=\"";
  if (stack1 = helpers['cta-3']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['cta-3']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers['cta-2']) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0['cta-2']; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  <span class=\"cta-help\"></span>\n</a>\n<div class=\"testamonials-container\">\n  <ul class=\"clear-fix\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.testimonials, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>";
  return buffer;
  });

this["JST"]["app/templates/people.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>\n      <span class=\"name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      <span class=\"title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n      <a href=\"";
  if (stack1 = helpers.twitter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.twitter; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"twitter\">T</a>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<ul>\n  ";
  stack1 = helpers.each.call(depth0, depth0.people, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>";
  return buffer;
  });

this["JST"]["app/templates/style-guide.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"left\">\n    <div class=\"color-box\" style=\"background: ";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ";\"></div>\n    <span class=\"color-name\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n    <span class=\"color-value\">";
  if (stack1 = helpers.value) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.value; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div> \n  ";
  return buffer;
  }

  buffer += "<div class=\"style-guide\">\n<h2>logo</h2>\n  <div class=\"image-container\">\n    <img src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n    <span>";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n  </div>\n\n<h2>colours</h2>\n<div class=\"clear-fix\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.colors, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<h2>typefaces</h2>\n  <div>\n    <span class=\"type-name\">Museo Sans (300): body copy</span>\n    <div>\n      <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>\n      <span>abcdefghijklmnopqrstuvwxyz</span>\n      <span>,.?!'\";:{}[]()-=_+0123456789@£$%&*</span>\n    </div>\n\n    <span class=\"type-name\">Museo Sans (700): standard headers</span>\n    <div style=\"font-weight: 700;\">\n      <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>\n      <span>abcdefghijklmnopqrstuvwxyz</span>\n      <span>,.?!'\";:{}[]()-=_+0123456789@£$%&*</span>\n    </div>\n\n    <span class=\"type-name\">Brandon Grotesque (900, italic, all caps): large call outs</span>\n    <div class=\"call-out\" style=\"line-height: 1.5;\">\n      <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>\n      <span>,.?!'\";:{}[]()-=_+0123456789@£$%&*</span>\n    </div>\n  </div>\n\n<h2>call outs</h2>\n  <span class=\"tera call-out\">massive‚ boombastic‚ radical‚ & extra special!</span>\n  <span class=\"tera call-out on-bg\">nice‚ tastey‚ gnarley‚ wicked‚ & a little naughty!</span>\n\n<h2>headers</h2>\n  <div class=\"headers\">\n    <h1>Header One</h1>\n    <h2>Header Two</h2>\n    <h3>Header Three</h3>\n    <h4>Header Four</h4>\n    <h5>Header Five</h5>\n    <h6>Header Six</h6>\n  </div>\n\n<h2>paragraphs</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>\n\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n\n  <p class=\"on-bg\" style=\"font-weight: 700;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>\n\n\n<h2>links</h2>\n  <p>Lorem ipsum dolor sit amet, <a href=\"\">consectetuer adipiscing elit</a>. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <a href=\"\">parturient montes</a>, nascetur ridiculus mus.</p>\n  <a href=\"\" class=\"hover\">link:hover</a>\n  <a href=\"\" class=\"active\">link:active</a>\n  <a href=\"\" class=\"visited\">link:visited</a>\n\n<h2>buttons</h2>\n  <button>button</button>\n  <button class=\"hover\">button:hover</button>\n  <button class=\"active\">button:active</button>\n  <button class=\"disabled\">button:disabled</button>\n\n<h2>block quotes</h2>\n  <blockquote class=\"beta\">\n    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n  </blockquote>\n\n<h2>code snipets</h2>\n<pre><code>function buildTemplate ( template, data, element ) {\n  $.getJSON( data, function( json ) {\n    $( element ).append( JST[ template ] ( json ) );\n  });\n}\n</code></pre> \n\n<h2>unordered lists</h2>\n  <ul class=\"text-list\">\n    <li>List item one</li>\n    <li>List item two</li>\n      <ul class=\"text-list\">\n        <li>List item two A</li>\n        <li>List item two B</li>\n      </ul>\n    <li>List item three</li>\n  </ul>\n\n<h2>ordered lists</h2>\n  <ol>\n    <li>List item one</li>\n    <li>List item two\n      <ol>\n        <li>List item two A</li>\n        <li>List item two B</li>\n      </ol>\n    </li>\n    <li>List item three</li>\n  </ol>\n\n";
  return buffer;
  });

this["JST"]["app/templates/work.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  return buffer;
  });