var CmmnJS = window.CmmnJS;

var cmmnjs = new CmmnJS({ container: '#canvas' });

function success() {
  $('body').addClass('success');
}

function fail(err) {
  $('body').addClass('fail');

  console.error('something went wrong!');
  console.error(err);
}

$.get('../resources/claims-file.cmmn', function(caseDiagram) {

  cmmnjs.importXML(caseDiagram, function(err) {

    if (err) {
      return fail(err);
    }

    try {
      cmmnjs.get('canvas').zoom('fit-viewport');
      return success();
    } catch (e) {
      return fail(e);
    }
  });

}, 'text');