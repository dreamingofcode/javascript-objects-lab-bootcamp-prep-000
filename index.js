var recipes={};

function updateObjectWithKeyAndValue(object, key, value){
object[key]="value";
return updateObjectWithKeyAndValue(object, 'prop2', 2);
}

