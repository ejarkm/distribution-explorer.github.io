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
    
      
      
    
      var element = document.getElementById("96c81cc7-35a7-45e8-9891-59c37644dfa2");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '96c81cc7-35a7-45e8-9891-59c37644dfa2' but no matching script tag was found.")
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
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
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
                    
                  var docs_json = '{"d80ca84b-a8be-4fc4-8cbf-b86fa2773d1c":{"roots":{"references":[{"attributes":{},"id":"3138","type":"WheelZoomTool"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"3096"}],"border_fill_alpha":0,"center":[{"id":"3099"},{"id":"3103"}],"frame_height":175,"frame_width":300,"left":[{"id":"3100"}],"renderers":[{"id":"3162"}],"title":{"id":"3086"},"toolbar":{"id":"3111"},"toolbar_location":null,"x_range":{"id":"3088"},"x_scale":{"id":"3092"},"y_range":{"id":"3090"},"y_scale":{"id":"3094"}},"id":"3085","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3142","type":"HelpTool"},{"attributes":{},"id":"3137","type":"PanTool"},{"attributes":{"overlay":{"id":"3143"}},"id":"3139","type":"BoxZoomTool"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"3164"}],"change:start":[{"id":"3164"}]},"range_padding":0},"id":"3088","type":"DataRange1d"},{"attributes":{},"id":"3140","type":"SaveTool"},{"attributes":{},"id":"3141","type":"ResetTool"},{"attributes":{},"id":"3183","type":"BasicTickFormatter"},{"attributes":{"axis_label":"y","formatter":{"id":"3183"},"ticker":{"id":"3097"}},"id":"3096","type":"LinearAxis"},{"attributes":{},"id":"3109","type":"HelpTool"},{"attributes":{},"id":"3104","type":"PanTool"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"3166"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"3174","type":"CustomJS"},{"attributes":{"children":[{"id":"3201"},{"id":"3203"}]},"id":"3204","type":"Row"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"3166"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"3173","type":"CustomJS"},{"attributes":{},"id":"3092","type":"LinearScale"},{"attributes":{},"id":"3101","type":"BasicTicker"},{"attributes":{},"id":"3185","type":"UnionRenderers"},{"attributes":{"height":10},"id":"3205","type":"Spacer"},{"attributes":{"children":[[{"id":"3085"},0,0],[{"id":"3178"},0,1],[{"id":"3118"},0,2]]},"id":"3201","type":"GridBox"},{"attributes":{"axis":{"id":"3100"},"dimension":1,"ticker":null},"id":"3103","type":"Grid"},{"attributes":{},"id":"3105","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"3167"},{"id":"3165"},{"id":"3169"}]},"id":"3175","type":"Row"},{"attributes":{},"id":"3094","type":"LinearScale"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"3165"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"3171","type":"CustomJS"},{"attributes":{"axis_label":"PDF","formatter":{"id":"3181"},"ticker":{"id":"3101"}},"id":"3100","type":"LinearAxis"},{"attributes":{},"id":"3186","type":"Selection"},{"attributes":{"children":[{"id":"3168"},{"id":"3166"},{"id":"3170"}]},"id":"3176","type":"Row"},{"attributes":{"children":[{"id":"3177"},{"id":"3205"},{"id":"3204"}]},"id":"3206","type":"Column"},{"attributes":{},"id":"3097","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3143","type":"BoxAnnotation"},{"attributes":{"text":" "},"id":"3119","type":"Title"},{"attributes":{},"id":"3090","type":"DataRange1d"},{"attributes":{"axis":{"id":"3096"},"ticker":null},"id":"3099","type":"Grid"},{"attributes":{"overlay":{"id":"3110"}},"id":"3106","type":"BoxZoomTool"},{"attributes":{},"id":"3107","type":"SaveTool"},{"attributes":{},"id":"3108","type":"ResetTool"},{"attributes":{"text":"Log-Normal"},"id":"3086","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"3156","type":"Line"},{"attributes":{"end":0.5,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"3164"}]},"start":-0.5,"step":0.01,"title":"\\u00b5","value":0.0},"id":"3165","type":"Slider"},{"attributes":{"data_source":{"id":"3152"},"glyph":{"id":"3160"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3161"},"selection_glyph":null,"view":{"id":"3163"}},"id":"3162","type":"GlyphRenderer"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3172"}]},"value":"0.5","width":70},"id":"3169","type":"TextInput"},{"attributes":{"args":{"arg1":{"id":"3165"},"arg2":{"id":"3166"},"arg3":{"id":"3165"},"discrete":false,"dist":"lognormal","n":400,"source_c":{"id":"3153"},"source_p":{"id":"3152"},"xrange":{"id":"3088"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction erf(x) {\\n    // Error function using polynomial approximation (accurate to about 10^-7)\\n    var a = [1.00002368,\\n             0.37409196,\\n             0.09678418,\\n             -0.18628806,\\n             0.27886807,\\n             -1.13520398,\\n             1.48851587,\\n             -0.82215223,\\n             0.17087277];\\n\\n    var t = 1 / (1 + Math.abs(x)/2);\\n    var expSum = -Math.pow(x, 2) - 1.26551223;\\n\\n    for (var i = 0; i &lt; a.length; i++) {\\n        expSum += a[i] * Math.pow(t, i+1);\\n    }\\n\\n    var result = 1 - t * Math.exp(expSum);\\n\\n    if (x &lt; 0) return -result;\\n    return result;\\n}\\n\\n\\n\\nfunction probFun(x, mu, sigma, {}) {\\n    if (x &lt;= 0) return NaN;\\n\\n    var expTerm = (Math.pow(Math.log(x) - mu, 2) / 2.0 / Math.pow(sigma, 2))\\n    return Math.exp(-expTerm) / x / sigma / Math.sqrt(2 * Math.PI);\\n}\\n\\nfunction cdfFun(x, mu, sigma, {}) {\\n    if (x &lt;= 0) return 0.0;\\n\\n    return (1 + erf((Math.log(x) - mu) / sigma / Math.sqrt(2))) / 2;\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"3164","type":"CustomJS"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"3160","type":"Line"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3174"}]},"value":"1.0","width":70},"id":"3170","type":"TextInput"},{"attributes":{"children":[{"id":"3175"},{"id":"3176"}]},"id":"3177","type":"Column"},{"attributes":{},"id":"3187","type":"UnionRenderers"},{"attributes":{"source":{"id":"3153"}},"id":"3158","type":"CDSView"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3173"}]},"value":"0.1","width":70},"id":"3168","type":"TextInput"},{"attributes":{},"id":"3188","type":"Selection"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3171"}]},"value":"-0.5","width":70},"id":"3167","type":"TextInput"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"3161","type":"Line"},{"attributes":{"end":1.0,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"3164"}]},"start":0.1,"step":0.01,"title":"\\u03c3","value":0.2},"id":"3166","type":"Slider"},{"attributes":{"data_source":{"id":"3153"},"glyph":{"id":"3155"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3156"},"selection_glyph":null,"view":{"id":"3158"}},"id":"3157","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"3155","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3110","type":"BoxAnnotation"},{"attributes":{"source":{"id":"3152"}},"id":"3163","type":"CDSView"},{"attributes":{},"id":"3125","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3137"},{"id":"3138"},{"id":"3139"},{"id":"3140"},{"id":"3141"},{"id":"3142"}]},"id":"3144","type":"Toolbar"},{"attributes":{},"id":"3134","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"3188"},"selection_policy":{"id":"3187"}},"id":"3153","type":"ColumnDataSource"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"3165"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"3172","type":"CustomJS"},{"attributes":{"toolbar":{"id":"3202"}},"id":"3203","type":"ToolbarBox"},{"attributes":{},"id":"3192","type":"BasicTickFormatter"},{"attributes":{"width":30},"id":"3178","type":"Spacer"},{"attributes":{"toolbars":[{"id":"3111"},{"id":"3144"}],"tools":[{"id":"3104"},{"id":"3105"},{"id":"3106"},{"id":"3107"},{"id":"3108"},{"id":"3109"},{"id":"3137"},{"id":"3138"},{"id":"3139"},{"id":"3140"},{"id":"3141"},{"id":"3142"}]},"id":"3202","type":"ProxyToolbar"},{"attributes":{},"id":"3130","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3104"},{"id":"3105"},{"id":"3106"},{"id":"3107"},{"id":"3108"},{"id":"3109"}]},"id":"3111","type":"Toolbar"},{"attributes":{},"id":"3181","type":"BasicTickFormatter"},{"attributes":{"axis_label":"y","formatter":{"id":"3194"},"ticker":{"id":"3130"}},"id":"3129","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"3186"},"selection_policy":{"id":"3185"}},"id":"3152","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"3129"},"ticker":null},"id":"3132","type":"Grid"},{"attributes":{},"id":"3194","type":"BasicTickFormatter"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"3129"}],"border_fill_alpha":0,"center":[{"id":"3132"},{"id":"3136"}],"frame_height":175,"frame_width":300,"left":[{"id":"3133"}],"renderers":[{"id":"3157"}],"title":{"id":"3119"},"toolbar":{"id":"3144"},"toolbar_location":null,"x_range":{"id":"3088"},"x_scale":{"id":"3125"},"y_range":{"id":"3151"},"y_scale":{"id":"3127"}},"id":"3118","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"CDF","formatter":{"id":"3192"},"ticker":{"id":"3134"}},"id":"3133","type":"LinearAxis"},{"attributes":{},"id":"3127","type":"LinearScale"},{"attributes":{"axis":{"id":"3133"},"dimension":1,"ticker":null},"id":"3136","type":"Grid"},{"attributes":{"end":1.05,"start":-0.05},"id":"3151","type":"Range1d"}],"root_ids":["3206"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d80ca84b-a8be-4fc4-8cbf-b86fa2773d1c","root_ids":["3206"],"roots":{"3206":"96c81cc7-35a7-45e8-9891-59c37644dfa2"}}];
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