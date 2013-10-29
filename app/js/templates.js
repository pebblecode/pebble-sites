this["JST"] = this["JST"] || {};

this["JST"]["app/templates/header.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li class=\"left\">\n        <a href=\"";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ".html\" class=\"nav-item\">";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          <span data-page=\"";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span>\n        </a>\n      </li>\n    ";
  return buffer;
  }

  buffer += "<a href=\"index.html\" class=\"logo left\">\n  <img src=\"";
  if (stack1 = helpers.logo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.logo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n</a>\n<nav class=\"site-nav right\">\n  <ul class=\"clear-fix\">\n    ";
  stack1 = helpers.each.call(depth0, depth0.pages, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</nav>\n<div class=\"site-menu\"></div>";
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
  buffer += "\n</div>\n\n<h2>typefaces</h2>\n  <div>\n    <span class=\"type-name\">Museo Sans (300): body copy</span>\n    <div>\n      <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>\n      <span>abcdefghijklmnopqrstuvwxyz</span>\n      <span>,.?!'\";:{}[]()-=_+0123456789@£$%&*</span>\n    </div>\n\n    <span class=\"type-name\">Museo Sans (700): standard headers</span>\n    <div style=\"font-weight: 700;\">\n      <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>\n      <span>abcdefghijklmnopqrstuvwxyz</span>\n      <span>,.?!'\";:{}[]()-=_+0123456789@£$%&*</span>\n    </div>\n\n    <span class=\"type-name\">Brandon Grotesque (900, italic, all caps): large call outs</span>\n    <div class=\"call-out\" style=\"line-height: 1.5;\">\n      <span>ABCDEFGHIJKLMNOPQRSTUVWXYZ</span>\n      <span>,.?!'\";:{}[]()-=_+0123456789@£$%&*</span>\n    </div>\n  </div>\n\n<h2>call outs</h2>\n  <span class=\"tera call-out\">massive‚ boombastic‚ radical‚ & extra special!</span>\n  <span class=\"tera call-out on-bg\">nice‚ tastey‚ gnarley‚ wicked‚ & a little naughty!</span>\n\n<h2>headers</h2>\n  <div class=\"headers\">\n    <h1>Header One</h1>\n    <h2>Header Two</h2>\n    <h3>Header Three</h3>\n    <h4>Header Four</h4>\n    <h5>Header Five</h5>\n    <h6>Header Six</h6>\n  </div>\n\n<h2>paragraphs</h2>\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>\n\n  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n\n  <p class=\"on-bg\" style=\"font-weight: 700;\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>\n\n\n<h2>links</h2>\n  <p>Lorem ipsum dolor sit amet, <a href=\"\">consectetuer adipiscing elit</a>. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <a href=\"\">parturient montes</a>, nascetur ridiculus mus.</p>\n  <a href=\"\" class=\"hover\">link:hover</a>\n  <a href=\"\" class=\"active\">link:active</a>\n  <a href=\"\" class=\"visited\">link:visited</a>\n\n<h2>buttons</h2>\n  <button>button</button>\n  <button class=\"hover\">button:hover</button>\n  <button class=\"active\">button:active</button>\n  <button class=\"disabled\">button:disabled</button>\n\n<h2>block quotes</h2>\n  <blockquote class=\"beta\">\n    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n  </blockquote>\n\n<h2>code snipets</h2>\n<pre><code>function buildTemplate ( template, data, element ) {\n  $.getJSON( data, function( json ) {\n    $( element ).append( JST[ template ] ( json ) );\n  });\n}\n</code></pre> \n\n<h2>unordered lists</h2>\n  <ul class=\"text-list\">\n    <li>List item one</li>\n    <li>List item two</li>\n      <ul class=\"text-list\">\n        <li>List item two A</li>\n        <li>List item two B</li>\n      </ul>\n    <li>List item three</li>\n  </ul>\n\n<h2>ordered lists</h2>\n  <ol>\n    <li>List item one</li>\n    <li>List item two\n      <ol>\n        <li>List item two A</li>\n        <li>List item two B</li>\n      </ol>\n    </li>\n    <li>List item three</li>\n  </ol>\n\n<h2>rules</h2>\n  <hr>\n\n\n<h2>images</h2>\n<img src=\"\">\n\n<h2>tables</h2>\n<table>\n  <thead>\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Hero</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Bruce</td>\n      <td>Wayne</td>\n      <td>Batman</td>\n    </tr>\n    <tr>\n      <td>Clark</td>\n      <td>Kent</td>\n      <td>Superman</td>\n    </tr>\n    <tr>\n      <td>Diana</td>\n      <td>Themyscira</td>\n      <td>Wonder Woman</td>\n    </tr>\n  </tbody>\n</table>\n\n<h2>forms</h2>\n\n<h2>grids</h2>\n\n<h2>icons</h2>\n\n<h2>modals</h2>\n</div>";
  return buffer;
  });