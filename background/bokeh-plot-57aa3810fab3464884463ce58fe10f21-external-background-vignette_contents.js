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
    
      
      
    
      var element = document.getElementById("3b392673-a38b-43dd-9e31-6e3b06460958");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '3b392673-a38b-43dd-9e31-6e3b06460958' but no matching script tag was found.")
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
                    
                  var docs_json = '{"c3bd0118-3f14-44b5-977e-dc14bb900290":{"roots":{"references":[{"attributes":{},"id":"1460","type":"BasicTicker"},{"attributes":{"axis":{"id":"1459"},"dimension":1,"ticker":null},"id":"1462","type":"Grid"},{"attributes":{},"id":"1464","type":"WheelZoomTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"1487","type":"Line"},{"attributes":{},"id":"1520","type":"BasicTickFormatter"},{"attributes":{},"id":"1468","type":"HelpTool"},{"attributes":{},"id":"1463","type":"PanTool"},{"attributes":{"overlay":{"id":"1469"}},"id":"1465","type":"BoxZoomTool"},{"attributes":{},"id":"1466","type":"SaveTool"},{"attributes":{},"id":"1467","type":"ResetTool"},{"attributes":{"text":" "},"id":"1445","type":"Title"},{"attributes":{"axis_label":"PDF","formatter":{"id":"1507"},"ticker":{"id":"1427"}},"id":"1426","type":"LinearAxis"},{"attributes":{},"id":"1431","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"1426"},"dimension":1,"ticker":null},"id":"1429","type":"Grid"},{"attributes":{},"id":"1509","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"1527"},{"id":"1529"}]},"id":"1530","type":"Row"},{"attributes":{},"id":"1435","type":"HelpTool"},{"attributes":{"height":10},"id":"1531","type":"Spacer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1469","type":"BoxAnnotation"},{"attributes":{},"id":"1430","type":"PanTool"},{"attributes":{},"id":"1427","type":"BasicTicker"},{"attributes":{"children":[{"id":"1503"},{"id":"1531"},{"id":"1530"}]},"id":"1532","type":"Column"},{"attributes":{},"id":"1511","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"1436"}},"id":"1432","type":"BoxZoomTool"},{"attributes":{},"id":"1433","type":"SaveTool"},{"attributes":{},"id":"1434","type":"ResetTool"},{"attributes":{},"id":"1512","type":"Selection"},{"attributes":{"source":{"id":"1478"}},"id":"1489","type":"CDSView"},{"attributes":{"end":0.5,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"1490"}]},"start":-0.5,"step":0.01,"title":"\\u00b5","value":0},"id":"1491","type":"Slider"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"1491"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"1497","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1500"}]},"value":"1","width":70},"id":"1496","type":"TextInput"},{"attributes":{"end":1,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"1490"}]},"start":0,"step":0.01,"title":"\\u03c3","value":0.2},"id":"1492","type":"Slider"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1436","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"1501"},{"id":"1502"}]},"id":"1503","type":"Column"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1463"},{"id":"1464"},{"id":"1465"},{"id":"1466"},{"id":"1467"},{"id":"1468"}]},"id":"1470","type":"Toolbar"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1499"}]},"value":"0","width":70},"id":"1494","type":"TextInput"},{"attributes":{},"id":"1513","type":"UnionRenderers"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1497"}]},"value":"-0.5","width":70},"id":"1493","type":"TextInput"},{"attributes":{},"id":"1514","type":"Selection"},{"attributes":{"children":[{"id":"1493"},{"id":"1491"},{"id":"1495"}]},"id":"1501","type":"Row"},{"attributes":{"text":"Normal"},"id":"1412","type":"Title"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"1491"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"1498","type":"CustomJS"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"1498"}]},"value":"0.5","width":70},"id":"1495","type":"TextInput"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1422"}],"border_fill_alpha":0,"center":[{"id":"1425"},{"id":"1429"}],"frame_height":175,"frame_width":300,"left":[{"id":"1426"}],"renderers":[{"id":"1488"}],"title":{"id":"1412"},"toolbar":{"id":"1437"},"toolbar_location":null,"x_range":{"id":"1414"},"x_scale":{"id":"1418"},"y_range":{"id":"1416"},"y_scale":{"id":"1420"}},"id":"1411","subtype":"Figure","type":"Plot"},{"attributes":{"children":[{"id":"1494"},{"id":"1492"},{"id":"1496"}]},"id":"1502","type":"Row"},{"attributes":{"end":1.05,"start":-0.05},"id":"1477","type":"Range1d"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"1492"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"1500","type":"CustomJS"},{"attributes":{},"id":"1420","type":"LinearScale"},{"attributes":{"axis_label":"y","formatter":{"id":"1509"},"ticker":{"id":"1423"}},"id":"1422","type":"LinearAxis"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"1481","type":"Line"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"1492"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"1499","type":"CustomJS"},{"attributes":{"data_source":{"id":"1479"},"glyph":{"id":"1481"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1482"},"selection_glyph":null,"view":{"id":"1484"}},"id":"1483","type":"GlyphRenderer"},{"attributes":{"children":[[{"id":"1411"},0,0],[{"id":"1504"},0,1],[{"id":"1444"},0,2]]},"id":"1527","type":"GridBox"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"1482","type":"Line"},{"attributes":{"data_source":{"id":"1478"},"glyph":{"id":"1486"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1487"},"selection_glyph":null,"view":{"id":"1489"}},"id":"1488","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"1528"}},"id":"1529","type":"ToolbarBox"},{"attributes":{},"id":"1453","type":"LinearScale"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"1486","type":"Line"},{"attributes":{},"id":"1518","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"1479"}},"id":"1484","type":"CDSView"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"1455"}],"border_fill_alpha":0,"center":[{"id":"1458"},{"id":"1462"}],"frame_height":175,"frame_width":300,"left":[{"id":"1459"}],"renderers":[{"id":"1483"}],"title":{"id":"1445"},"toolbar":{"id":"1470"},"toolbar_location":null,"x_range":{"id":"1414"},"x_scale":{"id":"1451"},"y_range":{"id":"1477"},"y_scale":{"id":"1453"}},"id":"1444","subtype":"Figure","type":"Plot"},{"attributes":{"width":30},"id":"1504","type":"Spacer"},{"attributes":{"args":{"arg1":{"id":"1491"},"arg2":{"id":"1492"},"arg3":{"id":"1491"},"discrete":false,"dist":"normal","n":400,"source_c":{"id":"1479"},"source_p":{"id":"1478"},"xrange":{"id":"1414"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction erf(x) {\\n    // Error function using polynomial approximation (accurate to about 10^-7)\\n    var a = [1.00002368,\\n             0.37409196,\\n             0.09678418,\\n             -0.18628806,\\n             0.27886807,\\n             -1.13520398,\\n             1.48851587,\\n             -0.82215223,\\n             0.17087277];\\n\\n    var t = 1 / (1 + Math.abs(x)/2);\\n    var expSum = -Math.pow(x, 2) - 1.26551223;\\n\\n    for (var i = 0; i &lt; a.length; i++) {\\n        expSum += a[i] * Math.pow(t, i+1);\\n    }\\n\\n    var result = 1 - t * Math.exp(expSum);\\n\\n    if (x &lt; 0) return -result;\\n    return result;\\n}\\n\\n\\n\\nfunction probFun(x, mu, sigma, {}) {\\n    var expTerm = (Math.pow(x - mu, 2) / 2.0 / Math.pow(sigma, 2));\\n    return Math.exp(-expTerm) / sigma / Math.sqrt(2 * Math.PI);\\n}\\n\\nfunction cdfFun(x, mu, sigma, {}) {\\n    return (1 + erf((x - mu) / sigma / Math.sqrt(2))) / 2;\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"1490","type":"CustomJS"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1430"},{"id":"1431"},{"id":"1432"},{"id":"1433"},{"id":"1434"},{"id":"1435"}]},"id":"1437","type":"Toolbar"},{"attributes":{"toolbars":[{"id":"1437"},{"id":"1470"}],"tools":[{"id":"1430"},{"id":"1431"},{"id":"1432"},{"id":"1433"},{"id":"1434"},{"id":"1435"},{"id":"1463"},{"id":"1464"},{"id":"1465"},{"id":"1466"},{"id":"1467"},{"id":"1468"}]},"id":"1528","type":"ProxyToolbar"},{"attributes":{},"id":"1423","type":"BasicTicker"},{"attributes":{},"id":"1416","type":"DataRange1d"},{"attributes":{"axis_label":"y","formatter":{"id":"1520"},"ticker":{"id":"1456"}},"id":"1455","type":"LinearAxis"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAMBv/bv179b/v976d+vfrf+/Tfgz4c+E/7+89e/Wv1v/vyvzq8yvMv+/mvBnwp8J/78J7iO4j+D+v3jr361/t/6/5+ibo2+O/r9W5leZX2X+v8XjE49PPP6/NOHPhD8T/r+j3ot6L+r9vxLcR3Afwf2/gdkDZg+Y/b/w1r9b/279v1/Ue1HvRf2/ztE3R98c/b89z/M8z/P8v6zMrzK/yvy/G8prKK+h/L+Kxycen3j8v/nE4xOPT/y/aMKfCX8m/L/Xv1v/bv37v0a9F/Ve1Pu/tbrT6k6r+78kuI/gPoL7v5O1S9YuWfu/ArMHzB4w+79xsMPBDgf7v+Ctf7f+3fq/T6s7re60+r++qPei3ov6vy2ms5jOYvq/nKNvjr45+r8LoSuErhD6v3qe53me5/m/6Zujb46++b9YmV9lfpX5v8eWG1tubPm/NpTXUF5D+b+lkZNGThr5vxSPTzw+8fi/g4wLMi7I+L/yiccnHp/4v2GHgx0Odvi/0IQ/E/5M+L8/gvsI7iP4v65/t/7d+ve/HX1z9M3R97+Mei/qvaj3v/t369+tf/e/anWn1Z1W97/ZcmPLjS33v0hwH8F9BPe/t23btm3b9r8ma5esXbL2v5VoU6JNifa/BGYPmD1g9r9zY8uNLTf2v+Jgh4MdDva/UV5DeQ3l9b/AW/9u/bv1vy9Zu2TtkvW/nlZ3Wt1p9b8NVDNQzUD1v3xR70W9F/W/606rO63u9L9aTGcxncX0v8lJIyeNnPS/OEffHH1z9L+nRJsSbUr0vxZCVwhdIfS/hT8T/kz487/0PM/zPM/zv2M6i+kspvO/0jdH3xx9879BNQPVDFTzv7Ayv8r8KvO/HzB7wOwB87+OLTe23Njyv/0q86vMr/K/bCivobyG8r/bJWuXrF3yv0ojJ42cNPK/uSDjgowL8r8oHp94fOLxv5cbW25sufG/BhkXZFyQ8b91FtNZTGfxv+QTj088PvG/UxFLRSwV8b/CDgc7HOzwvzEMwzAMw/C/oAl/JvyZ8L8PBzsc7HDwv34E9xHcR/C/7QGzB8we8L+4/t36d+vvv5b5VeZXme+/dPTN0TdH779S70W9F/XuvzDqvaj3ou6/DuU1lNdQ7r/s361/t/7tv8raJWuXrO2/qNWdVnda7b+G0BVCVwjtv2TLjS03tuy/QsYFGRdk7L8gwX0E9xHsv/679e/Wv+u/3LZt27Zt67+6seXGlhvrv5isXbJ2yeq/dqfVnVZ36r9Uok2JNiXqvzKdxXQW0+m/EJg9YPaA6b/ukrVL1i7pv8yNLTe23Oi/qoilIpaK6L+Igx0Odjjov2Z+lflV5ue/RHkN5TWU578idIXQFULnvwBv/bv17+a/3ml1p9Wd5r+8ZO2StUvmv5pfZX6V+eW/eFrdaXWn5b9WVVVVVVXlvzRQzUA1A+W/EktFLBWx5L/wRb0X9V7kv85ANQPVDOS/rDut7rS647+KNiXalGjjv2gxncV0FuO/RiwVsVTE4r8kJ42cNHLivwIiBYgUIOK/4Bx9c/TN4b++F/Ve1Hvhv5wSbUq0KeG/eg3lNZTX4L9YCF0hdIXgvzYD1QxUM+C/KPyZ8GfC37/k8YnHJx7fv6DneZ7ned6/XN1pdafV3b8Y01lMZzHdv9TISSMnjdy/kL45+ubo279MtCnRpkTbvwiqGahmoNq/xJ8Jfyb82b+AlflV5lfZvzyL6Syms9i/+IDZA2YP2L+0dsnaJWvXv3BsubHlxta/LGKpiKUi1r/oV5lfZX7Vv6RNiTYl2tS/YEN5DeU11L8cOWnkpJHTv9guWbtk7dK/lCRJkiRJ0r9QGjlp5KTRvwwQKUCkANG/yAUZF2Rc0L8I9xHcR3DPv4Di8YnHJ86/+M3RN0ffzL9wubHlxpbLv+ikkZNGTsq/YJBxQcYFyb/Ye1HvRb3Hv1BnMZ3FdMa/yFIRS0Usxb9APvH4xOPDv7gp0aZEm8K/MBWxVMRSwb+oAJECRArAv0DY4WCHg72/MK+hvIbyur8ghmEYhmG4vxBdIXSF0LW/ADThz4Q/s7/wCqErhK6wv8DDwQ4HO6y/oHFBxgUZp7+AH8F9BPehv8CagWoGqpm/AO0BswfMjr8ASQEiBYh0vwBIASIFiHQ/AOwBswfMjj+AmoFqBqqZP4AfwX0E96E/gHFBxgUZpz+Aw8EOBzusP+AKoSuErrA/ADThz4Q/sz8AXSF0hdC1PwCGYRiGYbg/IK+hvIbyuj9A2OFgh4O9P6AAkQJECsA/IBWxVMRSwT+wKdGmRJvCP0A+8fjE48M/wFIRS0UsxT9AZzGdxXTGP9B7Ue9Fvcc/YJBxQcYFyT/gpJGTRk7KP2C5seXGlss/8M3RN0ffzD+A4vGJxyfOPwD3EdxHcM8/wAUZF2Rc0D8IEClApADRP1AaOWnkpNE/kCRJkiRJ0j/QLlm7ZO3SPxg5aeSkkdM/YEN5DeU11D+gTYk2JdrUP+BXmV9lftU/KGKpiKUi1j9wbLmx5cbWP7B2ydola9c/8IDZA2YP2D84i+ksprPYP4CV+VXmV9k/wJ8Jfyb82T8AqhmoZqDaP0i0KdGmRNs/kL45+ubo2z/QyEkjJ43cPxDTWUxnMd0/WN1pdafV3T+g53me53neP+DxiccnHt8/IPyZ8GfC3z80A9UMVDPgP1gIXSF0heA/eA3lNZTX4D+YEm1KtCnhP7wX9V7Ue+E/4Bx9c/TN4T8AIgWIFCDiPyAnjZw0cuI/RCwVsVTE4j9oMZ3FdBbjP4g2JdqUaOM/qDut7rS64z/MQDUD1QzkP/BFvRf1XuQ/EEtFLBWx5D8wUM1ANQPlP1RVVVVVVeU/eFrdaXWn5T+YX2V+lfnlP7hk7ZK1S+Y/3Gl1p9Wd5j8Ab/279e/mPyB0hdAVQuc/QHkN5TWU5z9kfpX5VebnP4iDHQ52OOg/qIilIpaK6D/IjS03ttzoP+yStUvWLuk/EJg9YPaA6T8wncV0FtPpP1CiTYk2Jeo/dKfVnVZ36j+YrF2ydsnqP7ix5caWG+s/2LZt27Zt6z/8u/Xv1r/rPyDBfQT3Eew/QMYFGRdk7D9gy40tN7bsP4TQFUJXCO0/qNWdVnda7T/I2iVrl6ztP+jfrX+3/u0/DOU1lNdQ7j8w6r2o96LuP1DvRb0X9e4/cPTN0TdH7z+U+VXmV5nvP7j+3fp36+8/7AGzB8we8D98BPcR3EfwPw4HOxzscPA/oAl/JvyZ8D8wDMMwDMPwP8AOBzsc7PA/UhFLRSwV8T/kE49PPD7xP3QW01lMZ/E/BBkXZFyQ8T+WG1tubLnxPygen3h84vE/uCDjgowL8j9IIyeNnDTyP9ola5esXfI/bCivobyG8j/8KvOrzK/yP4wtN7bc2PI/HjB7wOwB8z+wMr/K/CrzP0A1A9UMVPM/0DdH3xx98z9iOovpLKbzP/Q8z/M8z/M/hD8T/kz48z8UQlcIXSH0P6ZEmxJtSvQ/OEffHH1z9D/ISSMnjZz0P1hMZzGdxfQ/6k6rO63u9D98Ue9FvRf1PwxUM1DNQPU/nFZ3Wt1p9T8uWbtk7ZL1P8Bb/279u/U/UF5DeQ3l9T/gYIeDHQ72P3Jjy40tN/Y/BGYPmD1g9j+UaFOiTYn2PyRrl6xdsvY/tm3btm3b9j9IcB/BfQT3P9hyY8uNLfc/aHWn1Z1W9z/6d+vfrX/3P4x6L+q9qPc/HH1z9M3R9z+sf7f+3fr3Pz6C+wjuI/g/0IQ/E/5M+D9gh4MdDnb4P/CJxycen/g/gowLMi7I+D8Uj088PvH4P6SRk0ZOGvk/NJTXUF5D+T/Glhtbbmz5P1iZX2V+lfk/6Jujb46++T94nud5nuf5PwqhK4SuEPo/nKNvjr45+j8sprOYzmL6P7yo96Lei/o/Tqs7re60+j/grX+3/t36P3Cww8EOB/s/ALMHzB4w+z+StUvWLln7PyS4j+A+gvs/tLrT6k6r+z9EvRf1XtT7P9a/W/9u/fs/aMKfCX8m/D/4xOMTj0/8P4jHJx6fePw/GsprKK+h/D+szK8yv8r8PzzP8zzP8/w/zNE3R98c/T9e1HtR70X9P/DWv1v/bv0/gNkDZg+Y/T8Q3EdwH8H9P6Lei3ov6v0/NOHPhD8T/j/E4xOPTzz+P1TmV5lfZf4/5uibo2+O/j9469+tf7f+PwjuI7iP4P4/mPBnwp8J/z8q86vMrzL/P7z179a/W/8/TPgz4c+E/z/c+nfr363/P279u/Xv1v8/AAAAAAAAAEA=","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"1512"},"selection_policy":{"id":"1511"}},"id":"1478","type":"ColumnDataSource"},{"attributes":{},"id":"1418","type":"LinearScale"},{"attributes":{"axis":{"id":"1455"},"ticker":null},"id":"1458","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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///vPym8/////+8/fdD/////7z/P3v/////vP97o/////+8/6+//////7z/Z9P/////vP0n4/////+8/rfr/////7z9W/P/////vP3z9/////+8/R/7/////7z/T/v/////vPzP//////+8/dP//////7z+h///////vP8D//////+8/1f//////7z/j///////vP+z//////+8/8///////7z/3///////vP/r//////+8//P//////7z/9///////vP/7//////+8/////////7z/////////vPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8=","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"1514"},"selection_policy":{"id":"1513"}},"id":"1479","type":"ColumnDataSource"},{"attributes":{},"id":"1507","type":"BasicTickFormatter"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"1490"}],"change:start":[{"id":"1490"}]},"range_padding":0},"id":"1414","type":"DataRange1d"},{"attributes":{"axis":{"id":"1422"},"ticker":null},"id":"1425","type":"Grid"},{"attributes":{},"id":"1451","type":"LinearScale"},{"attributes":{},"id":"1456","type":"BasicTicker"},{"attributes":{"axis_label":"CDF","formatter":{"id":"1518"},"ticker":{"id":"1460"}},"id":"1459","type":"LinearAxis"}],"root_ids":["1532"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c3bd0118-3f14-44b5-977e-dc14bb900290","root_ids":["1532"],"roots":{"1532":"3b392673-a38b-43dd-9e31-6e3b06460958"}}];
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