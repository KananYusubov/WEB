//#region Task1

// function FindProductIndexWithProduct(product, productArray) {
//   return productArray.findIndex((item) => {
//     return item.ProductName == product.ProductName;
//   });
// }

// function FindProductIndexWithProductName(productName, productArray) {
//   return productArray.findIndex((item) => {
//     return item.ProductName == productName;
//   });
// }

// function ShowProducts(productArray) {
//   productArray.forEach((element) => {
//     console.log(
//       `${element.ProductName} ~ ${element.Quantity} ~ ${
//         element.IsPurchased ? "Sold" : "Available"
//       }`
//     );
//   });
// }

// function ShowProductsWithOrder(productArray) {
//   let sortedProducts = productArray;
//   sortedProducts.sort((a, b) => {
//     if (a.IsPurchased && !b.IsPurchased) return -1;
//     if (!a.IsPurchased && b.IsPurchased) return 1;
//     else return 0;
//   });

//   ShowProducts(sortedProducts);
// }

// function AddProduct(product) {
//   let index = FindProductIndexWithProduct(product, shoppingList);

//   if (index < 0) shoppingList.push(product);
//   else shoppingList[index].Quantity += product.Quantity;
// }

// function PurchaseProduct(productName) {
//   let index = FindProductIndexWithProductName(productName, shoppingList);

//   if (index < 0) {
//     console.log("Product not found !");
//     return;
//   }

//   if (shoppingList[index].IsPurchased) {
//     console.log("Product has been Sold !");
//     return;
//   }

//   shoppingList[index].IsPurchased = true;
// }

// var shoppingList = new Array();
// var water = {
//   ProductName: "Water",
//   Quantity: 5,
//   IsPurchased: false,
// };
// var bred = {
//   ProductName: "Bred",
//   Quantity: 25,
//   IsPurchased: true,
// };

// shoppingList.push(water);
// shoppingList.push(bred);

// var egg = {
//   ProductName: "Egg",
//   Quantity: 10,
//   IsPurchased: false,
// };

// AddProduct(egg);

// ShowProducts(shoppingList);

// // console.log("\n");
// // PurchaseProduct("Egg");
// // console.log("\n");
// // ShowProducts(shoppingList);
// // AddProduct(egg);
// // ShowProducts(shoppingList);

// // console.log(shoppingList);

//#endregion

//#region Task2

// function ShowReceipt(receipt) {
//   receipt.forEach((element) => {
//     console.log(
//       `${element.ProductName} | ${element.Quantity} | ${element.Price} ₼`
//     );
//   });
// }

// function FindTotalPrice(receipt) {
//   let totalPrice = 0;
//   receipt.forEach((element) => {
//     totalPrice += element.Price;
//   });

//   return totalPrice;
// }

// function FindExpensiveProduct(receipt) {
//   let expensiveProduct = receipt[0];

//   receipt.forEach((element) => {
//     if (element.Price > expensiveProduct.Price) expensiveProduct = element;
//   });

//   return expensiveProduct;
// }

// function FindAveragePrice(receipt) {
//   return FindTotalPrice(receipt) / receipt.length;
// }

// var receipt = new Array();

// var water = {
//   ProductName: "Water",
//   Quantity: 5,
//   Price: 0.4,
// };
// var bred = {
//   ProductName: "Bred",
//   Quantity: 5,
//   Price: 0.7,
// };

// receipt.push(water);
// receipt.push(bred);

// // ShowReceipt(receipt);

// // console.log(`Total Price: ${FindTotalPrice(receipt)}`);

// // console.log(`Max Price: ${FindExpensiveProduct(receipt).Price}`);

// // console.log(`Average Price: ${FindAveragePrice(receipt)}`);

//#endregion

// Task 3deki kodu developer consolda yazanda isleyir ancaq buradan run edenende islemir arasdirdim SSL secure gore problem cixirmis bu sebebden gerek texti kopyalayib consolda yazaq texti console.log ile console cixardiram oradan kopyalaya bilersiniz

//#region Task3

// function CreateStyleString(tagStyle) {
//   let result = "style='";
//   for (const key in tagStyle) {
//     result += key;
//     result += ":";
//     result += tagStyle[key];
//     result += ";";
//   }

//   result += "'";
//   return result;
// }

// var pStyle = {
//   ["text-decoration"]: "underline",
//   ["color"]: "red",
//   ["font-size"]: "30px",
// };

// var styleString = CreateStyleString(pStyle);

// var tagString = `<p ${styleString}>This 'p' tag writhed by JavaScript</p>`;
// console.log(tagString);
// document.write(tagString);

// element.replaceChild(newNode, element);

//#endregion

//#region Task_4

// function ShowAcademy(academyArray) {
//   academyArray.forEach((classRoom) => {
//     console.log(
//       `${classRoom.Name} ~ ${classRoom.Seat} ~ ${classRoom.Department}`
//     );
//   });
// }

// function GetClassRoomWithDepartment(departmentName, academyArray) {
//   let result = new Array();

//   academy.forEach((classRoom) => {
//     if (classRoom.Department == departmentName) result.push(classRoom);
//   });

//   return result;
// }

// function ShowSpecifiedDepartmentClassRoom(departmentName, academyArray) {
//   ShowAcademy(GetClassRoomWithDepartment(departmentName, academyArray));
// }

// function SortCLassRoomWithSeat(academyArray) {
//   academyArray.sort((c1, c2) => {
//     if (c1.Seat > c2.Seat) return 1;
//     else if (c1.Seat < c2.Seat) return -1;
//     else return 0;
//   });

//   return academyArray;
// }

// function SortCLassRoomWithName(academyArray) {
//   academyArray.sort((c1, c2) => {
//     return c1.Name > c2.Name ? 1 : 1;
//   });

//   return academyArray;
// }

// function GetAvailableGroupForTransferring(transferringGroup) {
//   let availableClasses = GetClassRoomWithDepartment(
//     transferringGroup.departmentName
//   );
//   let classRoom;

//   availableClasses = SortCLassRoomWithSeat(availableClasses);

//   availableClasses.forEach((element) => {
//     if (element.Seat >= transferringGroup.NumberOfStudent) {
//       classRoom = element;
//       return classRoom;
//     }
//   });

//   return classRoom;
// }

// var academy = new Array();

// var class1 = {
//   Name: "group_prog_1_aze",
//   Seat: 15,
//   Department: "Programing",
// };

// var class2 = {
//   Name: "group_design_1_aze",
//   Seat: 20,
//   Department: "Design",
// };

// var class3 = {
//   Name: "group_cs_1_aze",
//   Seat: 1,
//   Department: "Cyber Security",
// };

// var class4 = {
//   Name: "group_design_1_aze",
//   Seat: 7,
//   Department: "Design",
// };

// var class5 = {
//   Name: "group_prog_1_aze",
//   Seat: 10,
//   Department: "Programing",
// };

// var class6 = {
//   Name: "aze_1",
//   Seat: 7,
//   Department: "Programing",
// };

// academy.push(class1);
// academy.push(class2);
// academy.push(class3);
// academy.push(class4);
// academy.push(class5);
// academy.push(class6);

// ShowAcademy(academy);

// ShowSpecifiedDepartmentClassRoom("Design", academy);

// var transferGroup = {
//   Name: "Transferring-group",
//   NumberOfStudent: 10,
//   departmentName: "Programing",
// };

// console.log(GetAvailableGroupForTransferring(transferGroup));

// ShowAcademy(SortCLassRoomWithSeat(academy));

// ShowAcademy(SortCLassRoomWithName(academy));

//#endregion
