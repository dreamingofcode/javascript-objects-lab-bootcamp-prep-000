var recipes={};

function updateObjectWithKeyAndValue(object, key, value){
object[key]="value";
return object
}

object.assign({},object,{[key]:"value"});
updateObjectWithKeyAndValue(obj, 'prop2', 2);
}