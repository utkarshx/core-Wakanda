/*
* This file is part of Wakanda software, licensed by 4D under
*  (i) the GNU General Public License version 3 (GNU GPL v3), or
*  (ii) the Affero General Public License version 3 (AGPL v3) or
*  (iii) a commercial license.
* This file remains the exclusive property of 4D and/or its licensors
* and is protected by national and international legislations.
* In any event, Licensee's compliance with the terms and conditions
* of the applicable license constitutes a prerequisite to any use of this file.
* Except as otherwise expressly stated in the applicable license,
* such license does not include any other license or rights on this file,
* 4D's and/or its licensors' trademarks and/or other proprietary rights.
* Consequently, no title, copyright or other proprietary rights
* other than those specified in the applicable license is granted.
*/
var testCase = {    name: "BinaryStream Test",	_should: {        ignore: {        	// getString() seems to have some issues...        	testObjectBinaryStreamGetStringLogic1: true,        	testObjectBinaryStreamGetStringLogic2: true,        	testObjectBinaryStreamGetStringLogic3: true,        	testObjectBinaryStreamGetStringLogic4: true,        	testObjectBinaryStreamPutByteLogic2: true        }    },        //1 - Class BinaryStream exist    testClassBinaryStreamExists: function () {        Y.Assert.areSame("function", typeof BinaryStream);    },    //2 - BinaryStream instance from String    testObjectBinaryStreamInstanceFromString: function () {        var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.isObject(obj);        obj.close();    },        //2b - BinaryStream instance from non-existing path as String    testObjectBinaryStreamInstanceFromNonExistingString: function () {        var appPath = application.getFolder("path");        try {        	var obj = BinaryStream(appPath + 'Src/binary_0.file', 'Read');        	Y.Assert.fail("Should throw an error.");        	obj.close();        }        catch (e) {        	Y.Assert.isTrue(true);        }    },            //2c - BinaryStream write instance from non-writeable path as String    testObjectBinaryStreamInstanceFromNonWriteableString: function () {        var appPath = application.getFolder("path");        try {        	var obj = BinaryStream(appPath + 'Dest/binary_1.file.no_overwrite', 'Write');        	Y.Assert.fail("Should throw an error.");        	obj.close();        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //2d - BinaryStream instance from writeable path as String    testObjectBinaryStreamInstanceFromWriteableString: function () {        var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Dest/binary_1.file.overwrite', 'Write');        Y.Assert.isObject(obj);        obj.close();    },    //3 - BinaryStream instance from File    testObjectBinaryStreamInstanceFromFile: function () {        var folderPath = application.getFolder("path") + 'Src/';        var obj = BinaryStream(File(folderPath + 'binary_1.file'), 'Read');        Y.Assert.isObject(obj);        obj.close();    },        //3b - BinaryStream instance from non-existing File    testObjectBinaryStreamInstanceFromNonExistingFile: function () {        var folderPath = application.getFolder("path") + 'Src/';        try {        	var obj = BinaryStream(File(folderPath + 'binary_0.file'), 'Read');        	Y.Assert.fail("Should throw an error.");        	obj.close();        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //3c - BinaryStream write instance from non-writeable File    testObjectBinaryStreamInstanceFromNonWriteableFile: function () {        var folderPath = application.getFolder("path") + 'Dest/';        try {        	var obj = BinaryStream(File(folderPath + 'binary_1.file.no_overwrite'), 'Write');			Y.Assert.fail("Should throw an error.");        	obj.close();        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //3d - BinaryStream instance from writeable File    testObjectBinaryStreamInstanceFromWriteableFile: function () {        var folderPath = application.getFolder("path") + 'Dest/';        var obj = BinaryStream(File(folderPath + 'binary_1.file.overwrite'), 'Write');        Y.Assert.isObject(obj);        obj.close();    },        //4 - changeByteOrder() method exists    testObjectBinaryStreamChangeByteOrderExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.changeByteOrder);        obj.close();    },        //5 - close() method exists    testObjectBinaryStreamCloseExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.close);        obj.close();    },        //6 - flush() method exists    testObjectBinaryStreamFlushExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.flush);        obj.close();    },        //7 - getByte() method exists    testObjectBinaryStreamGetByteExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getByte);        obj.close();    },        //8 - getLong() method exists    testObjectBinaryStreamGetLongExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getLong);        obj.close();    },        //9 - getLong64() method exists    testObjectBinaryStreamGetLong64Exists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getLong64);        obj.close();    },        //10 - getPos() method exists    testObjectBinaryStreamGetPosExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getPos);        obj.close();    },        //11 - getReal() method exists    testObjectBinaryStreamGetRealExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getReal);        obj.close();    },        //12 - getSize() method exists    testObjectBinaryStreamGetSizeExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getSize);        obj.close();    },        //13 - getString() method exists    testObjectBinaryStreamGetStringExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getString);        obj.close();    },        //14 - getWord() method exists    testObjectBinaryStreamGetWordExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.getWord);        obj.close();    },        //15 - isByteSwapping() method exists    testObjectBinaryStreamIsByteSwappingExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.isByteSwapping);        obj.close();    },        //16 - putByte() method exists    testObjectBinaryStreamIsPutByteExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.putByte);        obj.close();    },        //17 - putLong() method exists    testObjectBinaryStreamIsPutLongExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.putLong);        obj.close();    },        //18 - putLong64() method exists    testObjectBinaryStreamIsPutLong64Exists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.putLong64);        obj.close();    },        //19 - putReal() method exists    testObjectBinaryStreamIsPutRealExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.putReal);        obj.close();    },        //20 - putString() method exists    testObjectBinaryStreamIsPutStringExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.putString);        obj.close();    },        //21 - putWord() method exists    testObjectBinaryStreamIsPutWordExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.putWord);        obj.close();    },        //22 - setPos() method exists    testObjectBinaryStreamIsSetPosExists: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame("function", typeof obj.setPos);        obj.close();    },        //23 - getSize() method logic #1    testObjectBinaryStreamGetSizeLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame(120, obj.getSize());        obj.close();    },        //24 - getSize() method logic #2    testObjectBinaryStreamGetSizeLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_2.file', 'Read');        Y.Assert.areSame(32433, obj.getSize());        obj.close();    },        //25 - getPos() method logic #1    testObjectBinaryStreamGetPosLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        Y.Assert.areSame(0, obj.getPos());        obj.close();    },        //26 - getPos() method logic #2    testObjectBinaryStreamGetPosLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getByte();        Y.Assert.areSame(1, obj.getPos());        obj.close();    },        //27 - getPos() method logic #3    testObjectBinaryStreamGetPosLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getByte();        obj.getByte();        Y.Assert.areSame(2, obj.getPos());        obj.close();    },        //28 - getPos() method logic #4    testObjectBinaryStreamGetPosLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getLong();        Y.Assert.areSame(4, obj.getPos());        obj.close();    },        //29 - getPos() method logic #5    testObjectBinaryStreamGetPosLogic5: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getLong();        obj.getLong();        Y.Assert.areSame(8, obj.getPos());        obj.close();    },        //30 - getPos() method logic #6    testObjectBinaryStreamGetPosLogic6: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getLong64();        Y.Assert.areSame(8, obj.getPos());        obj.close();    },        //31 - getPos() method logic #7    testObjectBinaryStreamGetPosLogic7: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getLong64();        obj.getLong64();        Y.Assert.areSame(16, obj.getPos());        obj.close();    },        //32 - getPos() method logic #8    testObjectBinaryStreamGetPosLogic8: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getReal();        Y.Assert.areSame(8, obj.getPos());        obj.close();    },        //33 - getPos() method logic #9    testObjectBinaryStreamGetPosLogic9: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getReal();        obj.getReal();        Y.Assert.areSame(16, obj.getPos());        obj.close();    },        //34 - getPos() method logic #10    testObjectBinaryStreamGetPosLogic10: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getWord();        Y.Assert.areSame(2, obj.getPos());        obj.close();    },        //35 - getPos() method logic #11    testObjectBinaryStreamGetPosLogic11: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.getWord();        obj.getWord();        Y.Assert.areSame(4, obj.getPos());        obj.close();    },        //36 - setPos() method logic #1    testObjectBinaryStreamSetPosLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(0);        Y.Assert.areSame(0, obj.getPos());        obj.close();    },        //37 - setPos() method logic #2    testObjectBinaryStreamSetPosLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(2);        Y.Assert.areSame(2, obj.getPos());        obj.close();    },        //38 - setPos() method logic #3    testObjectBinaryStreamSetPosLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(5);        Y.Assert.areSame(5, obj.getPos());        obj.close();    },        //39 - setPos() method logic #4    testObjectBinaryStreamSetPosLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(120); // EOF        Y.Assert.areSame(120, obj.getPos());        obj.close();    },        //39b - setPos() method logic #4b    testObjectBinaryStreamSetPosLogic4b: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_2.file', 'Read');        obj.setPos(32433); // EOF        Y.Assert.areSame(32433, obj.getPos());        obj.close();    },        //39c - setPos() method logic #4c    testObjectBinaryStreamSetPosLogic4c: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_3.file', 'Read');        obj.setPos(621294); // EOF        Y.Assert.areSame(621294, obj.getPos());        obj.close();    },        //40 - setPos() method logic #5    testObjectBinaryStreamSetPosLogic5: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        try {        	obj.setPos(121);        	Y.Assert.fail("Should throw an error.");        	obj.close();        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //41 - setPos() method logic #6    testObjectBinaryStreamSetPosLogic6: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        try {        	obj.setPos(-1);        	Y.Assert.fail("Should throw an error.");        	obj.close();        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //42 - close() method logic #1    testObjectBinaryStreamCloseLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');		obj.close();		Y.Assert.areSame(0, obj.getPos());    },        //43 - close() method logic #2    testObjectBinaryStreamCloseLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(2);		obj.close();		Y.Assert.areSame(2, obj.getPos());    },        //44 - close() method logic #3    testObjectBinaryStreamCloseLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.close();        try {        	obj.setPos(2);        	Y.Assert.fail("Should throw an error.");        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //45 - close() method logic #4    testObjectBinaryStreamCloseLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.close();        try {        	obj.getWord();        	Y.Assert.fail("Should throw an error.");        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //46 - close() method logic #5    testObjectBinaryStreamCloseLogic5: function () {        var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Dest/binary_1.file.overwrite', 'Write');        obj.close();        try {        	obj.putWord(42);        	Y.Assert.fail("Should throw an error.");        }        catch (e) {        	Y.Assert.isTrue(true);        }    },        //47 - getByte() method logic #1    testObjectBinaryStreamGetByteLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result = obj.getByte().toString(16);        obj.close();        Y.Assert.areSame(1, obj.getPos());        Y.Assert.areSame("61", result);    },        //48 - getByte() method logic #2    testObjectBinaryStreamGetByteLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(10);        var result = obj.getByte().toString(16);        obj.close();        Y.Assert.areSame(11, obj.getPos());        Y.Assert.areSame("6b", result);    },        //49 - getByte() method logic #3    testObjectBinaryStreamGetByteLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(119);        var result = obj.getByte().toString(16);        obj.close();        Y.Assert.areSame(120, obj.getPos());        Y.Assert.areSame("0", result);    },        //50 - getByte() method logic #4    testObjectBinaryStreamGetByteLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(120); // EOF        var result = obj.getByte();        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.isNull(result);    },        //51 - getLong() method logic #1    testObjectBinaryStreamGetLongLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result = obj.getLong().toString(16);        obj.close();        Y.Assert.areSame(4, obj.getPos());        Y.Assert.areSame("64636261", result);    },        //52 - getLong() method logic #2    testObjectBinaryStreamGetLongLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');    	obj.setPos(1);		var result = obj.getLong().toString(16);        obj.close();        Y.Assert.areSame(5, obj.getPos());        Y.Assert.areSame("65646362", result);    },        //53 - getLong() method logic #3    testObjectBinaryStreamGetLongLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');    	obj.setPos(116);		var result = obj.getLong().toString(16);        obj.close();        Y.Assert.areSame(120, obj.getPos());        Y.Assert.areSame("ffff", result);    },        //54 - getLong() method logic #4    testObjectBinaryStreamGetLongLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(119); // almost EOF        var result = obj.getLong();        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.isNull(result);    },        //55 - getLong64() method logic #1    testObjectBinaryStreamGetLong64Logic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result = obj.getLong64().toString(16);        obj.close();        Y.Assert.areSame(8, obj.getPos());       	Y.Assert.areSame("6867666564636400", result);    },        //56 - getLong64() method logic #2    testObjectBinaryStreamGetLong64Logic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(1);        var result = obj.getLong64().toString(16);        obj.close();        Y.Assert.areSame(9, obj.getPos());       	Y.Assert.areSame("6968676665646400", result);    },        //57 - getLong64() method logic #3    testObjectBinaryStreamGetLong64Logic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(112);        var result = obj.getLong64().toString(16);        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.areSame("ffffffffdddd", result);    },        //58 - getLong64() method logic #4    testObjectBinaryStreamGetLong64Logic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(116); // almost EOF        var result = obj.getLong64();        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.isNull(result);    },        //59 - getReal() method logic #1    testObjectBinaryStreamGetRealLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result = obj.getReal().toExponential();        obj.close();        Y.Assert.areSame(8, obj.getPos());       	Y.Assert.areSame("8.540883223036124e+194", result);       	// 8.54088322303612443556132715409e+194 ???       	// http://www.binaryconvert.com/result_double.html?hexadecimal=6867666564636261    },        //60 - getReal() method logic #2    testObjectBinaryStreamGetRealLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(1);        var result = obj.getReal().toExponential();        obj.close();        Y.Assert.areSame(9, obj.getPos());       	Y.Assert.areSame("5.837494567806667e+199", result);       	// 5.83749456780666737131310799708e+199" ???        	// http://www.binaryconvert.com/result_double.html?hexadecimal=6968676665646362    },        //61 - getReal() method logic #3    testObjectBinaryStreamGetRealLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(112);        var result = obj.getReal().toExponential();        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.areSame("1.390671161523824e-309", result);       	// 1.39067116152382446764132891284e-309 ???       	// http://www.binaryconvert.com/result_double.html?hexadecimal=0000FFFFFFFFDDDD    },        //62 - getReal() method logic #4    testObjectBinaryStreamGetRealLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(116); // almost EOF        var result = obj.getReal();        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.isNull(result);    },        //63 - getString() method logic #1    testObjectBinaryStreamGetStringLogic1: function () {       // pos 0    },        //64 - getString() method logic #2    testObjectBinaryStreamGetStringLogic2: function () {       	// pos 1    },        //65 - getString() method logic #3    testObjectBinaryStreamGetStringLogic3: function () {       	// pos last available    },        //66 - getString() method logic #4    testObjectBinaryStreamGetStringLogic4: function () {       	// pose ~EOF    },        //67 - getWord() method logic #1    testObjectBinaryStreamGetWordLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result = obj.getWord().toString(16);        obj.close();        Y.Assert.areSame(2, obj.getPos());       	Y.Assert.areSame("6261", result);    },        //68 - getWord() method logic #2    testObjectBinaryStreamGetWordLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(1);        var result = obj.getWord().toString(16);        obj.close();        Y.Assert.areSame(3, obj.getPos());       	Y.Assert.areSame("6362", result);    },        //69 - getWord() method logic #3    testObjectBinaryStreamGetWordLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(118);        var result = obj.getWord().toString(16);        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.areSame("0", result);    },        //70 - getWord() method logic #4    testObjectBinaryStreamGetWordLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(119); // almost EOF        var result = obj.getWord();        obj.close();        Y.Assert.areSame(120, obj.getPos());       	Y.Assert.isNull(result);    },        //71 - ByteSwapping logic #1    testObjectBinaryStreamByteSwappingLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result = obj.isByteSwapping();        obj.close();        Y.Assert.isFalse(result);    },        //72 - ByteSwapping logic #2    testObjectBinaryStreamByteSwappingLogic2: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.changeByteOrder();        var result = obj.isByteSwapping();        obj.close();        Y.Assert.isTrue(result);    },        //73 - ByteSwapping logic #3    testObjectBinaryStreamByteSwappingLogic3: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.changeByteOrder();        obj.changeByteOrder();        var result = obj.isByteSwapping();        obj.close();        Y.Assert.isFalse(result);    },        //74 - ByteSwapping logic #4    testObjectBinaryStreamByteSwappingLogic4: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.changeByteOrder();        obj.changeByteOrder();        obj.changeByteOrder();        var result = obj.isByteSwapping();        obj.close();        Y.Assert.isTrue(result);    },        //75 - ByteSwapping logic #5    testObjectBinaryStreamByteSwappingLogic5: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result1 = obj.getByte().toString(16);        obj.setPos(0);        obj.changeByteOrder();        var result2 = obj.getByte().toString(16);        obj.close();        Y.Assert.areSame("61/61", result1 + "/" + result2);    },        //76 - ByteSwapping logic #6    testObjectBinaryStreamByteSwappingLogic6: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(2);        var result1 = obj.getByte().toString(16);        obj.setPos(2);        obj.changeByteOrder();        var result2 = obj.getByte().toString(16);        obj.close();        Y.Assert.areSame("63/63", result1 + "/" + result2);    },        //77 - ByteSwapping logic #7    testObjectBinaryStreamByteSwappingLogic7: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        var result1 = obj.getLong().toString(16);        obj.setPos(0);        obj.changeByteOrder();        var result2 = obj.getLong().toString(16);        obj.close();        Y.Assert.areSame("64636261/61626364", result1 + "/" + result2);    },        //78 - ByteSwapping logic #8    testObjectBinaryStreamByteSwappingLogic8: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        obj.setPos(2);		var result1 = obj.getLong().toString(16);        obj.setPos(2);        obj.changeByteOrder();        var result2 = obj.getLong().toString(16);        obj.close();        Y.Assert.areSame("66656463/63646566", result1 + "/" + result2);    },        //79 - putByte logic #1    testObjectBinaryStreamPutByteLogic1: function () {       	var appPath = application.getFolder("path");        var obj = BinaryStream(appPath + 'Src/binary_1.file', 'Read');        try {        	obj.putByte(42);        	Y.Assert.fail("Should throw an error.");        }        catch (e) {        	Y.Assert.isTrue(true);        }        obj.close();    },        //80 - putByte logic #2    testObjectBinaryStreamPutByteLogic2: function () {       	var appPath = application.getFolder("path");        var obj1 = BinaryStream(appPath + 'Dest/binary_1.file.overwrite', 'Write');        var result1 = obj1.getByte();        obj1.setPos(0);        obj1.putByte(42);        var pos1 = obj1.getPos();		obj1.close();		var obj2 = BinaryStream(appPath + 'Dest/binary_1.file.overwrite', 'Read');		var result2 = obj2.getByte();		obj2.close();		Y.Assert.areNotSame(result1, result2);		Y.Assert.areSame("42", result2.toString(16));		Y.Assert.areSame(1, pos1);    }	/*putByte( )putLong( )putLong64( )putReal( )putString( )putWord( )flush( )	*/};