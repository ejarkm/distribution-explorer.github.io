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
    
      
      
    
      var element = document.getElementById("a5b37dd6-5889-4730-85a2-d3acdcceeb22");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a5b37dd6-5889-4730-85a2-d3acdcceeb22' but no matching script tag was found.")
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
                    
                  var docs_json = '{"a9f048dc-e3c1-42b3-b9a1-13900b622001":{"roots":{"references":[{"attributes":{"end":1.05,"start":-0.05},"id":"3766","type":"Range1d"},{"attributes":{"axis_label":"PDF","formatter":{"id":"3802"},"ticker":{"id":"3716"}},"id":"3715","type":"LinearAxis"},{"attributes":{},"id":"3709","type":"LinearScale"},{"attributes":{},"id":"3720","type":"WheelZoomTool"},{"attributes":{},"id":"3753","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"3715"},"dimension":1,"ticker":null},"id":"3718","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3725","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"3758"}},"id":"3754","type":"BoxZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"3758","type":"BoxAnnotation"},{"attributes":{"height":10},"id":"3826","type":"Spacer"},{"attributes":{},"id":"3755","type":"SaveTool"},{"attributes":{},"id":"3716","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"3775","type":"Line"},{"attributes":{"toolbar":{"id":"3823"}},"id":"3824","type":"ToolbarBox"},{"attributes":{},"id":"3756","type":"ResetTool"},{"attributes":{},"id":"3707","type":"LinearScale"},{"attributes":{"end":0.5,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"3779"}]},"start":-0.5,"step":0.01,"title":"\\u03bc","value":0},"id":"3781","type":"Slider"},{"attributes":{},"id":"3719","type":"PanTool"},{"attributes":{},"id":"3752","type":"PanTool"},{"attributes":{},"id":"3724","type":"HelpTool"},{"attributes":{"source":{"id":"3767"}},"id":"3778","type":"CDSView"},{"attributes":{"end":10,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"3779"}]},"start":1,"step":0.01,"title":"\\u03bd","value":2},"id":"3780","type":"Slider"},{"attributes":{"axis_label":"y","formatter":{"id":"3804"},"ticker":{"id":"3712"}},"id":"3711","type":"LinearAxis"},{"attributes":{"axis":{"id":"3711"},"ticker":null},"id":"3714","type":"Grid"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"3780"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"3789","type":"CustomJS"},{"attributes":{},"id":"3802","type":"BasicTickFormatter"},{"attributes":{},"id":"3749","type":"BasicTicker"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"3779"}],"change:start":[{"id":"3779"}]},"range_padding":0},"id":"3703","type":"DataRange1d"},{"attributes":{"axis":{"id":"3748"},"dimension":1,"ticker":null},"id":"3751","type":"Grid"},{"attributes":{},"id":"3742","type":"LinearScale"},{"attributes":{"children":[{"id":"3785"},{"id":"3782"},{"id":"3788"}]},"id":"3797","type":"Row"},{"attributes":{"end":1.0,"format":"0[.]00","js_property_callbacks":{"change:value":[{"id":"3779"}]},"start":0.1,"step":0.01,"title":"\\u03c3","value":0.2},"id":"3782","type":"Slider"},{"attributes":{"children":[{"id":"3795"},{"id":"3796"},{"id":"3797"}]},"id":"3798","type":"Column"},{"attributes":{"axis_label":"CDF","formatter":{"id":"3813"},"ticker":{"id":"3749"}},"id":"3748","type":"LinearAxis"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"3781"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"3791","type":"CustomJS"},{"attributes":{"axis_label":"y","formatter":{"id":"3815"},"ticker":{"id":"3745"}},"id":"3744","type":"LinearAxis"},{"attributes":{},"id":"3712","type":"BasicTicker"},{"attributes":{},"id":"3740","type":"LinearScale"},{"attributes":{},"id":"3804","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3719"},{"id":"3720"},{"id":"3721"},{"id":"3722"},{"id":"3723"},{"id":"3724"}]},"id":"3726","type":"Toolbar"},{"attributes":{},"id":"3806","type":"UnionRenderers"},{"attributes":{},"id":"3807","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3752"},{"id":"3753"},{"id":"3754"},{"id":"3755"},{"id":"3756"},{"id":"3757"}]},"id":"3759","type":"Toolbar"},{"attributes":{"text":" "},"id":"3734","type":"Title"},{"attributes":{"axis":{"id":"3744"},"ticker":null},"id":"3747","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]},"y_p":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"3807"},"selection_policy":{"id":"3806"}},"id":"3767","type":"ColumnDataSource"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"3780"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"3790","type":"CustomJS"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"3770","type":"Line"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3789"}]},"value":"1","width":70},"id":"3783","type":"TextInput"},{"attributes":{"children":[{"id":"3783"},{"id":"3780"},{"id":"3786"}]},"id":"3795","type":"Row"},{"attributes":{"data_source":{"id":"3767"},"glyph":{"id":"3775"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3776"},"selection_glyph":null,"view":{"id":"3778"}},"id":"3777","type":"GlyphRenderer"},{"attributes":{},"id":"3745","type":"BasicTicker"},{"attributes":{"children":[{"id":"3822"},{"id":"3824"}]},"id":"3825","type":"Row"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3792"}]},"value":"0.5","width":70},"id":"3787","type":"TextInput"},{"attributes":{},"id":"3813","type":"BasicTickFormatter"},{"attributes":{"args":{"arg1":{"id":"3780"},"arg2":{"id":"3781"},"arg3":{"id":"3782"},"discrete":false,"dist":"student_t","n":400,"source_c":{"id":"3768"},"source_p":{"id":"3767"},"xrange":{"id":"3703"}},"code":"function linspace(start, stop, n) {\\n\\tvar x = [];\\n\\tvar currValue = start;\\n\\tvar step = (stop - start) / (n - 1);\\n\\tfor (var i = 0; i &lt; n; i++) {\\n\\t\\tx.push(currValue);\\n\\t\\tcurrValue += step;\\n\\t}\\n\\treturn x;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_continuous(cdfFun, x_c, arg1, arg2, arg3) {\\n    var y_c = [];\\n    for (var i = 0; i &lt; x_c.length; i ++)\\n        y_c.push(cdfFun(x_c[i], arg1, arg2, arg3));\\n\\n    return y_c;\\n}\\n\\nfunction lngamma(z) {\\n    // Compute log of the Gamma function using Lanczos approx.,\\n    // see https://en.wikipedia.org/wiki/Lanczos_approximation.\\n\\n    if(z &lt; 0) return Number(&#x27;0/0&#x27;);\\n\\n    if (z &lt; 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - lngamma(1-z);\\n\\n    var p = [676.5203681218851,\\n             -1259.1392167224028,\\n             771.32342877765313,\\n             -176.61502916214059,\\n             12.507343278686905,\\n             -0.13857109526572012,\\n             9.9843695780195716e-6,\\n             1.5056327351493116e-7];\\n\\n    z -= 1.0;\\n    var Ag = 0.99999999999980993;\\n    for (var i = 0; i &lt; p.length; i++) {\\n        Ag += p[i] / (z + i + 1);\\n    }\\n    var t = z + p.length - 0.5;\\n\\n    return 0.5 * Math.log(2*Math.PI) + (z + 0.5)*Math.log(t) - t + Math.log(Ag);\\n}\\n\\n\\n\\nfunction log1p(x) {\\n    // log of 1 + x, \\n    // adapted from Andreas Madsen&#x27;s mathfn, Copyright (c) 2013 Andreas Madsen\\n    if (x &lt;= -1.0) {\\n        throw new RangeError(&#x27;Argument must be greater than -1.0&#x27;);\\n    }\\n\\n    // x is large enough that the obvious evaluation is OK\\n    else if (Math.abs(x) &gt; 1e-4) {\\n        return Math.log(1.0 + x);\\n    }\\n\\n    // Use Taylor approx. log(1 + x) = x - x^2/2 with error roughly x^3/3\\n    // Since |x| &lt; 10^-4, |x|^3 &lt; 10^-12, relative error less than 10^-8\\n    else {\\n        return (-0.5*x + 1.0)*x;\\n    }\\n}\\n\\n\\n\\nfunction regularized_incomplete_beta(x, a, b) {\\n    // From Andreas Madsen&#x27;s mathfn, Copyright (c) 2013 Andreas Madsen\\n    // Computes incomplete beta function as a continued fraction\\n    if (x &lt; 0 || x &gt; 1) {\\n        throw new RangeError(&#x27;First argument must be between 0 and 1.&#x27;);\\n    }\\n\\n    // Special cases, there can make trouble otherwise\\n    else if (a === 1 &amp;&amp; b === 1) return x;\\n    else if (x === 0) return 0;\\n    else if (x === 1) return 1;\\n    else if (a === 0) return 1;\\n    else if (b === 0) return 0;\\n\\n    else {\\n        var bt = Math.exp(lngamma(a + b) - lngamma(a) - lngamma(b) + a * Math.log(x) + b * log1p(-x));\\n\\n        // Use continued fraction directly.\\n        if (x &lt; (a + 1) / (a + b + 2)) return bt * betacf(x, a, b) / a;\\n\\n        // else use continued fraction after making the symmetry transformation.\\n        else return 1 - bt * betacf(1 - x, b, a) / b;\\n    }\\n}\\n\\n\\n\\nfunction betacf(x, a, b) {\\n    // From Andreas Madsen&#x27;s mathfn, Copyright (c) 2013 Andreas Madsen\\n    // Computes incomplete beta function as a continues fraction\\n    var fpmin = 1e-30,\\n        m = 1,\\n        m2, aa, c, d, del, h, qab, qam, qap;\\n    // These q&#x27;s will be used in factors that occur in the coefficients\\n    qab = a + b;\\n    qap = a + 1;\\n    qam = a - 1;\\n    c = 1;\\n    d = 1 - qab * x / qap;\\n    if (Math.abs(d) &lt; fpmin) d = fpmin;\\n    d = 1 / d;\\n    h = d;\\n    for (; m &lt;= 100; m++) {\\n        m2 = 2 * m;\\n        aa = m * (b - m) * x / ((qam + m2) * (a + m2));\\n        // One step (the even one) of the recurrence\\n        d = 1 + aa * d;\\n        if (Math.abs(d) &lt; fpmin) d = fpmin;\\n        c = 1 + aa / c;\\n        if (Math.abs(c) &lt; fpmin) c = fpmin;\\n        d = 1 / d;\\n        h *= d * c;\\n        aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));\\n        // Next step of the recurrence (the odd one)\\n        d = 1 + aa * d;\\n        if (Math.abs(d) &lt; fpmin) d = fpmin;\\n        c = 1 + aa / c;\\n        if (Math.abs(c) &lt; fpmin) c = fpmin;\\n        d = 1 / d;\\n        del = d * c;\\n        h *= del;\\n        if (Math.abs(del - 1.0) &lt; 3e-7) break;\\n    }\\n    return h;\\n}\\n\\n\\n\\nfunction probFun(x, nu, mu, sigma) {\\n    var lnprob;\\n\\n    lnprob = lngamma((nu+1)/2) - lngamma(nu/2) - Math.log(Math.PI * nu) / 2 - Math.log(sigma)\\n             - (nu+1)/2 * log1p(Math.pow(x - mu, 2) / nu / Math.pow(sigma, 2));\\n\\n    return Math.exp(lnprob);\\n}\\n\\nfunction cdfFun(x, nu, mu, sigma) {\\n    var y = (x - mu) / sigma;\\n\\n    if (y &gt;= 0) {\\n        return 1 - regularized_incomplete_beta(nu / (y**2 + nu), 0.5*nu, 0.5) / 2;\\n    }\\n    else {\\n        return regularized_incomplete_beta(nu / (y**2 + nu), 0.5*nu, 0.5) / 2;        \\n    }\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points based on support\\n// We&#x27;re not doing this now because we want to allow zooming\\n// JS codes now make anything outside of support NaN.\\n// if (dist == &#x27;lognormal&#x27; \\n//     || dist == &#x27;gamma&#x27; \\n//     || dist == &#x27;exponential&#x27; \\n//     || dist == &#x27;inv_gamma&#x27;\\n//     || dist == &#x27;weibull&#x27;) {\\n// \\txRangeMin = 0.0;\\n// }\\n// else if (dist == &#x27;beta&#x27;) { \\n//     xRangeMin = 0.0;\\n//     xRangeMax = 1.0;\\n// }\\n\\n// x-values to evaluate PDF and CDF\\nx_p = linspace(xRangeMin, xRangeMax, n);\\nx_c = x_p;\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PDF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_continuous(cdfFun, \\n    x_c, arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"3779","type":"CustomJS"},{"attributes":{"children":[{"id":"3784"},{"id":"3781"},{"id":"3787"}]},"id":"3796","type":"Row"},{"attributes":{},"id":"3815","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"3798"},{"id":"3826"},{"id":"3825"}]},"id":"3827","type":"Column"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3791"}]},"value":"-0.5","width":70},"id":"3784","type":"TextInput"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"3744"}],"border_fill_alpha":0,"center":[{"id":"3747"},{"id":"3751"}],"frame_height":175,"frame_width":300,"left":[{"id":"3748"}],"renderers":[{"id":"3772"}],"title":{"id":"3734"},"toolbar":{"id":"3759"},"toolbar_location":null,"x_range":{"id":"3703"},"x_scale":{"id":"3740"},"y_range":{"id":"3766"},"y_scale":{"id":"3742"}},"id":"3733","subtype":"Figure","type":"Plot"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3790"}]},"value":"10","width":70},"id":"3786","type":"TextInput"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"3771","type":"Line"},{"attributes":{"data_source":{"id":"3768"},"glyph":{"id":"3770"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3771"},"selection_glyph":null,"view":{"id":"3773"}},"id":"3772","type":"GlyphRenderer"},{"attributes":{},"id":"3809","type":"Selection"},{"attributes":{"source":{"id":"3768"}},"id":"3773","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_p"}},"id":"3776","type":"Line"},{"attributes":{"args":{"max_value":"Infinity","min_value":"-Infinity","slider":{"id":"3781"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"3792","type":"CustomJS"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"3711"}],"border_fill_alpha":0,"center":[{"id":"3714"},{"id":"3718"}],"frame_height":175,"frame_width":300,"left":[{"id":"3715"}],"renderers":[{"id":"3777"}],"title":{"id":"3701"},"toolbar":{"id":"3726"},"toolbar_location":null,"x_range":{"id":"3703"},"x_scale":{"id":"3707"},"y_range":{"id":"3705"},"y_scale":{"id":"3709"}},"id":"3700","subtype":"Figure","type":"Plot"},{"attributes":{"children":[[{"id":"3700"},0,0],[{"id":"3799"},0,1],[{"id":"3733"},0,2]]},"id":"3822","type":"GridBox"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3794"}]},"value":"1.0","width":70},"id":"3788","type":"TextInput"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAMBv/bv179b/v976d+vfrf+/Tfgz4c+E/7+89e/Wv1v/vyvzq8yvMv+/mvBnwp8J/78J7iO4j+D+v3jr361/t/6/5+ibo2+O/r9W5leZX2X+v8XjE49PPP6/NOHPhD8T/r+j3ot6L+r9vxLcR3Afwf2/gdkDZg+Y/b/w1r9b/279v1/Ue1HvRf2/ztE3R98c/b89z/M8z/P8v6zMrzK/yvy/G8prKK+h/L+Kxycen3j8v/nE4xOPT/y/aMKfCX8m/L/Xv1v/bv37v0a9F/Ve1Pu/tbrT6k6r+78kuI/gPoL7v5O1S9YuWfu/ArMHzB4w+79xsMPBDgf7v+Ctf7f+3fq/T6s7re60+r++qPei3ov6vy2ms5jOYvq/nKNvjr45+r8LoSuErhD6v3qe53me5/m/6Zujb46++b9YmV9lfpX5v8eWG1tubPm/NpTXUF5D+b+lkZNGThr5vxSPTzw+8fi/g4wLMi7I+L/yiccnHp/4v2GHgx0Odvi/0IQ/E/5M+L8/gvsI7iP4v65/t/7d+ve/HX1z9M3R97+Mei/qvaj3v/t369+tf/e/anWn1Z1W97/ZcmPLjS33v0hwH8F9BPe/t23btm3b9r8ma5esXbL2v5VoU6JNifa/BGYPmD1g9r9zY8uNLTf2v+Jgh4MdDva/UV5DeQ3l9b/AW/9u/bv1vy9Zu2TtkvW/nlZ3Wt1p9b8NVDNQzUD1v3xR70W9F/W/606rO63u9L9aTGcxncX0v8lJIyeNnPS/OEffHH1z9L+nRJsSbUr0vxZCVwhdIfS/hT8T/kz487/0PM/zPM/zv2M6i+kspvO/0jdH3xx9879BNQPVDFTzv7Ayv8r8KvO/HzB7wOwB87+OLTe23Njyv/0q86vMr/K/bCivobyG8r/bJWuXrF3yv0ojJ42cNPK/uSDjgowL8r8oHp94fOLxv5cbW25sufG/BhkXZFyQ8b91FtNZTGfxv+QTj088PvG/UxFLRSwV8b/CDgc7HOzwvzEMwzAMw/C/oAl/JvyZ8L8PBzsc7HDwv34E9xHcR/C/7QGzB8we8L+4/t36d+vvv5b5VeZXme+/dPTN0TdH779S70W9F/XuvzDqvaj3ou6/DuU1lNdQ7r/s361/t/7tv8raJWuXrO2/qNWdVnda7b+G0BVCVwjtv2TLjS03tuy/QsYFGRdk7L8gwX0E9xHsv/679e/Wv+u/3LZt27Zt67+6seXGlhvrv5isXbJ2yeq/dqfVnVZ36r9Uok2JNiXqvzKdxXQW0+m/EJg9YPaA6b/ukrVL1i7pv8yNLTe23Oi/qoilIpaK6L+Igx0Odjjov2Z+lflV5ue/RHkN5TWU578idIXQFULnvwBv/bv17+a/3ml1p9Wd5r+8ZO2StUvmv5pfZX6V+eW/eFrdaXWn5b9WVVVVVVXlvzRQzUA1A+W/EktFLBWx5L/wRb0X9V7kv85ANQPVDOS/rDut7rS647+KNiXalGjjv2gxncV0FuO/RiwVsVTE4r8kJ42cNHLivwIiBYgUIOK/4Bx9c/TN4b++F/Ve1Hvhv5wSbUq0KeG/eg3lNZTX4L9YCF0hdIXgvzYD1QxUM+C/KPyZ8GfC37/k8YnHJx7fv6DneZ7ned6/XN1pdafV3b8Y01lMZzHdv9TISSMnjdy/kL45+ubo279MtCnRpkTbvwiqGahmoNq/xJ8Jfyb82b+AlflV5lfZvzyL6Syms9i/+IDZA2YP2L+0dsnaJWvXv3BsubHlxta/LGKpiKUi1r/oV5lfZX7Vv6RNiTYl2tS/YEN5DeU11L8cOWnkpJHTv9guWbtk7dK/lCRJkiRJ0r9QGjlp5KTRvwwQKUCkANG/yAUZF2Rc0L8I9xHcR3DPv4Di8YnHJ86/+M3RN0ffzL9wubHlxpbLv+ikkZNGTsq/YJBxQcYFyb/Ye1HvRb3Hv1BnMZ3FdMa/yFIRS0Usxb9APvH4xOPDv7gp0aZEm8K/MBWxVMRSwb+oAJECRArAv0DY4WCHg72/MK+hvIbyur8ghmEYhmG4vxBdIXSF0LW/ADThz4Q/s7/wCqErhK6wv8DDwQ4HO6y/oHFBxgUZp7+AH8F9BPehv8CagWoGqpm/AO0BswfMjr8ASQEiBYh0vwBIASIFiHQ/AOwBswfMjj+AmoFqBqqZP4AfwX0E96E/gHFBxgUZpz+Aw8EOBzusP+AKoSuErrA/ADThz4Q/sz8AXSF0hdC1PwCGYRiGYbg/IK+hvIbyuj9A2OFgh4O9P6AAkQJECsA/IBWxVMRSwT+wKdGmRJvCP0A+8fjE48M/wFIRS0UsxT9AZzGdxXTGP9B7Ue9Fvcc/YJBxQcYFyT/gpJGTRk7KP2C5seXGlss/8M3RN0ffzD+A4vGJxyfOPwD3EdxHcM8/wAUZF2Rc0D8IEClApADRP1AaOWnkpNE/kCRJkiRJ0j/QLlm7ZO3SPxg5aeSkkdM/YEN5DeU11D+gTYk2JdrUP+BXmV9lftU/KGKpiKUi1j9wbLmx5cbWP7B2ydola9c/8IDZA2YP2D84i+ksprPYP4CV+VXmV9k/wJ8Jfyb82T8AqhmoZqDaP0i0KdGmRNs/kL45+ubo2z/QyEkjJ43cPxDTWUxnMd0/WN1pdafV3T+g53me53neP+DxiccnHt8/IPyZ8GfC3z80A9UMVDPgP1gIXSF0heA/eA3lNZTX4D+YEm1KtCnhP7wX9V7Ue+E/4Bx9c/TN4T8AIgWIFCDiPyAnjZw0cuI/RCwVsVTE4j9oMZ3FdBbjP4g2JdqUaOM/qDut7rS64z/MQDUD1QzkP/BFvRf1XuQ/EEtFLBWx5D8wUM1ANQPlP1RVVVVVVeU/eFrdaXWn5T+YX2V+lfnlP7hk7ZK1S+Y/3Gl1p9Wd5j8Ab/279e/mPyB0hdAVQuc/QHkN5TWU5z9kfpX5VebnP4iDHQ52OOg/qIilIpaK6D/IjS03ttzoP+yStUvWLuk/EJg9YPaA6T8wncV0FtPpP1CiTYk2Jeo/dKfVnVZ36j+YrF2ydsnqP7ix5caWG+s/2LZt27Zt6z/8u/Xv1r/rPyDBfQT3Eew/QMYFGRdk7D9gy40tN7bsP4TQFUJXCO0/qNWdVnda7T/I2iVrl6ztP+jfrX+3/u0/DOU1lNdQ7j8w6r2o96LuP1DvRb0X9e4/cPTN0TdH7z+U+VXmV5nvP7j+3fp36+8/7AGzB8we8D98BPcR3EfwPw4HOxzscPA/oAl/JvyZ8D8wDMMwDMPwP8AOBzsc7PA/UhFLRSwV8T/kE49PPD7xP3QW01lMZ/E/BBkXZFyQ8T+WG1tubLnxPygen3h84vE/uCDjgowL8j9IIyeNnDTyP9ola5esXfI/bCivobyG8j/8KvOrzK/yP4wtN7bc2PI/HjB7wOwB8z+wMr/K/CrzP0A1A9UMVPM/0DdH3xx98z9iOovpLKbzP/Q8z/M8z/M/hD8T/kz48z8UQlcIXSH0P6ZEmxJtSvQ/OEffHH1z9D/ISSMnjZz0P1hMZzGdxfQ/6k6rO63u9D98Ue9FvRf1PwxUM1DNQPU/nFZ3Wt1p9T8uWbtk7ZL1P8Bb/279u/U/UF5DeQ3l9T/gYIeDHQ72P3Jjy40tN/Y/BGYPmD1g9j+UaFOiTYn2PyRrl6xdsvY/tm3btm3b9j9IcB/BfQT3P9hyY8uNLfc/aHWn1Z1W9z/6d+vfrX/3P4x6L+q9qPc/HH1z9M3R9z+sf7f+3fr3Pz6C+wjuI/g/0IQ/E/5M+D9gh4MdDnb4P/CJxycen/g/gowLMi7I+D8Uj088PvH4P6SRk0ZOGvk/NJTXUF5D+T/Glhtbbmz5P1iZX2V+lfk/6Jujb46++T94nud5nuf5PwqhK4SuEPo/nKNvjr45+j8sprOYzmL6P7yo96Lei/o/Tqs7re60+j/grX+3/t36P3Cww8EOB/s/ALMHzB4w+z+StUvWLln7PyS4j+A+gvs/tLrT6k6r+z9EvRf1XtT7P9a/W/9u/fs/aMKfCX8m/D/4xOMTj0/8P4jHJx6fePw/GsprKK+h/D+szK8yv8r8PzzP8zzP8/w/zNE3R98c/T9e1HtR70X9P/DWv1v/bv0/gNkDZg+Y/T8Q3EdwH8H9P6Lei3ov6v0/NOHPhD8T/j/E4xOPTzz+P1TmV5lfZf4/5uibo2+O/j9469+tf7f+PwjuI7iP4P4/mPBnwp8J/z8q86vMrzL/P7z179a/W/8/TPgz4c+E/z/c+nfr363/P279u/Xv1v8/AAAAAAAAAEA=","dtype":"float64","order":"little","shape":[400]},"y_c":{"__ndarray__":"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","dtype":"float64","order":"little","shape":[400]}},"selected":{"id":"3809"},"selection_policy":{"id":"3808"}},"id":"3768","type":"ColumnDataSource"},{"attributes":{},"id":"3705","type":"DataRange1d"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"3793"}]},"value":"0.1","width":70},"id":"3785","type":"TextInput"},{"attributes":{"overlay":{"id":"3725"}},"id":"3721","type":"BoxZoomTool"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"3782"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"3793","type":"CustomJS"},{"attributes":{},"id":"3722","type":"SaveTool"},{"attributes":{"args":{"max_value":"Infinity","min_value":"0","slider":{"id":"3782"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"3794","type":"CustomJS"},{"attributes":{},"id":"3808","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"3726"},{"id":"3759"}],"tools":[{"id":"3719"},{"id":"3720"},{"id":"3721"},{"id":"3722"},{"id":"3723"},{"id":"3724"},{"id":"3752"},{"id":"3753"},{"id":"3754"},{"id":"3755"},{"id":"3756"},{"id":"3757"}]},"id":"3823","type":"ProxyToolbar"},{"attributes":{},"id":"3723","type":"ResetTool"},{"attributes":{},"id":"3757","type":"HelpTool"},{"attributes":{"width":30},"id":"3799","type":"Spacer"},{"attributes":{"text":"Student-t"},"id":"3701","type":"Title"}],"root_ids":["3827"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"a9f048dc-e3c1-42b3-b9a1-13900b622001","root_ids":["3827"],"roots":{"3827":"a5b37dd6-5889-4730-85a2-d3acdcceeb22"}}];
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