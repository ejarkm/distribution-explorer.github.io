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
    
      
      
    
      var element = document.getElementById("80442cab-2778-4560-970c-876bd32feed3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '80442cab-2778-4560-970c-876bd32feed3' but no matching script tag was found.")
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
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
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
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
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
                    
                  var docs_json = '{&quot;f848bde3-28cc-478f-b188-40175772a8da&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;text&quot;:&quot;Gamma PDF&quot;},&quot;id&quot;:&quot;1002&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;1023&quot;}},&quot;id&quot;:&quot;1027&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;1034&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;1033&quot;}},&quot;id&quot;:&quot;1023&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1013&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1034&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1033&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1010&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1031&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;x&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1029&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1013&quot;}},&quot;id&quot;:&quot;1012&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;1012&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;1015&quot;},{&quot;id&quot;:&quot;1019&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;1016&quot;}],&quot;plot_height&quot;:200,&quot;plot_width&quot;:300,&quot;renderers&quot;:[{&quot;id&quot;:&quot;1026&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;1002&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;1021&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;1004&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;1008&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;1006&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;1010&quot;}},&quot;id&quot;:&quot;1001&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1012&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;1015&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1025&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1006&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1017&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1008&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;f(x; 1.68, 5)&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;1031&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;1017&quot;}},&quot;id&quot;:&quot;1016&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;end&quot;:4,&quot;start&quot;:-0.15},&quot;id&quot;:&quot;1004&quot;,&quot;type&quot;:&quot;Range1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#1f77b4&quot;,&quot;line_width&quot;:2,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;1024&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1029&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;1023&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;1024&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;1025&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;1027&quot;}},&quot;id&quot;:&quot;1026&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;1020&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;1016&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;1019&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;1020&quot;}]},&quot;id&quot;:&quot;1021&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;1001&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"f848bde3-28cc-478f-b188-40175772a8da","root_ids":["1001"],"roots":{"1001":"80442cab-2778-4560-970c-876bd32feed3"}}];
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