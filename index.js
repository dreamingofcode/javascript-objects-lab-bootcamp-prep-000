var recipes={};

function updateObjectWithKeyAndValue(object, key, value){
object.assign({},object,{[key]:"value"});
updateObjectWithKeyAndValue(obj, 'prop2', 2);
}