webpackJsonp([19643344707044],{"./src/components/product-panel.js":function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,n){return e.raw=n,e}n.__esModule=!0;var o=l(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto 0 auto;\n  padding: 3rem 0 0 0;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n    justify-content: center;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto 0 auto;\n  padding: 3rem 0 0 0;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n    justify-content: center;\n  }\n"]),a=l(["\n  margin: 0 auto 0 auto;\n  width: 120px;\n  height: 120px;\n\n  @media (min-width: 700px) {\n    margin: 0 0 0 0;\n  }\n"],["\n  margin: 0 auto 0 auto;\n  width: 120px;\n  height: 120px;\n\n  @media (min-width: 700px) {\n    margin: 0 0 0 0;\n  }\n"]),r=l(["\n  padding: 27px 0 0 0;\n  width: 100%;\n\n  @media (min-width: 700px) {\n    padding: 0 0 0 8rem;\n    width: 60%;\n  }\n"],["\n  padding: 27px 0 0 0;\n  width: 100%;\n\n  @media (min-width: 700px) {\n    padding: 0 0 0 8rem;\n    width: 60%;\n  }\n"]),d=t("./node_modules/react/react.js"),s=i(d),u=t("./node_modules/styled-components/lib/index.js"),c=i(u),p=t("./src/components/text-link.js"),m=i(p),f=c.default.div(o),g=c.default.img(a),h=c.default.div(r),b=function(e){var n=e.product;return s.default.createElement(h,null,s.default.createElement("p",null,n.description,s.default.createElement(m.default,{to:"/products/"+n.slug}," More info.")),s.default.createElement(m.default,{href:n.link,target:"_blank"},"Visit App Store"))},x=function(e){var n=e.product;return s.default.createElement("div",null,s.default.createElement("h2",null,n.name),s.default.createElement(f,null,s.default.createElement(g,{src:n.image}),s.default.createElement(b,{product:n})))};n.default=x,e.exports=n.default},"./src/components/text-link.js":function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,n){return e.raw=n,e}n.__esModule=!0;var o=l(["\n  color: #007AFF;\n"],["\n  color: #007AFF;\n"]),a=t("./node_modules/styled-components/lib/index.js"),r=i(a),d=t("./node_modules/gatsby-link/index.js"),s=i(d),u=(0,r.default)(s.default)(o);n.default=u,e.exports=n.default},"./src/components/top-description.js":function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function l(e,n){return e.raw=n,e}n.__esModule=!0;var o=l(["\n\n"],["\n\n"]),a=l(["\n  @media (min-width: 700px) {\n    padding: 0 5rem 0 4rem;\n  }\n"],["\n  @media (min-width: 700px) {\n    padding: 0 5rem 0 4rem;\n  }\n"]),r=t("./node_modules/styled-components/lib/index.js"),d=i(r),s=d.default.div(o),u=d.default.p(a),c=function(e){var n=e.info;return React.createElement(s,null,React.createElement("h1",null,n.title),React.createElement(u,null,n.description))};n.default=c,e.exports=n.default},"./src/data/iffy_camera_icon.png":function(e,n,t){e.exports=t.p+"static/iffy_camera_icon.c7111fcb.png"},"./src/data/products.js":function(e,n,t){"use strict";n.__esModule=!0;var i=[{name:"Iffy Camera",description:"A camera that makes gifs. Nullam thats the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo. Sizzle erizzle.",image:t("./src/data/iffy_camera_icon.png"),slug:"iffy-camera",link:"https://www.reddit.com"},{name:"Random Emoji",description:"The last keyboard you need. Nullam thats the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo. Sizzle erizzle.",image:t("./src/data/random_emoji_icon.png"),slug:"random-emoji",link:"https://www.reddit.com"}];n.default=i,e.exports=n.default},"./src/data/random_emoji_icon.png":function(e,n,t){e.exports=t.p+"static/random_emoji_icon.4940bfd0.png"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/products/index.js':function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0;var l=t("./node_modules/react/react.js"),o=i(l),a=t("./src/components/top-description.js"),r=(i(a),t("./src/components/product-panel.js")),d=i(r),s=t("./src/data/products.js"),u=i(s);n.default=function(){return o.default.createElement("div",null,o.default.createElement("h1",null,"Available in the App Store"),"Fo shizzle crazy dolor sit hizzle, phat adipiscing elit. Nullam that's the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo'. Sizzle erizzle. Gangster izzle dolor dapibus turpis tempizzle tempizzle. Check it out brizzle nibh et turpizzle. We gonna chung in crunk. Ma nizzle eleifend rhoncizzle doggy. Personal projects that I have shipped!",u.default.map(function(e){return o.default.createElement(d.default,{product:e})}))},e.exports=n.default}});
//# sourceMappingURL=component---src-pages-products-index-js-3d71b5d1caf67e983982.js.map