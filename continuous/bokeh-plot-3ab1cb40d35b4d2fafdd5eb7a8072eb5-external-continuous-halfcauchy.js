(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("edb6c8de-ce26-45dc-aad5-032189988339");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'edb6c8de-ce26-45dc-aad5-032189988339' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"b140d055-072c-41a8-b75c-9137fc6e486f":{"defs":[],"roots":{"references":[{"attributes":{},"id":"2529","type":"BasicTicker"},{"attributes":{},"id":"2537","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"2528"},"ticker":null},"id":"2531","type":"Grid"},{"attributes":{"axis_label":"CDF","formatter":{"id":"2593"},"major_label_policy":{"id":"2592"},"ticker":{"id":"2533"}},"id":"2532","type":"LinearAxis"},{"attributes":{},"id":"2592","type":"AllLabels"},{"attributes":{"axis":{"id":"2532"},"dimension":1,"ticker":null},"id":"2535","type":"Grid"},{"attributes":{},"id":"2593","type":"BasicTickFormatter"},{"attributes":{},"id":"2533","type":"BasicTicker"},{"attributes":{"end":1.05,"start":-0.05},"id":"2550","type":"Range1d"},{"attributes":{},"id":"2508","type":"HelpTool"},{"attributes":{},"id":"2541","type":"HelpTool"},{"attributes":{},"id":"2536","type":"PanTool"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"2563"}],"change:start":[{"id":"2563"}]},"range_padding":0},"id":"2487","type":"DataRange1d"},{"attributes":{"overlay":{"id":"2542"}},"id":"2538","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"2576"},{"id":"2608"},{"id":"2607"}]},"id":"2609","type":"Column"},{"attributes":{},"id":"2539","type":"SaveTool"},{"attributes":{"axis_label":"y","formatter":{"id":"2583"},"major_label_policy":{"id":"2582"},"ticker":{"id":"2496"}},"id":"2495","type":"LinearAxis"},{"attributes":{},"id":"2540","type":"ResetTool"},{"attributes":{"width":30},"id":"2577","type":"Spacer"},{"attributes":{"axis":{"id":"2495"},"ticker":null},"id":"2498","type":"Grid"},{"attributes":{},"id":"2595","type":"AllLabels"},{"attributes":{},"id":"2503","type":"PanTool"},{"attributes":{},"id":"2596","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"2510"},{"id":"2543"}],"tools":[{"id":"2503"},{"id":"2504"},{"id":"2505"},{"id":"2506"},{"id":"2507"},{"id":"2508"},{"id":"2536"},{"id":"2537"},{"id":"2538"},{"id":"2539"},{"id":"2540"},{"id":"2541"}]},"id":"2605","type":"ProxyToolbar"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"2495"}],"border_fill_alpha":0,"center":[{"id":"2498"},{"id":"2502"}],"frame_height":175,"frame_width":300,"left":[{"id":"2499"}],"renderers":[{"id":"2561"}],"title":{"id":"2485"},"toolbar":{"id":"2510"},"toolbar_location":null,"x_range":{"id":"2487"},"x_scale":{"id":"2491"},"y_range":{"id":"2489"},"y_scale":{"id":"2493"}},"id":"2484","subtype":"Figure","type":"Plot"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"2528"}],"border_fill_alpha":0,"center":[{"id":"2531"},{"id":"2535"}],"frame_height":175,"frame_width":300,"left":[{"id":"2532"}],"renderers":[{"id":"2556"}],"title":{"id":"2518"},"toolbar":{"id":"2543"},"toolbar_location":null,"x_range":{"id":"2487"},"x_scale":{"id":"2524"},"y_range":{"id":"2550"},"y_scale":{"id":"2526"}},"id":"2517","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2491","type":"LinearScale"},{"attributes":{},"id":"2500","type":"BasicTicker"},{"attributes":{"axis":{"id":"2499"},"dimension":1,"ticker":null},"id":"2502","type":"Grid"},{"attributes":{},"id":"2504","type":"WheelZoomTool"},{"attributes":{},"id":"2496","type":"BasicTicker"},{"attributes":{"text":" "},"id":"2518","type":"Title"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2570"}]},"value":"0","width":70},"id":"2566","type":"TextInput"},{"attributes":{"toolbar":{"id":"2605"}},"id":"2606","type":"ToolbarBox"},{"attributes":{"end":1.0,"js_property_callbacks":{"change:value":[{"id":"2563"}]},"start":0,"step":0.01,"title":"\\u00b5","value":0},"id":"2564","type":"Slider"},{"attributes":{},"id":"2493","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2542","type":"BoxAnnotation"},{"attributes":{"axis_label":"PDF","formatter":{"id":"2580"},"major_label_policy":{"id":"2579"},"ticker":{"id":"2500"}},"id":"2499","type":"LinearAxis"},{"attributes":{},"id":"2585","type":"UnionRenderers"},{"attributes":{},"id":"2489","type":"DataRange1d"},{"attributes":{"text":"Half-Cauchy"},"id":"2485","type":"Title"},{"attributes":{"overlay":{"id":"2509"}},"id":"2505","type":"BoxZoomTool"},{"attributes":{},"id":"2506","type":"SaveTool"},{"attributes":{},"id":"2586","type":"Selection"},{"attributes":{},"id":"2507","type":"ResetTool"},{"attributes":{"args":{"arg1":{"id":"2564"},"arg2":{"id":"2565"},"arg3":{"id":"2564"},"discrete":false,"dist":"halfcauchy","n":400,"source_c":{"id":"2552"},"source_p":{"id":"2551"},"xrange":{"id":"2487"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction probFun(x, mu, sigma, {}) {\\n    if (x &lt; mu) return NaN;\\n\\n    return 2.0 / Math.PI / sigma / (1 + Math.pow((x - mu) / sigma, 2));\\n}\\n\\nfunction cdfFun(x, mu, sigma, {}) {\\n    if (x &lt; mu) return 0.0;\\n\\n    return 2.0 * Math.atan((x - mu) / sigma) / Math.PI;\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"2563","type":"CustomJS"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"2560","type":"Line"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"2554","type":"Line"},{"attributes":{"data_source":{"id":"2551"},"glyph":{"id":"2559"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2560"},"view":{"id":"2562"}},"id":"2561","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"2559","type":"Line"},{"attributes":{"children":[{"id":"2574"},{"id":"2575"}]},"id":"2576","type":"Column"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"2555","type":"Line"},{"attributes":{"source":{"id":"2552"}},"id":"2557","type":"CDSView"},{"attributes":{"data_source":{"id":"2552"},"glyph":{"id":"2554"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2555"},"view":{"id":"2557"}},"id":"2556","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"2509","type":"BoxAnnotation"},{"attributes":{"source":{"id":"2551"}},"id":"2562","type":"CDSView"},{"attributes":{"active_multi":null,"tools":[{"id":"2536"},{"id":"2537"},{"id":"2538"},{"id":"2539"},{"id":"2540"},{"id":"2541"}]},"id":"2543","type":"Toolbar"},{"attributes":{"axis_label":"y","formatter":{"id":"2596"},"major_label_policy":{"id":"2595"},"ticker":{"id":"2529"}},"id":"2528","type":"LinearAxis"},{"attributes":{"children":[[{"id":"2484"},0,0],[{"id":"2577"},0,1],[{"id":"2517"},0,2]]},"id":"2604","type":"GridBox"},{"attributes":{},"id":"2588","type":"UnionRenderers"},{"attributes":{"end":1,"js_property_callbacks":{"change:value":[{"id":"2563"}]},"start":0,"step":0.01,"title":"\\u03c3","value":0.2},"id":"2565","type":"Slider"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2572"}]},"value":"0","width":70},"id":"2567","type":"TextInput"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"2564"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"2570","type":"CustomJS"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2565"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"2573","type":"CustomJS"},{"attributes":{},"id":"2589","type":"Selection"},{"attributes":{},"id":"2579","type":"AllLabels"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"2564"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"2571","type":"CustomJS"},{"attributes":{},"id":"2580","type":"BasicTickFormatter"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2571"}]},"value":"1.0","width":70},"id":"2568","type":"TextInput"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"2573"}]},"value":"1","width":70},"id":"2569","type":"TextInput"},{"attributes":{"children":[{"id":"2567"},{"id":"2565"},{"id":"2569"}]},"id":"2575","type":"Row"},{"attributes":{"children":[{"id":"2566"},{"id":"2564"},{"id":"2568"}]},"id":"2574","type":"Row"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"2565"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"2572","type":"CustomJS"},{"attributes":{"children":[{"id":"2604"},{"id":"2606"}]},"id":"2607","type":"Row"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"2589"},"selection_policy":{"id":"2588"}},"id":"2552","type":"ColumnDataSource"},{"attributes":{"height":10},"id":"2608","type":"Spacer"},{"attributes":{"active_multi":null,"tools":[{"id":"2503"},{"id":"2504"},{"id":"2505"},{"id":"2506"},{"id":"2507"},{"id":"2508"}]},"id":"2510","type":"Toolbar"},{"attributes":{},"id":"2582","type":"AllLabels"},{"attributes":{},"id":"2583","type":"BasicTickFormatter"},{"attributes":{},"id":"2524","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"2586"},"selection_policy":{"id":"2585"}},"id":"2551","type":"ColumnDataSource"},{"attributes":{},"id":"2526","type":"LinearScale"}],"root_ids":["2609"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"b140d055-072c-41a8-b75c-9137fc6e486f","root_ids":["2609"],"roots":{"2609":"edb6c8de-ce26-45dc-aad5-032189988339"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();