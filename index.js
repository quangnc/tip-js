// 1. Cách Nhanh Để Lọc Ra Những Item Trùng Lặp Trong Array Javascript
function getUniqueSet(array) {
	return new Set(array)
}

const getUnique = getUniqueSet(['cat', 'dog', 'cat'])
