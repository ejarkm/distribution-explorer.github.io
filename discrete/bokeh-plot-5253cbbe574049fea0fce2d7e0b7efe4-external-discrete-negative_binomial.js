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
    
      
      
    
      var element = document.getElementById("e954f6d9-cc53-4641-a055-765eab4f6515");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e954f6d9-cc53-4641-a055-765eab4f6515' but no matching script tag was found.")
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
                    
                  var docs_json = '{"560a324e-0e37-4231-b49d-b683528d0a8a":{"defs":[],"roots":{"references":[{"attributes":{},"id":"5986","type":"Selection"},{"attributes":{},"id":"5996","type":"AllLabels"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"5965"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5973","type":"CustomJS"},{"attributes":{},"id":"5987","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"5879"},0,0],[{"id":"5977"},0,1],[{"id":"5912"},0,2]]},"id":"6004","type":"GridBox"},{"attributes":{},"id":"5997","type":"BasicTickFormatter"},{"attributes":{"toolbar":{"id":"6005"}},"id":"6006","type":"ToolbarBox"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5973"}]},"value":"20","width":70},"id":"5969","type":"TextInput"},{"attributes":{"width":30},"id":"5977","type":"Spacer"},{"attributes":{"source":{"id":"5947"}},"id":"5952","type":"CDSView"},{"attributes":{"data":{"x":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"y_p":{"__ndarray__":"FZ8ztVy42T85r1Xs927VPzivVez3bsU/Soh7YqSrsD9hYE+DMDqWP0ENLDc6rHo/Jyu/WeuiXT+MgpeCMww/P4WCl4IzDB8/PWGbydLl/T7Ua/eIkefbPghisjYnXrk+bqxlopSMlj40ICSUgahzPtytjKOT2VA+0f1T2yZ1LD42/sW29bYHPgGGGy2dh+M9oFU24YTTvz0kGK7ZMK+ZPZFGixQnjHQ9oN7DbblOUD0c8mp+WrIpPZ9vPdJGHAQ9xHSYKm5I3zy6fw+mLzG4PAJ2qUT9m5I8YO2qTAV9bDyOX8tSlrRFPOsBQo5XdyA8nnTEo9nh+DuET1fIgrrSO2n3gizEF6w7vuRh6Kn/hDvaQPH/ykpfO38hVPHfPjc7Om4FLg44ETstgG10zXDpOgxs1zrovsI67/FWvc2OmzoroB3PhTV0OtTw00ECk0068vxpxgmYJTrfVCugXXj/Obfgk9Es49Y5wN8qvFOdsDkl4Cf+PRSIOcnory89a2E5EjTFfR8pOTkHFHSLniQSObCX5HZAIOo4","dtype":"float64","order":"little","shape":[51]}},"selected":{"id":"5986"},"selection_policy":{"id":"5987"}},"id":"5946","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"5905"},{"id":"5938"}],"tools":[{"id":"5898"},{"id":"5899"},{"id":"5900"},{"id":"5901"},{"id":"5902"},{"id":"5903"},{"id":"5931"},{"id":"5932"},{"id":"5933"},{"id":"5934"},{"id":"5935"},{"id":"5936"}]},"id":"6005","type":"ProxyToolbar"},{"attributes":{},"id":"5921","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5950","type":"Line"},{"attributes":{"children":[{"id":"5967"},{"id":"5965"},{"id":"5969"}]},"id":"5975","type":"Row"},{"attributes":{"data":{"x":{"__ndarray__":"ZmZmZmZm7r8AAAAAAAAAAAAAAAAAAAAAAAAAAAAA8D8AAAAAAADwPwAAAAAAAABAAAAAAAAAAEAAAAAAAAAIQAAAAAAAAAhAAAAAAAAAEEAAAAAAAAAQQAAAAAAAABRAAAAAAAAAFEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAHEAAAAAAAAAcQAAAAAAAACBAAAAAAAAAIEAAAAAAAAAiQAAAAAAAACJAAAAAAAAAJEAAAAAAAAAkQAAAAAAAACZAAAAAAAAAJkAAAAAAAAAoQAAAAAAAAChAAAAAAAAAKkAAAAAAAAAqQAAAAAAAACxAAAAAAAAALEAAAAAAAAAuQAAAAAAAAC5AAAAAAAAAMEAAAAAAAAAwQAAAAAAAADFAAAAAAAAAMUAAAAAAAAAyQAAAAAAAADJAAAAAAAAAM0AAAAAAAAAzQAAAAAAAADRAAAAAAAAANEAAAAAAAAA1QAAAAAAAADVAAAAAAAAANkAAAAAAAAA2QAAAAAAAADdAAAAAAAAAN0AAAAAAAAA4QAAAAAAAADhAAAAAAAAAOUAAAAAAAAA5QAAAAAAAADpAAAAAAAAAOkAAAAAAAAA7QAAAAAAAADtAAAAAAAAAPEAAAAAAAAA8QAAAAAAAAD1AAAAAAAAAPUAAAAAAAAA+QAAAAAAAAD5AAAAAAAAAP0AAAAAAAAA/QAAAAAAAAEBAAAAAAAAAQEAAAAAAAIBAQAAAAAAAgEBAAAAAAAAAQUAAAAAAAABBQAAAAAAAgEFAAAAAAACAQUAAAAAAAABCQAAAAAAAAEJAAAAAAACAQkAAAAAAAIBCQAAAAAAAAENAAAAAAAAAQ0AAAAAAAIBDQAAAAAAAgENAAAAAAAAAREAAAAAAAABEQAAAAAAAgERAAAAAAACAREAAAAAAAABFQAAAAAAAAEVAAAAAAACARUAAAAAAAIBFQAAAAAAAAEZAAAAAAAAARkAAAAAAAIBGQAAAAAAAgEZAAAAAAAAAR0AAAAAAAABHQAAAAAAAgEdAAAAAAACAR0AAAAAAAABIQAAAAAAAAEhAAAAAAACASEAAAAAAAIBIQAAAAAAAAElAAAAAAAAASUCamZmZmXlJQA==","dtype":"float64","order":"little","shape":[104]},"y_c":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAABWfM7VcuNk/FZ8ztVy42T8op8RQqpPnPyinxFCqk+c/9xLaS2jv7D/3EtpLaO/sPwCEKdjcBO8/AIQp2NwE7z8D/0NcrrbvPwP/Q1yutu8/Hley0Abs7z8eV7LQBuzvP7M2X0bY+u8/szZfRtj67z+jic/Muf7vP6OJz8y5/u8/X55rLrL/7z9fnmsusv/vP5YxEfrt/+8/ljER+u3/7z8S9tnt+//vPxL22e37/+8/6NyeGf//7z/o3J4Z///vP/uBA87//+8/+4EDzv//7z8khVT1///vPySFVPX//+8/9U7B/f//7z/1TsH9///vP2OhiP///+8/Y6GI////7z86fef////vPzp95////+8/1wT7////7z/XBPv////vP0j//v///+8/SP/+////7z/BzP/////vP8HM/////+8/2vX/////7z/a9f/////vPwH+/////+8/Af7/////7z+c///////vP5z//////+8/7f//////7z/t///////vP/z//////+8//P//////7z/////////vP////////+8/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPwAAAAAAAPA/AAAAAAAA8D8AAAAAAADwPw==","dtype":"float64","order":"little","shape":[104]}},"selected":{"id":"5988"},"selection_policy":{"id":"5989"}},"id":"5947","type":"ColumnDataSource"},{"attributes":{},"id":"5924","type":"BasicTicker"},{"attributes":{},"id":"5919","type":"LinearScale"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5971"}]},"value":"20","width":70},"id":"5968","type":"TextInput"},{"attributes":{"axis":{"id":"5923"},"ticker":null},"id":"5926","type":"Grid"},{"attributes":{"overlay":{"id":"5904"}},"id":"5900","type":"BoxZoomTool"},{"attributes":{"axis_label":"y","formatter":{"id":"5997"},"major_label_policy":{"id":"5996"},"ticker":{"id":"5924"}},"id":"5923","type":"LinearAxis"},{"attributes":{},"id":"5932","type":"WheelZoomTool"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5970"}]},"value":"0","width":70},"id":"5966","type":"TextInput"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"5965"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5972","type":"CustomJS"},{"attributes":{"axis_label":"CDF","formatter":{"id":"5994"},"major_label_policy":{"id":"5993"},"ticker":{"id":"5928"}},"id":"5927","type":"LinearAxis"},{"attributes":{"axis":{"id":"5927"},"dimension":1,"ticker":null},"id":"5930","type":"Grid"},{"attributes":{},"id":"5928","type":"BasicTicker"},{"attributes":{},"id":"5988","type":"Selection"},{"attributes":{},"id":"5936","type":"HelpTool"},{"attributes":{},"id":"5931","type":"PanTool"},{"attributes":{},"id":"5989","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"5937"}},"id":"5933","type":"BoxZoomTool"},{"attributes":{},"id":"5980","type":"AllLabels"},{"attributes":{},"id":"5934","type":"SaveTool"},{"attributes":{},"id":"5935","type":"ResetTool"},{"attributes":{},"id":"5981","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"5946"},"glyph":{"id":"5959"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5960"},"view":{"id":"5962"}},"id":"5961","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5946"}},"id":"5962","type":"CDSView"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5959","type":"Segment"},{"attributes":{"args":{"arg1":{"id":"5964"},"arg2":{"id":"5965"},"arg3":{"id":"5964"},"discrete":true,"dist":"negative_binomial","n":400,"source_c":{"id":"5947"},"source_p":{"id":"5946"},"xrange":{"id":"5882"}},"code":"function arange(start, stop) {\\n\\tvar x = [];\\n\\tfor (var i = start; i &lt; stop; i++) x.push(i);\\n\\treturn x;\\n}\\n\\nfunction discrete_cdf(cumsum, y_p) {\\n    var y_c = [];\\n\\n    y_c.push(cumsum, cumsum);\\n    for (var i = 0; i &lt; y_p.length; i++) {\\n        if (!isNaN(y_p[i])) cumsum += y_p[i];\\n        y_c.push(cumsum, cumsum);\\n    }\\n\\n    return y_c;\\n}\\n\\nfunction update_y_p(probFun, x_p, arg1, arg2, arg3) {\\n    // Compute PMF/PDF\\n    var y_p = [];\\n    for (var i = 0; i &lt; x_p.length; i++) {\\n      y_p.push(probFun(x_p[i], arg1, arg2, arg3));\\n    }\\n\\n    return y_p;\\n}\\n\\nfunction update_y_c_discrete(probFun, x_p, y_p, arg1, arg2, arg3) {\\n    // Compute CDF\\n    var cumsum = 0.0;\\n    var summand = 0.0;\\n    for (var i = 0; i &lt; x_p[0]; i++) {\\n        summand = probFun(x_p[i], arg1, arg2, arg3);\\n        if (!isNaN(summand)) cumsum += summand;\\n    }\\n\\n    y_c = discrete_cdf(cumsum, y_p);\\n    return y_c;\\n}\\n\\nfunction lngamma(z) {\\n    // Compute log of the Gamma function using Lanczos approx.,\\n    // see https://en.wikipedia.org/wiki/Lanczos_approximation.\\n\\n    if(z &lt; 0) return Number(&#x27;0/0&#x27;);\\n\\n    if (z &lt; 0.5) return Math.log(Math.PI) - Math.log(Math.sin(Math.PI * z)) - lngamma(1-z);\\n\\n    var p = [676.5203681218851,\\n             -1259.1392167224028,\\n             771.32342877765313,\\n             -176.61502916214059,\\n             12.507343278686905,\\n             -0.13857109526572012,\\n             9.9843695780195716e-6,\\n             1.5056327351493116e-7];\\n\\n    z -= 1.0;\\n    var Ag = 0.99999999999980993;\\n    for (var i = 0; i &lt; p.length; i++) {\\n        Ag += p[i] / (z + i + 1);\\n    }\\n    var t = z + p.length - 0.5;\\n\\n    return 0.5 * Math.log(2*Math.PI) + (z + 0.5)*Math.log(t) - t + Math.log(Ag);\\n}\\n\\n\\n\\nfunction lnfactorial(n) {\\n  if (n &gt; 254) { // Use Stirling&#x27;s approximation\\n    var x = n + 1;\\n    return (x - 0.5)*Math.log(x) - x + 0.5*Math.log(2*Math.PI) + 1.0/(12.0*x);\\n  }\\n  else { // Look it up\\n    const lnfact = [0.000000000000000,\\n                    0.000000000000000,\\n                    0.693147180559945,\\n                    1.791759469228055,\\n                    3.178053830347946,\\n                    4.787491742782046,\\n                    6.579251212010101,\\n                    8.525161361065415,\\n                    10.604602902745251,\\n                    12.801827480081469,\\n                    15.104412573075516,\\n                    17.502307845873887,\\n                    19.987214495661885,\\n                    22.552163853123421,\\n                    25.191221182738683,\\n                    27.899271383840894,\\n                    30.671860106080675,\\n                    33.505073450136891,\\n                    36.395445208033053,\\n                    39.339884187199495,\\n                    42.335616460753485,\\n                    45.380138898476908,\\n                    48.471181351835227,\\n                    51.606675567764377,\\n                    54.784729398112319,\\n                    58.003605222980518,\\n                    61.261701761002001,\\n                    64.557538627006323,\\n                    67.889743137181526,\\n                    71.257038967168000,\\n                    74.658236348830158,\\n                    78.092223553315307,\\n                    81.557959456115029,\\n                    85.054467017581516,\\n                    88.580827542197682,\\n                    92.136175603687079,\\n                    95.719694542143202,\\n                    99.330612454787428,\\n                    102.968198614513810,\\n                    106.631760260643450,\\n                    110.320639714757390,\\n                    114.034211781461690,\\n                    117.771881399745060,\\n                    121.533081515438640,\\n                    125.317271149356880,\\n                    129.123933639127240,\\n                    132.952575035616290,\\n                    136.802722637326350,\\n                    140.673923648234250,\\n                    144.565743946344900,\\n                    148.477766951773020,\\n                    152.409592584497350,\\n                    156.360836303078800,\\n                    160.331128216630930,\\n                    164.320112263195170,\\n                    168.327445448427650,\\n                    172.352797139162820,\\n                    176.395848406997370,\\n                    180.456291417543780,\\n                    184.533828861449510,\\n                    188.628173423671600,\\n                    192.739047287844900,\\n                    196.866181672889980,\\n                    201.009316399281570,\\n                    205.168199482641200,\\n                    209.342586752536820,\\n                    213.532241494563270,\\n                    217.736934113954250,\\n                    221.956441819130360,\\n                    226.190548323727570,\\n                    230.439043565776930,\\n                    234.701723442818260,\\n                    238.978389561834350,\\n                    243.268849002982730,\\n                    247.572914096186910,\\n                    251.890402209723190,\\n                    256.221135550009480,\\n                    260.564940971863220,\\n                    264.921649798552780,\\n                    269.291097651019810,\\n                    273.673124285693690,\\n                    278.067573440366120,\\n                    282.474292687630400,\\n                    286.893133295426990,\\n                    291.323950094270290,\\n                    295.766601350760600,\\n                    300.220948647014100,\\n                    304.686856765668720,\\n                    309.164193580146900,\\n                    313.652829949878990,\\n                    318.152639620209300,\\n                    322.663499126726210,\\n                    327.185287703775200,\\n                    331.717887196928470,\\n                    336.261181979198450,\\n                    340.815058870798960,\\n                    345.379407062266860,\\n                    349.954118040770250,\\n                    354.539085519440790,\\n                    359.134205369575340,\\n                    363.739375555563470,\\n                    368.354496072404690,\\n                    372.979468885689020,\\n                    377.614197873918670,\\n                    382.258588773060010,\\n                    386.912549123217560,\\n                    391.575988217329610,\\n                    396.248817051791490,\\n                    400.930948278915760,\\n                    405.622296161144900,\\n                    410.322776526937280,\\n                    415.032306728249580,\\n                    419.750805599544780,\\n                    424.478193418257090,\\n                    429.214391866651570,\\n                    433.959323995014870,\\n                    438.712914186121170,\\n                    443.475088120918940,\\n                    448.245772745384610,\\n                    453.024896238496130,\\n                    457.812387981278110,\\n                    462.608178526874890,\\n                    467.412199571608080,\\n                    472.224383926980520,\\n                    477.044665492585580,\\n                    481.872979229887900,\\n                    486.709261136839360,\\n                    491.553448223298010,\\n                    496.405478487217580,\\n                    501.265290891579240,\\n                    506.132825342034830,\\n                    511.008022665236070,\\n                    515.890824587822520,\\n                    520.781173716044240,\\n                    525.679013515995050,\\n                    530.584288294433580,\\n                    535.496943180169520,\\n                    540.416924105997740,\\n                    545.344177791154950,\\n                    550.278651724285620,\\n                    555.220294146894960,\\n                    560.169054037273100,\\n                    565.124881094874350,\\n                    570.087725725134190,\\n                    575.057539024710200,\\n                    580.034272767130800,\\n                    585.017879388839220,\\n                    590.008311975617860,\\n                    595.005524249382010,\\n                    600.009470555327430,\\n                    605.020105849423770,\\n                    610.037385686238740,\\n                    615.061266207084940,\\n                    620.091704128477430,\\n                    625.128656730891070,\\n                    630.172081847810200,\\n                    635.221937855059760,\\n                    640.278183660408100,\\n                    645.340778693435030,\\n                    650.409682895655240,\\n                    655.484856710889060,\\n                    660.566261075873510,\\n                    665.653857411105950,\\n                    670.747607611912710,\\n                    675.847474039736880,\\n                    680.953419513637530,\\n                    686.065407301994010,\\n                    691.183401114410800,\\n                    696.307365093814040,\\n                    701.437263808737160,\\n                    706.573062245787470,\\n                    711.714725802289990,\\n                    716.862220279103440,\\n                    722.015511873601330,\\n                    727.174567172815840,\\n                    732.339353146739310,\\n                    737.509837141777440,\\n                    742.685986874351220,\\n                    747.867770424643370,\\n                    753.055156230484160,\\n                    758.248113081374300,\\n                    763.446610112640200,\\n                    768.650616799717000,\\n                    773.860102952558460,\\n                    779.075038710167410,\\n                    784.295394535245690,\\n                    789.521141208958970,\\n                    794.752249825813460,\\n                    799.988691788643450,\\n                    805.230438803703120,\\n                    810.477462875863580,\\n                    815.729736303910160,\\n                    820.987231675937890,\\n                    826.249921864842800,\\n                    831.517780023906310,\\n                    836.790779582469900,\\n                    842.068894241700490,\\n                    847.352097970438420,\\n                    852.640365001133090,\\n                    857.933669825857460,\\n                    863.231987192405430,\\n                    868.535292100464630,\\n                    873.843559797865740,\\n                    879.156765776907600,\\n                    884.474885770751830,\\n                    889.797895749890240,\\n                    895.125771918679900,\\n                    900.458490711945270,\\n                    905.796028791646340,\\n                    911.138363043611210,\\n                    916.485470574328820,\\n                    921.837328707804890,\\n                    927.193914982476710,\\n                    932.555207148186240,\\n                    937.921183163208070,\\n                    943.291821191335660,\\n                    948.667099599019820,\\n                    954.046996952560450,\\n                    959.431492015349480,\\n                    964.820563745165940,\\n                    970.214191291518320,\\n                    975.612353993036210,\\n                    981.015031374908400,\\n                    986.422203146368590,\\n                    991.833849198223450,\\n                    997.249949600427840,\\n                    1002.670484599700300,\\n                    1008.095434617181700,\\n                    1013.524780246136200,\\n                    1018.958502249690200,\\n                    1024.396581558613400,\\n                    1029.838999269135500,\\n                    1035.285736640801600,\\n                    1040.736775094367400,\\n                    1046.192096209724900,\\n                    1051.651681723869200,\\n                    1057.115513528895000,\\n                    1062.583573670030100,\\n                    1068.055844343701400,\\n                    1073.532307895632800,\\n                    1079.012946818975000,\\n                    1084.497743752465600,\\n                    1089.986681478622400,\\n                    1095.479742921962700,\\n                    1100.976911147256000,\\n                    1106.478169357800900,\\n                    1111.983500893733000,\\n                    1117.492889230361000,\\n                    1123.006317976526100,\\n                    1128.523770872990800,\\n                    1134.045231790853000,\\n                    1139.570684729984800,\\n                    1145.100113817496100,\\n                    1150.633503306223700,\\n                    1156.170837573242400];\\n    return lnfact[n];\\n  }\\n}\\n\\n\\n\\nfunction probFun(y, alpha, beta, {}) {\\n    if (y &lt; 0) return NaN;\\n\\n    return Math.exp(lngamma(y + alpha)\\n                    - lngamma(alpha)\\n                    - lnfactorial(y)\\n                    + alpha * Math.log(beta / (1 + beta))\\n                    - y * Math.log(1 + beta));\\n}\\n\\n// Extract data from sources\\nvar data_p = source_p.data;\\nvar data_c = source_c.data;\\nvar x_p = data_p[&#x27;x&#x27;];\\nvar y_p = data_p[&#x27;y_p&#x27;];\\nvar x_c = data_c[&#x27;x&#x27;];\\nvar y_c = data_c[&#x27;y_c&#x27;];\\nvar xRangeMin = xrange.start;\\nvar xRangeMax = xrange.end;\\n\\n// Make corrections for start and end points for discrete distributions\\nif (dist == &#x27;bernoulli&#x27;) {\\n\\txRangeMin = 0.0;\\n\\txRangeMax = 1.0;\\n}\\nelse if (dist == &#x27;categorical&#x27;) {\\n\\txRangeMin = 1;\\n\\txRangeMax = x_p.length;\\n}\\nelse {\\n  \\txRangeMin = Math.max(0, Math.floor(xRangeMin));\\n\\txRangeMax = Math.floor(xRangeMax);\\n}\\n\\n// x-values to evaluate PMF and CDF\\nx_p = arange(xRangeMin, xRangeMax+1);\\nlet xSize = xRangeMax - xRangeMin;\\n\\nx_c = [];\\nfor (var i = 0; i &lt; x_p.length; i++) x_c.push(x_p[i], x_p[i]);\\n\\nx_c.unshift(Math.max(xRangeMin - 0.05 * xSize, xRangeMin - 0.95));\\nx_c.push(Math.min(xRangeMax + 0.05 * xSize, xRangeMax + 0.95));\\n\\n// Update sources with new x-values\\nsource_p.data[&#x27;x&#x27;] = x_p;\\nsource_c.data[&#x27;x&#x27;] = x_c;\\n\\n// Update the PMF and CDF\\nsource_p.data[&#x27;y_p&#x27;] = update_y_p(probFun, \\n    x_p, arg1.value, arg2.value, arg3.value);\\nsource_c.data[&#x27;y_c&#x27;] = update_y_c_discrete(probFun, \\n\\tx_c, source_p.data[&#x27;y_p&#x27;], arg1.value, arg2.value, arg3.value);\\n\\nsource_p.change.emit();\\nsource_c.change.emit();\\n"},"id":"5963","type":"CustomJS"},{"attributes":{"children":[{"id":"5966"},{"id":"5964"},{"id":"5968"}]},"id":"5974","type":"Row"},{"attributes":{"text":"Negative Binomial"},"id":"5880","type":"Title"},{"attributes":{"end":20,"js_property_callbacks":{"change:value":[{"id":"5963"}]},"start":0,"step":0.01,"title":"\\u03b2","value":5},"id":"5965","type":"Slider"},{"attributes":{"children":[{"id":"5974"},{"id":"5975"}]},"id":"5976","type":"Column"},{"attributes":{"axis_label":"PMF","formatter":{"id":"5981"},"major_label_policy":{"id":"5980"},"ticker":{"id":"5895"}},"id":"5894","type":"LinearAxis"},{"attributes":{"end":20,"js_property_callbacks":{"change:value":[{"id":"5963"}]},"start":0,"step":0.01,"title":"\\u03b1","value":5},"id":"5964","type":"Slider"},{"attributes":{},"id":"5886","type":"LinearScale"},{"attributes":{"children":[{"id":"6004"},{"id":"6006"}]},"id":"6007","type":"Row"},{"attributes":{"source":{"id":"5946"}},"id":"5957","type":"CDSView"},{"attributes":{},"id":"5899","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5954","type":"Circle"},{"attributes":{},"id":"5901","type":"SaveTool"},{"attributes":{"height":10},"id":"6008","type":"Spacer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x0":{"field":"x"},"x1":{"field":"x"},"y0":{"value":0},"y1":{"field":"y_p"}},"id":"5960","type":"Segment"},{"attributes":{},"id":"5902","type":"ResetTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y_p"}},"id":"5955","type":"Circle"},{"attributes":{"axis_label":"y","formatter":{"id":"5984"},"major_label_policy":{"id":"5983"},"ticker":{"id":"5891"}},"id":"5890","type":"LinearAxis"},{"attributes":{"data_source":{"id":"5946"},"glyph":{"id":"5954"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5955"},"view":{"id":"5957"}},"id":"5956","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"5894"},"dimension":1,"ticker":null},"id":"5897","type":"Grid"},{"attributes":{"children":[{"id":"5976"},{"id":"6008"},{"id":"6007"}]},"id":"6009","type":"Column"},{"attributes":{"data_source":{"id":"5947"},"glyph":{"id":"5949"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5950"},"view":{"id":"5952"}},"id":"5951","type":"GlyphRenderer"},{"attributes":{"active_multi":null,"tools":[{"id":"5898"},{"id":"5899"},{"id":"5900"},{"id":"5901"},{"id":"5902"},{"id":"5903"}]},"id":"5905","type":"Toolbar"},{"attributes":{},"id":"5895","type":"BasicTicker"},{"attributes":{"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y_c"}},"id":"5949","type":"Line"},{"attributes":{"axis":{"id":"5890"},"ticker":null},"id":"5893","type":"Grid"},{"attributes":{},"id":"5983","type":"AllLabels"},{"attributes":{},"id":"5898","type":"PanTool"},{"attributes":{},"id":"5903","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5937","type":"BoxAnnotation"},{"attributes":{"text":" "},"id":"5913","type":"Title"},{"attributes":{},"id":"5984","type":"BasicTickFormatter"},{"attributes":{},"id":"5891","type":"BasicTicker"},{"attributes":{},"id":"5884","type":"DataRange1d"},{"attributes":{"active_multi":null,"tools":[{"id":"5931"},{"id":"5932"},{"id":"5933"},{"id":"5934"},{"id":"5935"},{"id":"5936"}]},"id":"5938","type":"Toolbar"},{"attributes":{"js_property_callbacks":{"change:end":[{"id":"5963"}],"change:start":[{"id":"5963"}]},"range_padding":0},"id":"5882","type":"DataRange1d"},{"attributes":{},"id":"5888","type":"LinearScale"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5923"}],"border_fill_alpha":0,"center":[{"id":"5926"},{"id":"5930"}],"frame_height":175,"frame_width":300,"left":[{"id":"5927"}],"renderers":[{"id":"5951"}],"title":{"id":"5913"},"toolbar":{"id":"5938"},"toolbar_location":null,"x_range":{"id":"5882"},"x_scale":{"id":"5919"},"y_range":{"id":"5945"},"y_scale":{"id":"5921"}},"id":"5912","subtype":"Figure","type":"Plot"},{"attributes":{"end":1.05,"start":-0.05},"id":"5945","type":"Range1d"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"5964"}},"code":"\\nslider.end = Math.min(max_value, Number(cb_obj.value));\\n"},"id":"5971","type":"CustomJS"},{"attributes":{},"id":"5993","type":"AllLabels"},{"attributes":{},"id":"5994","type":"BasicTickFormatter"},{"attributes":{"js_property_callbacks":{"change:value":[{"id":"5972"}]},"value":"0","width":70},"id":"5967","type":"TextInput"},{"attributes":{"args":{"max_value":"Infinity","min_value":0,"slider":{"id":"5964"}},"code":"\\n    slider.start = Math.max(min_value, Number(cb_obj.value));\\n"},"id":"5970","type":"CustomJS"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"5904","type":"BoxAnnotation"},{"attributes":{"background_fill_alpha":0,"below":[{"id":"5890"}],"border_fill_alpha":0,"center":[{"id":"5893"},{"id":"5897"}],"frame_height":175,"frame_width":300,"left":[{"id":"5894"}],"renderers":[{"id":"5956"},{"id":"5961"}],"title":{"id":"5880"},"toolbar":{"id":"5905"},"toolbar_location":null,"x_range":{"id":"5882"},"x_scale":{"id":"5886"},"y_range":{"id":"5884"},"y_scale":{"id":"5888"}},"id":"5879","subtype":"Figure","type":"Plot"}],"root_ids":["6009"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"560a324e-0e37-4231-b49d-b683528d0a8a","root_ids":["6009"],"roots":{"6009":"e954f6d9-cc53-4641-a055-765eab4f6515"}}];
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