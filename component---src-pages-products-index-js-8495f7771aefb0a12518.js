webpackJsonp([19643344707044],{"./src/assets/img/iffy_camera_icon.png":function(e,t,n){e.exports=n.p+"static/iffy_camera_icon.c7111fcb.png"},"./src/assets/img/random_emoji_icon.png":function(e,t,n){e.exports=n.p+"static/random_emoji_icon.4940bfd0.png"},"./src/components/product-panel.js":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0;var l=o(["\n  margin-bottom: 0;\n\n  @media (min-width: 700px) {\n    padding-left: 2rem;\n  }\n"],["\n  margin-bottom: 0;\n\n  @media (min-width: 700px) {\n    padding-left: 2rem;\n  }\n"]),a=o(["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto 0 auto;\n  margin-bottom: 3rem;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: 1rem;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto 0 auto;\n  margin-bottom: 3rem;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n    justify-content: center;\n    margin-bottom: 1rem;\n  }\n"]),r=o(["\n  margin: 0 auto 0 auto;\n  padding: 2.5rem 0 2.5rem 0;\n  width: 100px;\n  height: 100px;\n\n  @media (min-width: 700px) {\n    margin: 0 0 0 0;\n  }\n"],["\n  margin: 0 auto 0 auto;\n  padding: 2.5rem 0 2.5rem 0;\n  width: 100px;\n  height: 100px;\n\n  @media (min-width: 700px) {\n    margin: 0 0 0 0;\n  }\n"]),s=o(["\n  width: 100%;\n\n  @media (min-width: 700px) {\n    padding: 2.5rem 0 0 3rem;\n    width: 60%;\n  }\n"],["\n  width: 100%;\n\n  @media (min-width: 700px) {\n    padding: 2.5rem 0 0 3rem;\n    width: 60%;\n  }\n"]),d=o(["\n  margin: 0 0 2rem 0;\n"],["\n  margin: 0 0 2rem 0;\n"]),u=n("./node_modules/react/react.js"),c=i(u),m=n("./node_modules/styled-components/lib/index.js"),p=i(m),f=n("./src/components/text-link.js"),g=i(f),h=p.default.h2(l),z=p.default.div(a),b=p.default.img(r),x=p.default.div(s),w=p.default.p(d),_=function(e){var t=e.product;return c.default.createElement(x,null,c.default.createElement(w,null,t.description,c.default.createElement(g.default,{to:"/products/"+t.slug},"More info.")),c.default.createElement(g.default,{href:t.link,target:"_blank"},"Visit App Store"))},y=function(e){var t=e.product;return c.default.createElement("div",null,c.default.createElement(h,null,t.name),c.default.createElement(z,null,c.default.createElement(b,{src:t.image}),c.default.createElement(_,{product:t})))};t.default=y,e.exports=t.default},"./src/components/top-description.js":function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.raw=t,e}t.__esModule=!0;var l=o(["\n  margin-bottom: 4rem;\n"],["\n  margin-bottom: 4rem;\n"]),a=o(["\n  @media (min-width: 700px) {\n    padding-left: 1rem;\n  }\n"],["\n  @media (min-width: 700px) {\n    padding-left: 1rem;\n  }\n"]),r=o(["\n  @media (min-width: 700px) {\n    padding: 0 5rem 0 4rem;\n  }\n"],["\n  @media (min-width: 700px) {\n    padding: 0 5rem 0 4rem;\n  }\n"]),s=n("./node_modules/react/react.js"),d=i(s),u=n("./node_modules/styled-components/lib/index.js"),c=i(u),m=c.default.div(l),p=c.default.h1(a),f=c.default.p(r),g=function(e){var t=e.info;return d.default.createElement(m,null,d.default.createElement(p,null,t.title),d.default.createElement(f,null,t.description))};t.default=g,e.exports=t.default},"./src/data/descriptions.js":function(e,t){"use strict";t.__esModule=!0;var n={products:{title:"Available in the App Store",description:"Fo shizzle crazy dolor sit hizzle, phat adipiscing elit. Nullam that's the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo'. Sizzle erizzle. Gangster izzle dolor dapibus turpis tempizzle tempizzle. Check it out brizzle nibh et turpizzle. We gonna chung in crunk. Ma nizzle eleifend rhoncizzle doggy. Personal projects that I have shipped!"},technical:{title:"Appeasing the Tiki Gods",description:"The quick brown fox jumps over the lazy dog."},creative:{title:"Don't Sweat the Technique",description:"Fo shizzle crazy dolor sit hizzle, phat adipiscing elit. Nullam that's the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo'. Sizzle erizzle. Gangster izzle dolor dapibus turpis tempizzle tempizzle. Check it out brizzle nibh et turpizzle. We gonna chung in crunk. Ma nizzle eleifend rhoncizzle doggy. Personal projects that I have shipped!"}};t.default=n,e.exports=t.default},"./src/data/products.js":function(e,t,n){"use strict";t.__esModule=!0;var i=[{name:"Iffy Camera",description:"A camera that makes gifs. Nullam thats the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo. Sizzle erizzle. ",image:n("./src/assets/img/iffy_camera_icon.png"),slug:"iffy-camera",link:"https://www.reddit.com"},{name:"Random Emoji",description:"The last keyboard you need. Nullam thats the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo. Sizzle erizzle. ",image:n("./src/assets/img/random_emoji_icon.png"),slug:"random-emoji",link:"https://www.reddit.com"}];t.default=i,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/lola/Dropbox/Portfolio/lawrnce.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/products/index.js':function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("./node_modules/react/react.js"),l=i(o),a=n("./src/components/top-description.js"),r=i(a),s=n("./src/components/product-panel.js"),d=i(s),u=n("./src/data/products.js"),c=i(u),m=n("./src/data/descriptions.js"),p=i(m);t.default=function(){return l.default.createElement("div",null,l.default.createElement(r.default,{info:p.default.products}),c.default.map(function(e){return l.default.createElement(d.default,{product:e})}))},e.exports=t.default}});
//# sourceMappingURL=component---src-pages-products-index-js-8495f7771aefb0a12518.js.map