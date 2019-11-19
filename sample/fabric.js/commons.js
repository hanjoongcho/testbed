var objCount = 0;
var addRect = function() {
    objCount++;
    var coord = getRandomLeftTop();

    var obj = canvas.add(new fabric.Rect({
        left : coord.left,
        top : coord.top,
        fill : '#' + getRandomColor(),
        width : 50,
        height : 50,
        opacity : 0.8,
        info: {id: 'rect_' + objCount, attr1: '속성1', attr2: '속성2'}
    }));
};

var addCircle = function() {
    objCount++;
    var coord = getRandomLeftTop();

    canvas.add(new fabric.Circle({
        left : coord.left,
        top : coord.top,
        fill : '#' + getRandomColor(),
        radius : 50,
        opacity : 0.8,
        info: {id: 'circle_' + objCount, attr1: '속성1', attr2: '속성2'}
    }));
};

var addTriangle = function() {
    objCount++;
    var coord = getRandomLeftTop();

    canvas.add(new fabric.Triangle({
        left : coord.left,
        top : coord.top,
        fill : '#' + getRandomColor(),
        width : 50,
        height : 50,
        opacity : 0.8,
        info: {id: 'triangle_' + objCount, attr1: '속성1', attr2: '속성2'}
    }));
};

var addTextbox = function() {
    objCount++;
    var text = 'Hello fabric.js';

    var textSample = new fabric.Textbox(text, {
        fontSize : 20,
        left : getRandomInt(10, 400),
        top : getRandomInt(10, 400),
        fontFamily : 'helvetica',
        angle : /*getRandomInt(-10, 10)*/ 0,
        fill : '#' + getRandomColor(),
        fontWeight : '',
        originX : 'left',
        width : 150,
        hasRotatingPoint : true,
        centerTransform : true,
        info: {id: 'textbox_' + objCount, attr1: '속성1', attr2: '속성2'}
    });

    canvas.add(textSample);
};

function addImage(imageName, minScale, maxScale) {
    var coord = getRandomLeftTop();

    fabric.Image.fromURL('../assets/' + imageName, function(image) {
        image.set({
            left : coord.left,
            top : coord.top,
            angle : getRandomInt(-10, 10)
        }).scale(getRandomNum(minScale, maxScale)).setCoords();
        canvas.add(image);
    });
};
  
  
  