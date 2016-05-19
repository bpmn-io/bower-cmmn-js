var CmmnJS = window.CmmnJS;

var modeler = new CmmnJS({ container: '#modeler' }),
    viewer = new CmmnJS.Viewer({ container: '#viewer' }),
    navigatedViewer = new CmmnJS.NavigatedViewer({ container: '#navigated-viewer' });

function success() {
  $('body').removeClass('fail').addClass('success');
}

function fail(err) {
  $('body').addClass('fail');

  console.error('something went wrong!');
  console.error(err);
}

var cmmnjsInstances = [ modeler, viewer, navigatedViewer ];

var loadedCount = 0;

function loadInstances(instances) {
  return function(diagram) {
    instances.forEach(function(instance) {
      instance.importXML(diagram, function(err) {

        if (err) {
          return fail(err);
        }

        loadedCount++;

        if (loadedCount === cmmnjsInstances.length) {
          success();
        }

        try {
          instance.get('canvas').zoom('fit-viewport');
          return success();
        } catch (e) {
          return fail(e);
        }
      });
    });
  }
}

$.get('../resources/claims-file.cmmn', loadInstances(cmmnjsInstances), 'text');