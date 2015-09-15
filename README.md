# cmmn-js Bower Package

This is a packaged version of [cmmn-js](https://github.com/bpmn-io/cmmn-js) for usage via [bower](http://bower.io).


## Usage

Install the dependency via

```
bower install cmmn-js
```

Include the file into your project

```html
<!-- dependencies ... -->

<!-- cmmn-js -->
<script src="bower_components/cmmn-js/dist/cmmn-viewer.js"></script>

<script>
  // require is part of bundle file
  var CmmnViewer = window.CmmnJS;

  var xml; // ADD CMMN 1.1 XML HERE
  var viewer = new CmmnViewer({ container: 'body' });

  viewer.importXML(xml, function(err) {

    if (err) {
      console.log('error rendering', err);
    } else {
      console.log('rendered');
    }
  });
</script>
```

## License

Use under the terms of the [bpmn-io license](http://bpmn.io/license).