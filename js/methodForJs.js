//判断两个数组是否相似:1.数组中的成员类型相同，顺序可以不同;2.数组的长度一致;3.类型的判断范围，需要区分:String, Boolean, Number, undefined, null, 函数，日期, window.
function arraysSimilar(arr1, arr2) {
	//验证是否传入数组
	if(arr1 instanceof Array && arr2 instanceof Array) {
		//创建两个数组存储传入数组每个成员的类型
		var typeArr1 = [],
			typeArr2 = [],
			len = arr1.length;
		//长度不相等直接返回不通过
		if(arr1.length != arr2.length) {
			return "判断结果：不通过";
		}
		//长度相等同为空数组返回通过；
		if(len === 0) {
			return "判断结果：通过";
		}
		//判断每个成员类型并增加到数组中
		for(var i = 0; i < len; i++) {
			typeArr1.push(myType(arr1[i]));
			typeArr2.push(myType(arr2[i]));
		}
		//数组进行排序
		typeArr1.sort();
		typeArr2.sort();
		//打印到控制台看数组类型
		console.log(typeArr1.toString()+"+"+typeArr2.toString());
		//数组不能直接比较，要转化为字符串才能进行比较
		if(typeArr1.toString() == typeArr2.toString()) {
			return "判断结果：通过";
		} else {
			return "判断结果：不通过";
		}
	} else {
		return "判断结果：不通过";
	}
}
//从object中细分出window，null，array，date的类型
function myType(item) {
	var type = typeof item;
	if(type != "object") {

	} else if(item == window) {
		type = "window";
	} else if(item == null) {
		type = "null";
	} else {
		if(item instanceof Date) {
			type = "date";
		} else if(item instanceof Array) {
			type = "array";
		} else {
			type = "object";
		}
	}
	return type;
}